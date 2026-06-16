function fb_write() {
    var userAge = document.getElementById("age").value;
    var userName = document.getElementById("name").value;
    const UID = GLOBAL_user["uid"];

    firebase.database().ref('/users/' + UID).set({
        name: userName,
        age: userAge,
    });

    console.log("Data sent to firebase");
}