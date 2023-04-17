import clientPromise from '../../../db';

export default async function handler(req, res) {
  const { method } = req;

  const client = await clientPromise;
  const collection = client.db().collection('crud');

  switch (method) {
    case 'GET':
      try {
        const documents = await collection.find({}).toArray();
        res.status(200).json(documents);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case 'POST':
      try {
        const document = req.body;
        const result = await collection.insertOne(document);
        res.status(200).json(result.ops[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const newDocument = req.body;
        const result = await collection.replaceOne({ _id: ObjectId(id) }, newDocument);
        res.status(200).json(result.ops[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const result = await collection.deleteOne({ _id: ObjectId(id) });
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
