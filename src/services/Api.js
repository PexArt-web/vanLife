/*  NEED TO REFIX FIREBASE DB
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjcL5sUqfhspKtUb_zT-msu33HXbj5Ca4",
  authDomain: "vanlife-264a3.firebaseapp.com",
  projectId: "vanlife-264a3",
  storageBucket: "vanlife-264a3.appspot.com",
  messagingSenderId: "167872333835",
  appId: "1:167872333835:web:e52c3bc2c2b2919d0cdf0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans")
// 

export async function getVans(){
    try {
        const querySnapshot = await getDocs(vansCollectionRef);
        const dataArr = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(dataArr, 'dataArr');
        return dataArr;
      } catch (error) {
        console.error("Error fetching vans: ", error);
        throw error;
      }
}

*/


// MIRAGE SERVER BELOW


export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}