  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,updateEmail,sendEmailVerification   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore,collection,addDoc,getDocs,doc, setDoc,updateDoc,serverTimestamp,arrayUnion,arrayRemove,increment,deleteDoc   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDUs762Iv7ScekmMQxZbYsYJuQ9FmkqwDs",
    authDomain: "batch-9-d843f.firebaseapp.com",
    projectId: "batch-9-d843f",
    storageBucket: "batch-9-d843f.appspot.com",
    messagingSenderId: "1073407686338",
    appId: "1:1073407686338:web:7eaf0ad8d08d701e176d5b",
    measurementId: "G-4B6X7ZJ0BL"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);




  // let btn = document.getElementById('registerBtn');
  // btn.addEventListener('click', ()=>{
  //   const name= document.getElementById('name');
  //   const phone= document.getElementById('phone');
  //   const email= document.getElementById('email');
  //   const pasword= document.getElementById('pasword');

  //   const userData = {
  //       name : name.value,
  //       phone : phone.value,
  //       email : email.value,
  //       pasword : pasword.value,
  //   }
  //   createUserWithEmailAndPassword(auth, userData.email, userData.pasword)
  // .then(async (res) => {
  //   const user = res.user;
  //   // console.log('user Create =======>', user);
  //   try {
  //       await setDoc(doc(db, "users", user.uid), {
  //           ...userData,
  //           user: user.uid
  //         });
  //         console.log('add');
          
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log('errorMessage==========> ', errorMessage);
  //   // ..
  // });

  //   console.log(userData);
  // })

  // let getAllUser = async ()=>{
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id}`, doc.data());
  //   });
  // }
  // getAllUser()




//////////////////////////////////////

// updated 


let btn = document.getElementById('updateBtn');
btn.addEventListener('click',async ()=>{

  const id = auth.currentUser.uid
  await deleteDoc(doc(db, "users", id));
//   const washingtonRef = doc(db, "users", id);
//   const name= document.getElementById('name');
//   const phone= document.getElementById('phone');
  
//   try {
    
//   await updateDoc(washingtonRef, {
//     name: name.value,
//     phone: phone.value,
//     school: 'smit',
//     timestamp: serverTimestamp(),
//     // attendance: arrayUnion('present'),
//     // attendance: arrayRemove('present'),
//     update_count: increment(1)


// });
//     console.log("updated");
//   } catch (error) {
//       console.log(error);
//   }

})

// //   
// // signInWithEmailAndPassword(auth, 'asadraza9712@gmail.com' , '123456')
// //   .then((userCredential) => {
// //     // Signed in 
// //     const user = userCredential.user;
// //     // ...
// //     console.log('user sign in=========>', user);
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     console.log('errorMessage=======>', errorMessage);
// //     console.log('errorCode=======>', errorCode);
// //   });

// const myAuth = getAuth();

// let btn = document.getElementById('update-email');

// let updateProfile = ()=>{
    
//     // updateEmail(myAuth.currentUser, "ahmed@gmail.com").then(() => {
//     //     // Email updated!
//     //     // ...
//     //     console.log('Updated Email');
//     // }).catch((error) => {
//     //     // An error occurred
//     //     console.log(error, 'error =====>');
//     //     // ...
//     // });

//     sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//     console.log('email sent');
//   });
// }

// btn.addEventListener('click', updateProfile )


// onAuthStateChanged(auth, (user) => {
//     if (user) {
  
//       const uid = user.uid;
//       console.log('user login =========>',user );
//     } else {
//         console.log('no user found');
//     }
//   });

