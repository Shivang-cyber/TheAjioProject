let t= true
let retrievedObject = JSON.parse(localStorage.getItem('Object'));
setTimeout(function(){
    document.getElementById("sign_in_in").innerText=retrievedObject.client.details.name
}, 5000)
if(retrievedObject==undefined||retrievedObject=={}){

}
function signUp() {
 document.getElementById("bd").style.display = "block"
 document.getElementById("backdrop").style.display = "block"
 document.getElementById("sec_a").style.display = "block"
 
 document.getElementById("sec_b").style.display = "none"
}
function cl() {
  document.getElementById("bd").style.display = "none"
 document.getElementById("backdrop").style.display = "none"
}
function gg() {
  window.location.replace("/login");
}
function mv() {
  document.getElementById("sec_a").style.display = "none"
  document.getElementById("sec_b").style.display = "block"
}
async function subm(){
let N  =  document.getElementById("namae").value
let M =  document.getElementById("bango").value
let E =  document.getElementById("emai").value
let A =  document.getElementById("addre").value
let P =  document.getElementById("pass").value
let data={mail:E,password:P,details:{name:N,mob:M,address:P}}
console.log(data);
const url = 'https://ajio-re.herokuapp.com/register'

const param = {
method : 'Post' , 
headers : {
"content-type" : "application/json;charset = UTF-8"
}, 
body : JSON.stringify(data)
}
const sendRequest = await fetch(url , param)
const response = await sendRequest.json()
console.log(response);
localStorage.setItem('Object', JSON.stringify(response));
document.getElementById("sign_in_in").innerText=data.details.name
t= false
cl()
return response
}
