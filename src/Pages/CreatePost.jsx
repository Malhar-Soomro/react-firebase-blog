import React, { useState, useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { createPost } from "../redux/actions/posts"
import { useDispatch, useSelector } from "react-redux"


const CreatePost = () => {
    // const [title, setTitle] = useState();
    // const [postText, setPostText] = useState();
    const [input, setInput] = useState({ title: "", postText: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    // console.log(posts)


    // const createPost = (e) => {
    //     e.preventDefault();
    //     console.log(input)
    // }

    const handleOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (!auth) {
            navigate("/")
        }
    }, [])

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Creating a Post</h1>

                <div className="inputGp">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        placeholder="Title..."
                        onChange={handleOnChange}
                        name="title"
                        value={input.title}
                    />
                </div>

                <div className="inputGp">
                    <label>Post:</label>
                    <textarea
                        type="text"
                        placeholder="Post..."
                        onChange={handleOnChange}
                        name="postText"
                        value={input.postText}
                    />
                </div>
                <button onClick={() => dispatch(createPost(input, dispatch))}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost