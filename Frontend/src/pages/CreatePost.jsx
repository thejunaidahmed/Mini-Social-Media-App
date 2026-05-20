import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {

    const navigate = useNavigate()

    const [post, setPost] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post('http://localhost:3000/upload', formData)
            .then(response => {
                setPost(response.data)
                navigate('/feed')
            })

    }

    return (
        <section className='post-section'>
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <input type="file" name='image' required accept="image/*" />
                <input type='text' placeholder='Caption' required name='caption' />
                <button type='submit'>Post</button>
            </form>
        </section>
    )
}

export default CreatePost