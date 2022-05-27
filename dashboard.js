const xhr = new XMLHttpRequest();
    var url= `http://localhost:5000/casecount`;
    var url1= `http://localhost:5000/quoteAmount`;
    var url2= `http://localhost:5000/orderAmount`;

    var quoteNum;
    var quoteNum2;
    var h;
function data(){

    countCases();
    orderAmount();
    quoteAmount();


}
function countCases(){
    //count cases
    xhr.open('GET',url,false);
    xhr.send();
    if (xhr.readyState == xhr.DONE) {
        if (xhr.status == 200) {
            //console.log("hii")
            document.getElementById("caseTotal").innerHTML = xhr.responseText;
        }
    }
//console.log(xhr)
}
function quoteAmount(){
//quote amount
xhr.open('GET',url1,false);
xhr.send();
if (xhr.readyState == xhr.DONE) {
    if (xhr.status == 200) {
        //console.log("hii")
        const qAmount=JSON.parse((xhr.responseText)) ;

        
    }
}
//console.log(xhr)
    
}
function orderAmount(){
    //order amount

xhr.open('GET',url2,false);
xhr.send();
if (xhr.readyState == xhr.DONE) {
    if (xhr.status == 200) {
        //console.log("hii")
        const oAmount=JSON.parse((xhr.responseText)) ;
        document.getElementById("orderTotal").innerHTML =("$ "+oAmount.amount) ;
    }
}
//console.log(xhr)
}


//quotes list
function quotes(){
    const xhr = new XMLHttpRequest();
    var url= `http://localhost:5000/quoteList?customer_number=1234`;
    xhr.open('GET',url,false);
    xhr.send();

const details=JSON.parse(xhr.responseText);

    for(let i=0;i< details.
        length;i++){
            let tableString=`<tr>
            <td id="colHide">${details[i].quote_number}</td>
            <td >${details[i].name}</td>
            <td>${details[i].total_amount}</td>
            <td>${details[i].date}</td>
            <td>${details[i].status}<div class="btn-primary p-1" onclick="sendData()" style="float: right;">view details</div></td>
            </tr>
            `;
            document.getElementById("tableBodyQuotes").innerHTML +=tableString;
            quoteNum=details[i].quote_number;
            console.log(quoteNum)
    }
}


//quotes details
function quotesDetails(){
//var y=sendData();

var val = sessionStorage.getItem("val");
console.log(val);




    const xhr = new XMLHttpRequest();
    var url= `http://localhost:5000/quoteDetails?quote_number=${val}`;
    xhr.open('GET',url,false);
    xhr.send();


//console.log(xhr.responseText)

const details=JSON.parse(xhr.responseText);
console.log(details);
const productArr =details[0].product;

var qdName=details[0].name;
var qdStage=details[0].status;
var qdDate=details[0].date;
//var qdAccountName=;
var qdAccountId=details[0].customer_number;

document.getElementById("qdName").innerHTML =(qdName) ;
document.getElementById("qdStage").innerHTML =(qdStage) ;
document.getElementById("qdDate").innerHTML =(qdDate) ;
document.getElementById("qdOwner").innerHTML =(qdAccountId) ;




    for(let i=0;i< (productArr).length;i++){
            let tableString=`<tr >
            <td scope="row" position="ProductName">${details[0].product[i].name}</td>
            <td>${details[0].product[i].description}</td>
            <td>${details[0].product[i].quantity}</td>
            <td>$ ${details[0].product[i].unit_price}</td>
            </tr>
            `;
            document.getElementById("tableBodyProduct").innerHTML +=tableString;
    }

}


function hideUser(){
var x=document.getElementById("userHide")
var y=document.getElementById("userHide1")
var z=document.getElementById("userHide2")
if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

//x.style.display = "none";

if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}


function sendData() {
    var quoteNum2 = document.getElementById("quoteTable").rows[6].cells[0].innerHTML;
       //var url = 'http://path_to_your_html_files/next.html?name=' + encodeURIComponent(b);

    //document.location.href = url;

console.log("-quoteNum-"+quoteNum2)
window.location.href ="quotes2.html";


sessionStorage.setItem("val", quoteNum2);

}
