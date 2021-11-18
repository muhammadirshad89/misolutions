function subscribeNow(){
    var email = document.getElementById("email");

    if   (document.getElementById('email').value == "") {
        alert('Please Enter Your Email Address');
        return false;
}

    var Subscribers = {
        email: email.value
        
    }
    firebase.database().ref('Subscribers').push(Subscribers);
    alert("You'll receive latest news from Mi Solution ! Thanks for Subscribe");
    email = document.getElementById('email').value = '';
    
}