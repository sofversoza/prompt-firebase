import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaQYgVzl-xy8L-XhjdLyNNL6WiAHutdJs",
  authDomain: "prompt-1503f.firebaseapp.com",
  projectId: "prompt-1503f",
  storageBucket: "prompt-1503f.appspot.com",
  messagingSenderId: "440650154111",
  appId: "1:440650154111:web:1b473ee6f54fdfc9d77f4a"
};
// init firebase app
const app = initializeApp(firebaseConfig)

// init services
export const db = getFirestore(app)

// collection ref
// export const colRef = collection(db, 'prompts')

// get collecton data
// getDocs(colRef)
// 	.then((snapshot) => {
// 		let prompts = []
// 		snapshot.docs.forEach((doc) => {
// 			prompts.push({ ...doc.data(), id: doc.id })
// 		})
// 		console.log(prompts)
// 	})
// 	.catch(error => {
// 		console.log(error.message)
// 	})

// adding documents
