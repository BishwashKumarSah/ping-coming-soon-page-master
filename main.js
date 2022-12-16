;
function verify(){
    var inputvalue = document.querySelector("input").value;
    console.log(inputvalue);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputvalue.match(validRegex)){
        document.querySelector("input").style.border = "1px solid green";
        document.getElementById("error-message").style.opacity="0"
        // alert("Thank You For Subscribing");
        
        document.querySelector(".submission").style.right ="0";
       
        function message() {
            document.querySelector(".submission").style.right ="-320px";          
         }
         setTimeout(message,2000)
    }
    else{
        document.querySelector("input").style.border = "1px solid red";
        document.getElementById("error-message").style.opacity="1"
        document.getElementById("error-message").innerHTML="please enter a valid email"
        
    }
}