// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFK-c4B84i9JeS_mFCFx0-vNXoIPa41-0",
    authDomain: "einstein-ekde.firebaseapp.com",
    projectId: "einstein-ekde",
    storageBucket: "einstein-ekde.appspot.com",
    messagingSenderId: "856740794783",
    appId: "1:856740794783:web:0c77155c4791b4ce80edaa"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");