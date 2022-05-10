var userName;

var checkUser = function() {
    if (userName) {
        console.log("User is: " + userName);
    } else {
        console.log("User is not defined.");
    }
}

checkUser();
userName = "Steve";
checkUser();