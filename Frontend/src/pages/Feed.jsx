import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBackward } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function Feed() {

    const navigate = useNavigate()

    const [post, setPost] = useState([
        {
            id: 1,
            caption: 'This is a sample post',
            image: 'https://wallpaperaccess.com/full/53929.jpg'
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/uploaded')
            .then(response => {
                console.log(response.data)
                setPost(response.data.posts)
            })
    }, [])


    return (
        <section className='feed-section'>
            <div className='feed-header'>
                <button className='back-button' onClick={() => navigate('/')}>
                    <FaBackward />
                    <span>Back</span>
                </button>
            </div>

            {post.map((postItem) => (
                <div key={postItem.id ?? postItem._id} className='post'>
                    <p>{postItem.caption}</p>
                    <img src={postItem.image} alt='Post' />
                </div>
            ))}
        </section >
    )
}

export default Feed