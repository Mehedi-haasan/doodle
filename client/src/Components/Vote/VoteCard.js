import React, { useState, useEffect } from 'react'

import { BiLike } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Icon } from '@iconify/react';
import PostComment from './PostComment';







const VoteCard = ({ id, name, image_url, title, message, user, images, like, comments, updated }) => {

    const [likePrint, setLikePrint] = useState(false);
    const [commentPrint, setCommentPrint] = useState(false)
    const [comentBox, setCommentBox] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState(0)
    const [Vote, setVote] = useState('');
    const [coment, setComet] = useState('');
    const [showMore, setShowMore] = useState(false);

   

    const toggleText = () => {
        setShowMore(!showMore);
    };

    const handleVote = () => {
        const like = count + 1
        setCount(like);
        if (like === 1) {
            setVote("Like");
        }
        else {
            setVote("Likes");
        }

        if (like > 0) {
            setLikePrint(true)
        }
    }

    const handleComment = () => {

        let totalComment = comment + 1;
        setComment(totalComment);
        if (comments.length === 1) {
            setComet("Comment");
        }
        else {
            setComet("Comments");
        }

        if (comments.length > 0) {
            setCommentPrint(true)
        }

    }

    useEffect(() => {
        handleComment()
    }, [])



    return (
        <div className='bg-opacity-50 '>
            <div className='p-1'>


                <section className='relative  mx-auto py-1 md:py-4 my-1 shadow-lg rounded-md border bg-white' key={uuidv4()}>
                    <div className='grid grid-cols-12 mx-4 '>
                        <div className='grid col-span-10 py-1'>
                            <div className='flex'>
                                <div>
                                    {
                                        user.image_url ?<img src={user.image_url} alt='flag' className='h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full' /> :<span/>
                                    }
                                </div>
                                <div>
                                    <NavLink className='md:text-2xl ml-3 font-semibold'>{user.first_name} {user.last_name}</NavLink>
                                    <h1 className='ml-3 text-xs'>Jan 6 2024</h1>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className='mx-4 md:my-1 lg:my-2 relative'>

                        <div className='mb-5 md:mb-8'>

                            <div>
                                <h1 className='font-semibold py-1'>Blog Name: <span className='text-lg'>{title}</span></h1>
                                {showMore ? (
                                    <p className='text-xs md:text-sm lg:text-md'>{message}</p>
                                ) : (
                                    <p className='text-xs md:text-sm lg:text-md'>{message.slice(0, 100)}...</p>
                                )}
                                <button className='font-bold' onClick={toggleText}>
                                    {showMore ? <p className='text-xs md:text-sm lg:text-md'>hide..</p> : <p className='text-xs md:text-sm lg:text-md'>See more..</p>}
                                </button>
                            </div>

                            <div>
                                <img src={image_url} className='w-full rounded' alt='' />
                            </div>

                        </div>
                    </div>


                    {
                        toggle ? <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">

                            <PostComment id={id} onValueChange={(valueFromChild)=>{setToggle(valueFromChild)}}/>

                        </div> : <span />
                    }

                    {
                        comentBox ? <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
                            <form className='w-full'>
                                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <Icon onClick={() => { setCommentBox(false) }} className='m-2 cursor-pointer float-right' icon="fluent-emoji-flat:cross-mark" />
                                    <h1 className='p-4 font-semibold text-lg'>Comments</h1>
                                  
                                    <div className='min-h-40 max-h-[250px] overflow-y-scroll'>
                                        {
                                            comments.map(({ name, email, body }) => {
                                                return <div className='p-4'>
                                                    <h1>{name}</h1>
                                                    <h1>{email}</h1>
                                                    <h1>{body}</h1>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </form>
                        </div> : <span />
                    }

                    <div className='mx-4 grid grid-cols-2'>
                        <div>{likePrint && <h2 className='font-semibold'>{count} {Vote}</h2>}</div>
                        <div>{commentPrint && <button onClick={() => { setCommentBox(!comentBox) }} className='font-semibold float-right'>{comments.length} {coment}</button>}</div>
                    </div>



                    <div className='grid grid-cols-2 mx-4 mb-1 md:mb-2  py-1 relative'>
                        <div className=''>
                            <div className='flex'>
                                <button className='flex bg-gray-300 px-10 md:px-12 lg:px-16 py-1 rounded text-lg' onClick={handleVote} >
                                    <BiLike className='text-2xl md:text-3xl text-slate-600 hover:text-white m-auto' />
                                </button>
                            </div>
                        </div>

                        <div>
                            <button onClick={() => { setToggle(!toggle) }} className='float-right border rounded py-1 font-semibold px-4 block bg-[#D1D5DB]'>Comment</button>
                        </div>
                    </div>



                </section>


            </div>
        </div>
    )
}

export default VoteCard;
