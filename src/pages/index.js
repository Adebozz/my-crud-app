import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [documents, setDocuments] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios.get("/api/crud").then((response) => {
      setDocuments(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post("/api/crud", formValues).then((response) => {
      setDocuments([...documents, response.data]);
      setFormValues({});
    });
  };

  const handleDocumentUpdate = (event, id) => {
    event.preventDefault();

    axios.put(`/api/crud/${id}`, formValues).then((response) => {
      const updatedDocuments = documents.map((document) =>
        document._id === id ? response.data : document
      );
      setDocuments(updatedDocuments);
      setFormValues({});
    });
  };

  const handleDocumentDelete = (event, id) => {
    event.preventDefault();
    axios.delete(`/api/crud/${id}`).then((response) => {
      const updatedDocuments = documents.filter(
        (document) => document._id !== id
      );
      setDocuments(updatedDocuments);
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl mb-4">CRUD App</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formValues.name || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="matricNo"
          >
            Matric Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="matricNo"
            name="matricNo"
            type="text"
            value={formValues.matricNo || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="Age">
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Age"
            name="Age"
            type="Age"
            value={formValues.Age || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="DOB">
            Date of birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DOB"
            name="DOB"
            type="date"
            value={formValues.DOB || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="phoneNo"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNo"
            name="phoneNo"
            type="phoneNo"
            value={formValues.phoneNo || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="course"
          >
            Course
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="course"
            name="course"
            type="text"
            value={formValues.course || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dept">
            Department
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dept"
            name="dept"
            type="text"
            value={formValues.dept || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="level">
            Level
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="level"
            name="level"
            type="number"
            value={formValues.level || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            name="content"
            value={formValues.content || ""}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Document
        </button>
      </form>
      <h2 className="text-2xl mt-8 mb-4">Documents</h2>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>
            <h3 className="text-lg">{document.title}</h3>
            <p>{document.content}</p>
            <div className="mt-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={(event) => handleDocumentUpdate(event, document._id)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={(event) => handleDocumentDelete(event, document._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
