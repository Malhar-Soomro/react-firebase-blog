import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore"
import { db, auth } from "../firebase-config"
import { useSelector } from 'react-redux'

const Home = () => {
    const postCollectionRef = collection(db, "posts")
    // const posts = useSelector((state) => state.posts);

    const [posts, setPosts] = useState()

    const deletePost = async (postId) => {
        // find the post that should be deleted
        const post = doc(db, "posts", postId);
        await deleteDoc(post);
    }

    const isAuth = localStorage.getItem("auth");

    const getPosts = async () => {
        const data = await getDocs(postCollectionRef, "posts");
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        getPosts()
    }, [deletePost])
    return (
        <div className="homePage">
            {posts && posts.map((post) => (
                <div className="post">
                    <div className="header">
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>

                        {isAuth && post.author.id === auth.currentUser.uid && <div className="deletePost">
                            <button onClick={() => deletePost(post.id)}>

                                &#128465;</button>
                        </div>}
                    </div>
                    <div className="postTextContainer">{post.postText}</div>
                    <h3>@{post.author.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Home