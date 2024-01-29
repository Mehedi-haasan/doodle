import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VievComment from '../Vote/VievComment';

const BlogDetails = () => {

    const [loading, setLoading] = useState(false)
    const params = useParams()
    const [data, setData] = useState([])
    const fetchData = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/get/blogs/${params.id}`, {
            method: 'GET',
            headers: {
                'authorization': token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        console.log(data);
        setData(data.items)
        if(data || data.items.length > 0){
            setLoading(true)
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='w-full md:w-[90%] lg:w-[85%] mx-auto py-5'>
            {
                loading ? <div className='grid grid-cols-12 gap-4'>
                    <div className='grid col-span-12 lg:col-span-8 bg-black rounded'>
                        <img src={data.image_url} className='w-full h-full min-h-[200px] max-h-[500px] rounded p-4' alt='' />
                    </div>
                    <div className='grid col-span-12 lg:col-span-4'>
                        <div className='min-h-40 max-h-[450px] overflow-y-scroll'>
                            {
                                data.comments.map((com) => {
                                    return <VievComment com={com}/>
                                })
                            }
                        </div>
                    </div>
                </div> : <h1>Loading...</h1>
            }
        </div>
    );
};

export default BlogDetails;