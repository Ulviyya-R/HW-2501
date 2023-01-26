let button = document.body.querySelector(".btn");



button.onclick=function() {
let name=Name();
let sname=Surname();
let email=Email();
let pass =Password();

if(name==true && sname==true && email==true && pass==true){
    window.location.href="https://stars.chromeexperiments.com/"
}

}




function Name(){
    let x = document.getElementById("fnames").value;
    let text;
    if(x.length >3 ){
        // alert("Name 3 den boyuk olmalidir");
        text = "that's right! :)";
        document.getElementById("word").innerHTML=text;
        document.getElementById("word").style.color="green";
        document.getElementById("inp").style.border="2px solid green";
        return true;
    }
    else if(x.length<3){
        // alert("Giris ugurludur");
        
        text="Must be minimum 3 letters ...! -_-";
        document.getElementById("word").innerHTML=text;
        document.getElementById("word").style.color="red";
        document.getElementById("inp").style.border="2px solid red";
        return false;
    
        
    }
}

function Surname(){
    let y =document.getElementById("sname").value;
    let text;
    if(y.length >3 ){
        text = "that's right! :)";
        document.getElementById("word2").innerHTML=text;
        document.getElementById("word2").style.color="green";
        document.getElementById("inp1").style.border="2px solid green";       
        return true;
    }
    else if(y.length<3){
        text="Must be minimum 3 letters ...! -_-";
        document.getElementById("word2").innerHTML=text;
        document.getElementById("word2").style.color="red";
        document.getElementById("inp1").style.border="2px solid red";
        return false;
    
        
    }
}

function Email(){
    let name =document.getElementById("email").value;
    let z=name.includes('@');
    let text;
    if(z==true){
        text = "that's right! :)";
        document.getElementById("word3").innerHTML=text;
        document.getElementById("word3").style.color="green";
        document.getElementById("inp2").style.border="2px solid green";    
        return true;
    }
    else {
        text="Must be @ symbol ...! -_-";
        document.getElementById("word3").innerHTML=text;
        document.getElementById("word3").style.color="red";
        document.getElementById("inp2").style.border="2px solid red";
        return false;
    
        
    }
}

function Password(){
    let u =document.getElementById("password").value;
    let text;
    if(u.length > 7){
        text ="that's right! :)";
        document.getElementById("word4").innerHTML=text;
        document.getElementById("word4").style.color="green";
        document.getElementById("inp3").style.border="2px solid green";       
        return true;
    }
    else {
        text = "Must be minimum length 7 ...! -_- "
        document.getElementById("word4").innerHTML=text;
        document.getElementById("word4").style.color="red";
        document.getElementById("inp3").style.border="2px solid red";
        return false;
    }
}