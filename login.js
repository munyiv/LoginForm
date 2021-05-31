function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="audrey" && password=="munyivaaudrey1"){
        alert("login sucessfuly");
        // return false;
    }
    else{
        alert("Login failed");
    }
    

}