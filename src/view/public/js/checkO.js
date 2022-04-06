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
    location.href = "/";
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
  
    function checkCookie() {
      let token = getCookie("Atoken");
      if (token != "") {
        let url = "https://ajio-re.herokuapp.com/cl"
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let in_c = []
      in_c =(JSON.parse(xhr.responseText));
      console.log(in_c);
      let addre = in_c.client[0].details.address.split("::")
      let addres = addre[1].split(",")
      document.getElementById("nam_1").innerText=in_c.client[0].details.name
      document.getElementById("add21").innerText=addres[0]
      document.getElementById("add2").innerText=addres[1]+", "+addres[2]
      document.getElementById("add3").innerText=addre[2]
      document.getElementById("pho").innerText="Phone : "+in_c.client[0].details.mob
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December","January"];
      const d = new Date();
      let nem = month[d.getMonth()+1];
      document.getElementById("delEas").innerText=`Est Delivery 27 - 28 ${nem}`

      let delis = document.getElementById("ed_del")
      in_c.client[0].in_cart.map((a)=>{
        console.log(a);
        let dic = document.createElement("div")
        let dic1 = document.createElement("div")
        let dic2= document.createElement("div")
        let h3 = document.createElement("h3")
        let h5= document.createElement("h5")
        let h4= document.createElement("h5")
        h5.innerText = a.item.name
        h4.innerText=a.item.brand
        h3.innerText = `27 ${nem}`
        dic2.append(h3,h4,h5)
        let imga = document.createElement("img")
        imga.src=a.item.images[0]
        dic1.append(imga)
        dic.append(dic1,dic2)
        delis.append(dic)
      })




      let c = 0
      for(let i in in_c.client[0].in_cart) c+=(+in_c.client[0].in_cart[i].item.price);
      let ran = Math.floor(Math.random()*1000)
      document.getElementById("bg_tt").innerText = `₹ ${ran+c}`
      document.getElementById("bg_dc").innerText = `-₹ ${ran}`
      document.getElementById("tt").innerText = `₹ ${c}`
    }};
    xhr.send();
    } else{
    location.href = "/";
  }
  }
  checkCookie()
    
    
    
    document.getElementById('to_check').addEventListener("click",()=>{
        location.href="/pay"
    })
    
    
    
    
    
    
    
    