// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDvGJDMXi-YZ2Ia1Iql8PoxYbMS04sNRJw",
  authDomain: "r-and-a-e5e54.firebaseapp.com",
  databaseURL: "https://r-and-a-e5e54-default-rtdb.firebaseio.com",
  projectId: "r-and-a-e5e54",
  storageBucket: "r-and-a-e5e54.appspot.com",
  messagingSenderId: "607975102734",
  appId: "1:607975102734:web:6091d1a17ae40a6f0b5f5f"
};


  firebase.initializeApp(firebaseConfig);

  function Verification(){
  Name = document.getElementById("user_name").value;
  password = document.getElementById("password").value;

  if (password == "family"){
      Login(Name)

  }else if (Name == "Bob" && password == "341353"){
      Login(Robby)

  } else{
    window.location="Ban.html"
  }
}
    

function Login(user_name) {


  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

function addUser() { 

}
