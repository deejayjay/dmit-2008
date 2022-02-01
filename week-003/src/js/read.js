import { ref, get } from "firebase/database";
import { db } from "./libs/firebase/firebaseConfig";

// Get the data load in session storage... Update, Delete
async function pageInit() {
    const userRef = ref(db, "users/");
    const userSnapShot = await get(userRef);
    const userData = userSnapShot.val();
    console.log(userData);
    const users = Object.keys(userData).map((key) => {
        userData[key].id = key;
        return userData[key];
    });
    console.log(users);
    //   sessionStorage.setItem("store", userData);

    // Build out the user card component
    // HTML + CSS UI/View userCard
    // Template

    // Rendering Component + Data ===> UI
}

pageInit();
