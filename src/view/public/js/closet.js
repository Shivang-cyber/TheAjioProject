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
    console.log(in_c.client[0].liked);
    let div = document.getElementById("show_s")
    in_c.client[0].liked.map((a)=>{
        let di = document.createElement("div")
        // di.setAttribute("onClick", `location.href='/prod?type=${}'`); 
        di.style.width = "305px"
        di.style.height = "480px"
        let im = document.createElement("img")
        im.src =a.item.images[0]
        let st = document.createElement("div")
        let h3 = document.createElement("h4")
        h3.style.color="#b19975"
        h3.innerText = a.item.brand
        h3.style.fontWeight ="700"
        let h4 =document.createElement("h4")
        h4.style.marginTop = "5px"
        h4.innerText = a.item.name
        let st1 = document.createElement("div")
        let h31 = document.createElement("h4"), 
        h32 = document.createElement("h5"),
        h33 = document.createElement("h5")
        st1.style.width = '100%'
        st1.style.display = "flex"
        st1.style.justifyContent = "center"
        h31.style.fontWeight = '700'
        let ran = Math.floor(Math.random()*1000)
        h31.innerText = `₹ ${a.item.price}`
        h32.innerText = `₹ ${+a.item.price+ran}`
        h32.style.color = "#666666"
        h32.style.marginLeft = "3px"
        h32.style.marginRight = "3px"
        h32.style.textDecoration="line-through"
        let r2= Math.floor(Math.random()*100)
        h33.innerText = `( ${r2} % off )`
        h33.style.color="#b19975"
        st1.append(h31,h32,h33)
        st1.style.alignItems="center"
        st1.style.marginTop = "5px"
        let st2 = document.createElement("div")
        
        
        st.append(h3,h4,st1,st2)
        di.append(im,st)
        div.append(di)
    })
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
