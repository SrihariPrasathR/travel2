
import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Booking submitted!\n' + JSON.stringify(formData, null, 2));
    setFormData({ name: '', email: '', destination: '', date: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Book Your Travel</h1>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Destination</label>
          <input
            required
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Travel Date</label>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;
