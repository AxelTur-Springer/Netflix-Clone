import { getDatabase, ref, onValue} from "firebase/database";
import { auth } from "../firebase/firebaseconfig";
import { useEffect,useState } from "react";
import React from "react";

export default function RetrieveUserName(){
    const [userName,setUserName] = useState([])
    const [userId,setUserId] = useState(auth.currentUser.uid)

    useEffect(() => {
        const db = getDatabase();
        const test = ref(db, 'users/' + userId);
         onValue(test, (snapshot) => {
           const data = snapshot.val();
             setUserName(data.username)
         });}, [])

   
        return(
            <p>{userName}</p>
        )
    
}
