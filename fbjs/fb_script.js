var userAge = document.getElementById("age").value;
var userName = document.getElementById("name").value;
var uid;

firebase.database().ref('/users/' + GLOBAL_user["uid"]).set({
        name: userName,
        age: userAge,
    });

console.log("Data sent to firebase");