import { db, auth } from "../../firebase-config"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { CREATE_POST, GET_POSTS } from "../constants/actionTypes"




//specifying the collection in the db
const postCollectionRef = collection(db, "posts")

export const createPost = ({ title, postText }) => async (dispatch) => {
    const doc = {
        title,
        postText,
        author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid
        }
    }
    await addDoc(postCollectionRef, doc);
    dispatch({ type: CREATE_POST, payload: doc });
}

export const getPosts = () => async (dispatch) => {
    // const postCollectionRef = collection(db, "posts")
    const data = await getDocs(postCollectionRef, "posts");
    dispatch({ type: GET_POSTS, payload: data })

}