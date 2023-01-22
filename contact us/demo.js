// nav bar
let bars = document.getElementById("bars");
let menu = document.getElementById("menu");
bars.addEventListener("click",()=>{
    bars.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("ssssss");
})

//end

// form
var fullname = document.getElementsByName("form")[0]; 
var email = document.getElementsByName("form")[1];
var number = document.getElementsByName("form")[2];
var textArea = document.getElementsByName("form")[3];
var submit = document.getElementsByName("submit")[0];
var errorFullName = document.getElementById("errorFullName");
var errorEmail = document.getElementById("errorEmail");
var errorNumber = document.getElementById("errorNumber");
var errorMassage = document.getElementById("errorMassage");



fullname.addEventListener("change",function () {
    if (fullname.value.length==0){
        errorFullName.innerHTML="Full Name   <span>Name is required</span>"
    }else{
        if (!isNaN(fullname.value)){
            errorFullName.innerHTML="Full Name   <span>Name must be characters</span>"
        }else{
            
            errorFullName.innerHTML="Full Name   "
        }
    }
    
})
email.addEventListener("change",function(){
    var pattern = /@gmil.com/
    if (!(email.value.match(pattern))){
        errorEmail.innerHTML="Email   <span>Email is not valid</span> "
    }else{
        errorEmail.innerHTML="Email   "

    }
})

number.addEventListener("change",function(){
    if(number.value==0){
        errorNumber.innerHTML="Number   <span>Numbers is required</span> "
     }else{
       if (isNaN((number.value))){
        errorNumber.innerHTML="Number   <span>Numbers only</span> "
    }else{
        errorNumber.innerHTML="Number "
    } 
     }
})

textArea.addEventListener("change",function(){
    if (textArea.value.length==0){
        errorMassage.innerHTML="Massage   <span>What is your massage</span>"
    }else{
        errorMassage.innerHTML="Massage   "
    }
    
})




submit.addEventListener('click',function(e){
    

    if (fullname.value.length==0){
        e.preventDefault();
        errorFullName.innerHTML="Full Name   <span>Name is required</span>"
    }else{
        if (typeof(fullname.value)){
            e.preventDefault();
            errorFullName.innerHTML="Full Name   <span>Name must be characters</span>"
        }else{
            
            errorFullName.innerHTML="Full Name   "
        }
    }

    var pattern = /@gmil.com/
    if (!(email.value.match(pattern))){
        e.preventDefault();
        errorEmail.innerHTML="Email   <span>Email is not valid</span> "
    }else{
        errorEmail.innerHTML="Email   "

    }
     if(number.value==0){
        e.preventDefault();
        errorNumber.innerHTML="Number   <span>Numbers is required</span> "
     }else{
       if (isNaN((number.value))){
        e.preventDefault();
        errorNumber.innerHTML="Number   <span>Numbers only</span> "
    }else{
        errorNumber.innerHTML="Number "
    } 
     }
     
    
    if (textArea.value.length==0){
        e.preventDefault();
        errorMassage.innerHTML="Massage   <span>What is your massage</span>"
    }else{
        errorMassage.innerHTML="Massage   "
    }
    

})



//end