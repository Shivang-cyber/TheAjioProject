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
    let it = document.getElementById("item_show")
    it.style.display = 'flex'
    it.style.alignItems="center"
    it.style.flexDirection = 'column'
    in_c.client[0].in_cart.map((a)=>{
      let d = document.createElement("div")
      d.style.border="1px solid #eeeeee"
      d.style.width = "95%"
      let d1 =document.createElement("div"),d2=document.createElement("div"),d3=document.createElement("div")
      d.style.display='flex'
      d.style.justifyContent='space-between'
        d.style.marginBottom="15px"
        let im = document.createElement("img")
        im.src = a.item.images[0]
        d1.style.width = "15%"
        d1.style.height = "100%"
        d3.style.textAlign = 'right'
        im.style.width = "100%"
        d1.appendChild(im)
        let h2 = document.createElement("h4")
        h2.innerText = a.item.brand + " - " + a.item.name 
        h2.style.padding = "15px"
        d2.style.width = "60%"
        d3.style.width = "20%"
        let ol = document.createElement("button")
        ol.innerText = `Qty + ${a.count}`
        ol.style.backgroundColor='unset'
        ol.style.height="50px"
        ol.style.marginLeft='15px'
        ol.style.border='none'
        ol.style.color="#176d93"
        
        let il = document.createElement("button")
        il.innerText = `-`
        il.style.backgroundColor='unset'
        il.style.height="50px"
        il.style.marginLeft='-5px'
        il.style.border='none'
        il.style.color="#176d93"
        h2.style.width="70%"
        d2.append(h2,ol,il)
        d2.style.display="flex"
        ol.style.cursor="pointer"
        il.style.cursor="pointer"
        
        ol.style.fontSize="20px"
        d2.style.fontSize="20px"
        il.style.fontSize="20px"
        let h4 = document.createElement("h4")
        let ran = Math.floor(Math.random()*100)
        let totesS = ran+ +a.item.price
        h4.innerText = `Savings: Rs.  ${ran}0`
        h4.style.marginTop='2%'
        
        let h3 = document.createElement("h5")
        h3.style.color = "#b09975"
        h3.innerText = `${totesS} (${ran}% Off)`
        h3.style.marginTop='2%'
        
        let divs = document.createElement("div")
        let du = document.createElement("div")
        let dt = document.createElement("div")
        divs.style.display = 'flex'
        divs.style.height = "25px"
        divs.style.width = "100px"
        divs.style.backgroundColor = "#e1ecf1"
        du.style.height = "100%"
        du.style.width = "5%"
        du.style.backgroundColor = "#176c93"
        dt.style.width = "85%"
        dt.innerText = `Rs. ${a.item.price}`
        dt.style.textAlign = 'right'
        dt.style.fontSize = '18px'
        dt.style.fontWeight = '700'
        divs.append(du,dt)
        divs.style.marginLeft='40%'
        divs.style.marginTop='8%'
        let dive = document.createElement("div")
        let al = document.createElement("button")
        al.style.backgroundColor='unset'
        al.style.border='none'
        al.style.color="#176d93"
        al.innerText="Delete"
        al.href = '#'
        //delete
        
        let el = document.createElement("button")
        el.style.backgroundColor='unset'
        el.style.border='none'
        el.style.color="#176d93"
        el.innerText = 'Move to Closet'
        el.href ='#'
        dive.style.display='flex'
        dive.style.width='100%'
        dive.style.justifyContent='space-between'
        dive.style.marginTop='25%'
        
        dive.append(al,el)
        d3.append(h4,h3,divs,dive)
        d3.style.paddingRight = "5px"
        d.append(d1,d2,d3)
        it.appendChild(d)
    })
    let c = 0
    for(let i in in_c.client[0].in_cart) c+=(+in_c.client[0].in_cart[i].item.price);
    let ran = Math.floor(Math.random()*1000)
    document.getElementById("bg_tt").innerText = `₹ ${ran+c}`
    document.getElementById("bg_dc").innerText = `-₹ ${ran}`
    document.getElementById("tt").innerText = `₹ ${c}`
  }};
  xhr.send();
  
} 
}
checkCookie()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  













//cookies redeemer
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
    return "";
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
  

function checkC() {
  let token = getCookie("Atoken");
  return (token=="" || token == null)?false:true
}

let butto = document.getElementById("to_check")
butto.addEventListener("click",()=>{
    if(checkC()){
      location.href="/deli"
    }else{
      document.getElementById("backdrop").style.display="block"
      document.getElementById("bd").style.display="block"
      document.getElementById("sec_a").style.display="block"


    }
})