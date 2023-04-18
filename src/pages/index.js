import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  // const [documents, setDocuments] = useState([]);
  // const [formValues, setFormValues] = useState({});

  // useEffect(() => {
  //   axios.get("/api/crud").then((response) => {
  //     setDocuments(response.data);
  //   });
  // }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   axios.post("/api/crud", formValues).then((response) => {
  //     setDocuments([...documents, response.data]);
  //     setFormValues({});
  //   });
  // };

  // const handleDocumentUpdate = (event, id) => {
  //   event.preventDefault();

  //   axios.put(`/api/crud/${id}`, formValues).then((response) => {
  //     const updatedDocuments = documents.map((document) =>
  //       document._id === id ? response.data : document
  //     );
  //     setDocuments(updatedDocuments);
  //     setFormValues({});
  //   });
  // };

  // const handleDocumentDelete = (event, id) => {
  //   event.preventDefault();
  //   axios.delete(`/api/crud/${id}`).then((response) => {
  //     const updatedDocuments = documents.filter(
  //       (document) => document._id !== id
  //     );
  //     setDocuments(updatedDocuments);
  //   });
  // };

  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "555-555-5555",
      address: "456 Oak St, Anytown USA",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      phone: "555-123-4567",
      address: "789 Maple St, Anytown USA",
    },
    {
      id: 4,
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      phone: "555-789-1234",
      address: "987 Elm St, Anytown USA",
    },
    {
      id: 5,
      name: "Mike Davis",
      email: "mikedavis@example.com",
      phone: "555-456-7890",
      address: "654 Pine St, Anytown USA",
    },
    {
      id: 6,
      name: "Lisa Johnson",
      email: "lisajohnson@example.com",
      phone: "555-987-6543",
      address: "321 Cedar St, Anytown USA",
    },
  ]);

  const handleEditClick = (id) => {
    console.log(`Editing student ${id}`);
  };

  const handleReadClick = (id) => {
    console.log(`Reading student ${id}`);
  };

  const handleDeleteClick = (id) => {
    console.log(`Deleting student ${id}`);
  };

  return (
    // <div className="container mx-auto mt-8">
    //   <h1 className="text-4xl mb-4">CRUD App</h1>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
    //         Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="name"
    //         name="name"
    //         type="text"
    //         value={formValues.name || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 font-bold mb-2"
    //         htmlFor="matricNo"
    //       >
    //         Matric Number
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="matricNo"
    //         name="matricNo"
    //         type="text"
    //         value={formValues.matricNo || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="Age">
    //         Age
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="Age"
    //         name="Age"
    //         type="Age"
    //         value={formValues.Age || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="DOB">
    //         Date of birth
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="DOB"
    //         name="DOB"
    //         type="date"
    //         value={formValues.DOB || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 font-bold mb-2"
    //         htmlFor="phoneNo"
    //       >
    //         Phone Number
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="phoneNo"
    //         name="phoneNo"
    //         type="phoneNo"
    //         value={formValues.phoneNo || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 font-bold mb-2"
    //         htmlFor="course"
    //       >
    //         Course
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="course"
    //         name="course"
    //         type="text"
    //         value={formValues.course || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="dept">
    //         Department
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="dept"
    //         name="dept"
    //         type="text"
    //         value={formValues.dept || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="level">
    //         Level
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="level"
    //         name="level"
    //         type="number"
    //         value={formValues.level || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 font-bold mb-2"
    //         htmlFor="content"
    //       >
    //         Content
    //       </label>
    //       <textarea
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="content"
    //         name="content"
    //         value={formValues.content || ""}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <button
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //       type="submit"
    //     >
    //       Add Document
    //     </button>
    //   </form>
    //   <h2 className="text-2xl mt-8 mb-4">Documents</h2>
    //   <ul>
    //     {documents.map((document) => (
    //       <li key={document._id}>
    //         <h3 className="text-lg">{document.title}</h3>
    //         <p>{document.content}</p>
    //         <div className="mt-4">
    //           <button
    //             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
    //             onClick={(event) => handleDocumentUpdate(event, document._id)}
    //           >
    //             Update
    //           </button>
    //           <button
    //             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    //             onClick={(event) => handleDocumentDelete(event, document._id)}
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="container mx-auto pt-10">
      <div className="flex justify-end mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add New Student
        </button>
      </div>

      {/* Table */}
      <div className="mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border py-6 px-4">S/N</th>
              <th className="border py-6 px-4">Name</th>
              <th className="border py-6 px-4">Email</th>
              <th className="border py-6 px-4">Phone</th>
              <th className="border py-6 px-4">Address</th>
              <th className="border py-6 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.phone}</td>
                <td className="border px-4 py-2">{student.address}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleEditClick(student.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 21v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6h14zM7 21h10"
                      />
                    </svg>
                  </button>
                  {/* Read Button */}
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleReadClick(student.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Delete Button */}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteClick(student.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
