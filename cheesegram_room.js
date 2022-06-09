var firebaseConfig = {
    apiKey: "AIzaSyBet4t7gCo9W7ABSaKT8pvkJ3kfcMtJCi0",
    authDomain: "cheesegram-6a6d0.firebaseapp.com",
    databaseURL: "https://cheesegram-6a6d0-default-rtdb.firebaseio.com",
    projectId: "cheesegram-6a6d0",
    storageBucket: "cheesegram-6a6d0.appspot.com",
    messagingSenderId: "564312433925",
    appId: "1:564312433925:web:1ecf11b85a9504552c436c",
    measurementId: "G-7SGDH8WM85"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_nname").innerHTML = "Welcome "+user_name+"!";

function add_room() {
   
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);

    window.location= "kwitter_page.html";

    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();