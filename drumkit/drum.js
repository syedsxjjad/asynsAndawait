window.addEventListener("keydown",(e)=>{
    var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    var key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (audio) {
       ////play() builton function 
       audio.play();
       audio.currentTime=0;
       key.classList.add("playing")
    }
    return

   })
   //////querySelectorAll(".key") give me Node List.
   var k=document.querySelectorAll(".key")
   k.forEach((e)=>{
       e.addEventListener('transitionend',remove)
   
   })
   function remove(w) {
       if (w.prpertyName="transform") {
           this.classList.remove("playing");
       }
       return
   }
