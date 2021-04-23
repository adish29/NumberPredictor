
//Check whether user email address is verified or not
firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
    if (user.emailVerified) {
        console.log('Email is verified');
        console.log(user);
    } else {
        console.log("Email is not verified");
        $("#verify").show();
    }
});


//Send Email Verification Link
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