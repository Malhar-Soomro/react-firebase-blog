import React, { useEffect } from 'react'
import { collection, doc, deleteDoc } from "firebase/firestore"
import { db, auth } from "../firebase-config"
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, deletePost } from "../redux/actions/posts"


const Home = () => {
    const isAuth = localStorage.getItem("auth");
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [])


    // const deletePost = async (postId) => {
    //     // find the post that should be deleted
    //     const post = doc(db, "posts", postId);
    //     await deleteDoc(post);
    // }

    return (
        <div className="homePage">
            {posts.length && posts.map((post) => (
                <div className="post">
                    <div className="header">
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>

                        {isAuth && post.author.id === auth.currentUser.uid && <div className="deletePost">
                            <button onClick={() => dispatch(deletePost(post.id))}>

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

export default Home;