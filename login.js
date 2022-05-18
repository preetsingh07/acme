
function login(){
var loginEmail = document.getElementById("email").value;
var loginPass = document.getElementById("pass").value;


var key=`{"username":"${loginEmail}","password":"${loginPass}"}`;
// function genApi(key) {
//     return `http://localhost:5000/login/${key}`;
//     console.log(key)
//  }
// genApi(key)
 console.log(key)
 console.log(loginEmail);
 console.log(loginPass);

//  fetch(`http://localhost:5000/login/?username=${loginEmail}&password=${loginPass}`, {
//   method: 'GET'
 
// })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err)
//   })
var url1='http://127.0.0.1:5000/quotes';

var url= `http://localhost:5000/login/?username=${loginEmail}&password=${loginPass}`;

const xhr = new XMLHttpRequest()
xhr.open('GET',url1);
xhr.send();
// xhr.onload = function () {
//     if (xhr.readyState === xhr.DONE) {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//             console.log(xhr.responseText);
//         }
//     }
// };


console.log(xhr.response);
console.log(xhr.responseText);


console.log(xhr)


}