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
            user.sendEmailVerification().then(function(){
                console.log("email verification sent to user");
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
          
                console.log(errorCode, errorMessage);
              });
        }
    });
}