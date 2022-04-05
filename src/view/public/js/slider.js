setTimeout(function(){
    let aaa = document.querySelector(".aaa")
    let aab = document.querySelector(".aab")
    let aac = document.querySelector(".aac")
    let aad = document.querySelector(".aad")
    let aae = document.querySelector(".aae")
    let aaf = document.querySelector(".aaf")

    setTimeout(function(){
      aaa.style.width="100%"
    }, 200)
    setTimeout(function(){
      aab.style.width="100%"
        }, 4200)    
        setTimeout(function(){
          aac.style.width="100%"
        }, 8200)    
        setTimeout(function(){
            aad.style.width="100%"
        }, 13200)    
        setTimeout(function(){
          aae.style.width="100%"
        }, 18200)    
        setTimeout(function(){
          aaf.style.width="100%"
        }, 23200)    
        setTimeout(function(){
          aaa.style.width="0%"    
          aab.style.width="0%"    
          aac.style.width="0%"    
          aad.style.width="0%"    
          aae.style.width="0%"    
          aaf.style.width="0%"
        }, 23400) 
        function start() {
          setInterval(function(){ 
            setTimeout(function(){
              aaa.style.width="100%"
            }, 2000)
            setTimeout(function(){
              aab.style.width="100%"
        }, 6000)    
        setTimeout(function(){
          aac.style.width="100%"
        }, 10000)    
        setTimeout(function(){
          aad.style.width="100%"
        }, 15000)    
        setTimeout(function(){
          aae.style.width="100%"
        }, 20000)    
        setTimeout(function(){
            aaf.style.width="100%"
          }, 25000)    
          setTimeout(function(){
            aaa.style.width="0%"    
            aab.style.width="0%"    
            aac.style.width="0%"    
            aad.style.width="0%"    
            aae.style.width="0%"    
            aaf.style.width="0%"
          }, 30000) 
        }, 30500)
      }
start()
}, 2000)