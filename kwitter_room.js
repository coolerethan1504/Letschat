
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyCFz9zhau7o7jMVN5qIQVubYlqLLdEe4vc",
  authDomain: "practice-f72a8.firebaseapp.com",
  databaseURL: "https://practice-f72a8-default-rtdb.firebaseio.com",
  projectId: "practice-f72a8",
  storageBucket: "practice-f72a8.appspot.com",
  messagingSenderId: "673893279464",
  appId: "1:673893279464:web:2764be3cdf12f76cb88b5d",
  measurementId: "G-7ESZEW9WYW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

document.getElementById("room_name").innerHTML="";
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}


function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { 
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
