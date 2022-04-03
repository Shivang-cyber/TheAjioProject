function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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
  location.reload();
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

  let At = getCookie("Atoken")
  let Au = getCookie("Auser")
  
  setTimeout(function(){
    if(At&&Au){
      document.getElementById("signed_up").style.display='flex'
      document.getElementById("sign_up").style.display='none'
      document.getElementById("us_na").innerText=Au
    }
  }, 5000)

setTimeout(function(){
    // alert("Sup!"); 
let CE =document.getElementById("c_e") 
CE.addEventListener('submit', function(a){
      a.preventDefault()
      var url = `https://ajio-re.herokuapp.com/one?mail=${a.path[0][0].value}`;
      var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
      if(xhr.responseText=='true'){
        document.getElementById("c_e").style.display="none"
        document.getElementById("emaie").value = a.path[0][0].value
        document.getElementById("c_f").style.display="block"
      }else{
        setCookie("mail",a.path[0][0].value,1)
        document.getElementById("sec_a").style.display = "none"
        document.getElementById("sec_b").style.display = "block"
      }
    }};
    xhr.send();
  });
  
  let CF =document.getElementById("c_f") 
  CF.addEventListener('submit', function(a){
    a.preventDefault()
    var url = "https://ajio-re.herokuapp.com/log";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  var data = `{
    "mail": "${a.path[0][0].value}",
    "password":"${a.path[0][1].value}"
  }`;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if(xhr.status==200){
        let res = (JSON.parse(xhr.responseText));
        setCookie("Auser",res.client.details.name,1)
        setCookie("Atoken",res.token,1)
      }else{
        let res = JSON.parse(xhr.responseText)
        alert(res.message)
        location.reload();
      }
    }};
  
    xhr.send(data);
    cl()
    setTimeout(function(){
      document.getElementById("signed_up").style.display='flex'
      document.getElementById("sign_up").style.display='none'
      document.getElementById("us_na").innerText=getCookie("Auser")
    }, 2000)
});

let CG =document.getElementById("c_g") 
CG.addEventListener('submit', function(a){
  a.preventDefault()
  var url = "https://ajio-re.herokuapp.com/register";
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  let mai = getCookie("mail");
  var data = `{
    "mail": "${mai}",
    "password":"${a.path[0][3].value}",
    "details":{
      "name":"${a.path[0][0].value}",
      "mob":"${a.path[0][1].value}",
      "address":"${a.path[0][2].value}"}
    }`;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if(xhr.status==200){
          let res = (JSON.parse(xhr.responseText));
          setCookie("Auser",res.client.details.name,1)
          setCookie("Atoken",res.token,1)
        }else{
          let res = JSON.parse(xhr.responseText)
           alert(res.message)
           location.reload();
         }
        }};
        
  xhr.send(data);
  delete_cookie("mail")
  cl()
    document.getElementById("signed_up").style.display='flex'
    document.getElementById("sign_up").style.display='none'
    document.getElementById("us_na").innerText=a.path[0][0].value
  });
}, 2000)