function validation() {
    var passwd = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var confirmPasswd = document.getElementById('confirm-password').value;
    var age = document.getElementById('age').value;

    if (username.length < 6 || username.length > 30) {
        document.getElementById('error-message').innerHTML = "Username should be between 6 and 30 characters long";
        return false;
    }

    for (let i=0; i<username.length; i++) {
        if ((username[i] >= 'a' && username[i] <= 'z') || (username[i] >= '0' && username[i] <= '9') ||
            (username[i] >= 'A' && username[i] <= 'Z') || (username[i] == '_')) {}
        else {
            document.getElementById('error-message').innerHTML = "Username can only contain alphanumeric characters and underscores (_).";
            return false;
        }
    }

    if (age < 0 || age > 100) {
        document.getElementById('error-message').innerHTML = "The age must be a number between 1 and 100";
        return false;
    } else if (age.length == 0) {
        document.getElementById('error-message').innerHTML = 'Age field cannot be empty';
        return false;
    }

    if (passwd.length == 0) {
        document.getElementById('error-message').innerHTML = 'Password field cannot be empty';
        return false;
    } else if (passwd.length < 8) {
        document.getElementById('error-message').innerHTML = 'Password should be atleast 8 character long';
        return false;
    }

    if (passwd != confirmPasswd) {
        document.getElementById('error-message').innerHTML = "Password-Confirm Password does not meet the password";
        return false;
    }
    
}

