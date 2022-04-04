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
        di.style.width = "305px"
        di.style.height = "480px"
        let im = document.createElement("img")
        im.setAttribute("onClick", `location.href='/prod?id=${a.item._id}'`); 
        im.src =a.item.images[0]
        im.style.width = "100%"
        let dim = document.createElement("div")
        dim.style.display="flex"
        dim.style.justifyContent="space-between"
        let but = document.createElement("button")
        but.innerHTML="<img src='/view/stuff/images/1.png' style='width:180%;border-radius:20px' alt='' />"
        but.style.border ="none"
 
        // but.setAttribute("onClick", fetch(`http://localhost:3006/addc/${a.item._id}`)); 
        // but.onClick="addc(a.item._id)"
        // but.style.zIndex="10"
        but.style.backgroundColor ="unset"
        but.style.position="absolute"
        but.style.margin='10px'
        but.style.cursor="pointer"
        but.style.marginTop='10px'
        but.style.width="30px"
        but.style.height="30px"
        but.style.borderRadius="20px"
        let tub = document.createElement("button")
        tub.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
        tub.style.border ="none"
        tub.style.fontSize="20px"
        tub.style.backgroundColor ="unset"
        tub.style.color='white'
        tub.style.position="absolute"
        tub.style.marginLeft='265px'
        tub.style.cursor="pointer"
        tub.style.marginTop='340px'
        tub.style.width="30px"
        tub.style.height="30px"
        tub.style.borderRadius="20px"
        dim.append(but,im,tub)
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
        di.append(dim,st)
        div.append(di)
    })
  }};
  xhr.send();
  
} 
}
checkCookie()
  

function addc(s) {
    console.log(s);
            }
  
  
  
  
  
  
  
  
  
  
  
  













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
