import { useState } from "react";

export default function App() {
  const [employees, setEmployees] = useState<
    { firstName: string; lastName: string; jobTitle: string }[]
  >([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmployees([...employees, formData]);
    setFormData({ firstName: "", lastName: "", jobTitle: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-400"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-400"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="p-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Add Employee
        </button>
      </form>

      <table className="w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border border-gray-700">First Name</th>
            <th className="p-2 border border-gray-700">Last Name</th>
            <th className="p-2 border border-gray-700">Job Title</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="hover:bg-gray-800">
              <td className="p-2 border border-gray-700">
                {employee.firstName}
              </td>
              <td className="p-2 border border-gray-700">
                {employee.lastName}
              </td>
              <td className="p-2 border border-gray-700">
                {employee.jobTitle}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
