function saveData(){
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (document.getElementById('fullname').value == "") {
        alert('Please Enter Your Name');
        return false;
    }
    if   (document.getElementById('email').value == "") {
        alert('Please Enter Your Email Address');
        return false;
}

    var Queries = {
        fullname: fullname.value,
        email: email.value,
        mesage: message.value
        
    }
    firebase.database().ref('Queries').push(Queries);
    alert("Message Sent To Mi Solutions ! Thanks for Your interest");
    fullname = document.getElementById('fullname').value = '';
    email = document.getElementById('email').value = '';
    message = document.getElementById('message').value = '';
    
}