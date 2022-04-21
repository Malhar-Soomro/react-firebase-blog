import React, { useState, useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebase-config"
import { useNavigate } from "react-router-dom"

const CreatePost = ({ loggedIn }) => {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();
    const navigate = useNavigate();

    const postCollectionRef = collection(db, "posts")
    const creatPost = async () => {
        await addDoc(postCollectionRef,
            {
                title,
                postText,
                author: {
                    name: auth.currentUser.displayName,
                    id: auth.currentUser.uid
                }
            });
    }
    useEffect(() => {
        if (!loggedIn) {
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
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="inputGp">
                    <label>Post:</label>
                    <textarea
                        type="text"
                        placeholder="Post..."
                        onChange={(e) => setPostText(e.target.value)}
                    />
                </div>
                <button onClick={creatPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost