function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function signOut() {
  deleteAllCookies()
  document.getElementById("signed_up").style.display='none'
  document.getElementById("sign_up").style.display='block'
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
  console.log(response.client);
  setCookie("Auser",response.client.details.name,1)
  setCookie('Atoken',response.token,1)
  document.getElementById("us_na").innerText=data.details.name
  cl()
  document.getElementById("signed_up").style.display='flex'
  document.getElementById("sign_up").style.display='none'
  return response
}

let At = getCookie("Atoken")
let Au = getCookie("Auser")


setTimeout(function(){
  if(At&&Au){
    document.getElementById("signed_up").style.display='flex'
    document.getElementById("sign_up").style.display='none'
    document.getElementById("us_na").innerText=Au
  }
}, 5000)