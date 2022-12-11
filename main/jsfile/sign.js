function signup() 
{
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;
    var repeat = document.getElementById("psw-repeat").value;

    if(psw.localeCompare(repeat) == 0){
        window.location.href="Login.html";
    }
    else{
        document.getElementById("msg").innerHTML = "Password does not match"
    }
  

    localStorage.setItem("namevalue", name);
    localStorage.setItem("emailvalue", email);
    localStorage.setItem("pswvalue", psw);
    localStorage.setItem("repeatvalue", repeat); 


}

function verify(){

    var dat1= localStorage.getItem("namevalue");
    var dat2= localStorage.getItem("pswvalue");
    var user1=document.getElementById("name").value;
    var user2=document.getElementById("psw").value;

    

    if(user1.localeCompare(dat1) == 0){
        if(user2.localeCompare(dat2) ==0){
            window.location.href="index.html";
        }
        else
        document.getElementById("msg").innerHTML = "Wrong Password"
    }
    else{
        document.getElementById("msg").innerHTML = "Wrong username"
    }
}