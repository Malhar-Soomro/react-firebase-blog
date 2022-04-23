import { db, auth } from "../../firebase-config"
import { addDoc, collection } from "firebase/firestore"
import { CREATE_POST } from "../constants/actionTypes"




export const createPost = ({ title, postText }) => async (dispatch) => {
    const postCollectionRef = collection(db, "posts")
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