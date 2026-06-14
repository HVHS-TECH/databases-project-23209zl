var userAge = document.getElementById("age").value;
var userName = document.getElementById("name").value;
var userScore = document.getElementById("score").value;
var uid;

 if (!userName || !userAge) {
        alert("You must fill out all fields before submitting the form!");
        return;
    }

if (uid == null) {
        alert("Please Log In First!");
        return;
    }

 firebase.database().ref("/game1/" + GLOBAL_user["uid"]).set({
    userName: GLOBAL_user["userName"],
    userAge: GLOBAL_user["userAge"],
    userScore: GLOBAL_user["userScore"]
  });