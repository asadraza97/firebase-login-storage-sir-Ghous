import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBrAzoKDHutGXzWaIjq-KJK-JjCMlQ2C8",
  authDomain: "todo-app-with-firebase-2434a.firebaseapp.com",
  projectId: "todo-app-with-firebase-2434a",
  storageBucket: "todo-app-with-firebase-2434a.appspot.com",
  messagingSenderId: "44924982224",
  appId: "1:44924982224:web:3ab4ff40d7d6d42afa5fd5",
  measurementId: "G-28D7153PRP"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// const uploadToStorage = (file)=>{
//     return new Promise((resolve, reject)=>{
//         const fileName = file.name;

//      const storageRef = ref(storage, `users/7324fsdfdd${fileName.slice(fileName.lastIndexOf("."))}`);
//      const uploadTask = uploadBytesResumable(storageRef, file);
//      uploadTask.on('state_changed', 
//      (snapshot) => {
      
//        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//        console.log('Upload is ' + progress + '% done');
//        switch (snapshot.state) {
//          case 'paused':
//            console.log('Upload is paused');
//            break;
//          case 'running':
//            console.log('Upload is running');
//            break;
//        }
//      }, 
//      (error) => {
//        reject(error)
//      }, 
//      () => {

//        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         resolve(downloadURL);
//         //  console.log('File available at', downloadURL);
//        });
//      }
//    );
//  })
// }

// const uploadfile = async ()=>{
//     const file = document.getElementById('file');
//     const url = await uploadToStorage(file.files[0]);
    
//     console.log('url========>', url);
// };

// const btn = document.getElementById('uploadBtn');
// btn.addEventListener('click', uploadfile)

// const file = document.getElementById('file');
// file.addEventListener('change', (e)=>{
//     const image = document.getElementById('image');
//     image.src = URL.createObjectURL(e.target.files[0])
// });













//////////////////////////////////////////


const uploadToStorage = (file)=>{
        return new Promise((resolve, reject)=>{
        const fileName = file.name;
        const storageRef = ref(storage, `users/dfdgffswew4353454`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
        (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    reject(error)
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    resolve(downloadURL)
    });
  }
);
        })
    }




const uploadfile = async ()=>{
    const file = document.getElementById('file');
    const url = await uploadToStorage(file.files[0]);
    console.log('url==========>', url);
    
};

const uploadBtn = document.getElementById('uploadBtn');
uploadBtn.addEventListener('click', uploadfile)

const file = document.getElementById('file');
file.addEventListener('change', (e)=>{
    const image = document.getElementById('image');
    image.src = URL.createObjectURL(e.target.files[0])
})
