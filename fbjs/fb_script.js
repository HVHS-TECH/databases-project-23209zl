function fb_write() {

    var userAge = document.getElementById("age").value;
    var userName = document.getElementById("name").value;
    const UID = GLOBAL_user["uid"];

     if (userName == "" || userAge == "" || !isNaN(userName) || userAge < 13 || userAge > 99) {
    alert("Please enter a valid name and age.");
    return;
}

    firebase.database().ref('/users/' + UID).update({
        name: userName,
        age: userAge,
    });

    console.log("Data sent to firebase");
}