firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
    if (user.emailVerified) {
        console.log('Email is verified');
        console.log(user);
    } else {
        // window.location = "index.html";
        // firebase.auth().signOut();
        console.log("Email is not verified");
        $("#verify").show();
    }
});

function verify(){

    firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
            user.sendEmailVerification();
            alert("Link to verify email sent to " + user.email)
            logout();
        }
    });


}