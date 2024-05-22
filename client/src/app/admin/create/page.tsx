'use client'
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    instructor: '',
    category: '',
    price: '0',
    isPublished: false,
    image: null,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setCourseData({ ...courseData, [name]: newValue });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', courseData.title);
    formData.append('description', courseData.description);
    formData.append('instructor', courseData.instructor);
    formData.append('category', courseData.category);

    // formData.append('image', courseData.image);
    
 const response = await axios.post('http://localhost:3001/course', courseData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }})

    }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-lg font-semibold mb-4">Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Description:</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Instructor:</label>
          <input
            type="text"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Category:</label>
          <input
            type="text"
            name="category"
            value={courseData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">
            <input
              type="checkbox"
              name="isPublished"
              checked={courseData.isPublished}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Published
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default Page;
