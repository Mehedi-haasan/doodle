import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const PostComment = ({ id, onValueChange }) => {

    const [values, setValues] = useState({
        blogId: id,
        comment: "",
    })

    const handleInputChange = (e) => {
        onValueChange(false);
    };

    const postComment = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        console.log(token);
        const response = await fetch('http://localhost:8050/api/create/comment', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'authorization': token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json();
        handleInputChange()
        alert(data.message)

    }

    return (
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className='mb-2'><Icon onClick={handleInputChange} className='m-3 cursor-pointer float-right' icon="fluent-emoji-flat:cross-mark" /></div>
            <div className='p-4'>
                <div className='pb-2'>
                    <label htmlFor="Comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
                    <textarea onChange={(e) => { setValues({ ...values, comment: e.target.value }) }} type="text" readOnly={false} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your comment" required />
                </div>

                <button type="submit" onClick={postComment} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </div>
    );
};

export default PostComment;