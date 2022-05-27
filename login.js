function login(){
var loginEmail = document.getElementById("email").value;
var loginPass = document.getElementById("pass").value;

 //console.log(loginEmail);
// console.log(loginPass);


(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
       
      }, false)
    })
})()


var url= `http://localhost:5000/login/?username=${loginEmail}&password=${loginPass}`;

 const xhr = new XMLHttpRequest()
xhr.open('GET',url,false);
xhr.send();

if(loginEmail != "" && loginPass != ""){
  if (xhr.readyState == xhr.DONE) {
        if (xhr.status == 200) {
            if(xhr.responseText == '{"status":"login successfull"}'){
                console.log("hi");
            window.location.href =" sidebar.html";
        }else{
            alert("Incorrect Email or Password")
        }
        }
    }}
    

}

function signup(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var ConfirmPass = document.getElementById("cPass").value;
    const xhr = new XMLHttpRequest()


    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
      

var url='http://localhost:5000/signup';
var data=JSON.stringify({"username":`${email}`,"password":`${pass}`});
console.log(data);
    if(pass != ConfirmPass){
    alert("Both passwords should be same");
}else{
    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);
     
    
    //console.log(xhr)
    
        if (this.readyState === this.DONE) {
        //  console.log(this.responseText)
        if (xhr.status == 200) {
                    if(xhr.responseText == '{"status":"signup successfull"}'){
                    window.location.href ="login.html";
                }else{
                    alert("signup unsuccessfull")
                }
                }

        }
       
}

}