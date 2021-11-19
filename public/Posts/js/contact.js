function sendNow(){
    var fullName = document.getElementById("fullName");
    var mobileNumber = document.getElementById("mobileNumber");
    var message = document.getElementById("message");

    if (document.getElementById('fullName').value == "") {
        alert('Please Enter Your Name');
        return false;
    }
    if   (document.getElementById('mobileNumber').value == "") {
        alert('Please Enter Your Email Address');
        return false;
}

    var Messages = {
        fullname: fullName.value,
        email: mobileNumber.value,
        mesage: message.value
        
    }
    firebase.database().ref('Messages').push(Messages);
    alert("Message Sent To Mi Solutions ! Thanks for Your interest");
    fullName = document.getElementById('fullName').value = '';
    mobileNumber = document.getElementById('mobileNumber').value = '';
    message = document.getElementById('message').value = '';
    
}