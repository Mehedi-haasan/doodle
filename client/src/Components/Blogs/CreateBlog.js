import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'



const Blog = () => {
    const goToHomePage = useNavigate();

    const [values, setValues] = useState({
        title: "",
        message: "",
        image_url:""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        console.log(token);
        const response = await fetch('http://localhost:8050/api/create/blogs', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'authorization':token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json();
        alert(data.message)
        goToHomePage('/home')
    }

    return (


        <form className="max-w-sm mx-auto mb-5 py-5">
            <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Name</label>
                <input type="email" onChange={(e) => { setValues({ ...values, title: e.target.value }) }} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your blog name" required />
            </div>

            <div className="mb-5">
                <label for="Blog Details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Details</label>
                <input type="text" onChange={(e) => { setValues({ ...values, message: e.target.value }) }} id="blog" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your blog details" required />
            </div>
            <div className="mb-5">
                <label for="Image Url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                <input type="text" onChange={(e) => { setValues({ ...values, image_url: e.target.value }) }} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your blog image url" required />
            </div>
            <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    );
};

export default Blog