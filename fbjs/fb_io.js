/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

var GLOBAL_user
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_authenticate, fb_error)
}
var uid;

function fb_authenticate(_user) {
  if (_user) {
    console.log("User Is Logged In");
    GLOBAL_user = _user;
    uid = _user.uid;  
  } else {
    console.log("User Is NOT Logged In - Starting the popup process");
    fb_popupLogin();
  }
}

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
  GLOBAL_user = result.user; 
  firebase.database().ref("/users/" + GLOBAL_user["uid"]).set({
    displayName: GLOBAL_user["displayName"],
    email: GLOBAL_user["email"],
    photoURL: GLOBAL_user["photoURL"]
  });
  console.log("User has logged in")
  });
}
  
  function fb_error(error) {
  console.log("There was an error reading the message");
  console.error(error);
}