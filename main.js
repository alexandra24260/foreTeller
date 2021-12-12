  window.homepagecheck = function() {
   var check = false;
   if(document.location.pathname === "/"){
     check=true;
     }
   return check;
 }
if (window.homepagecheck){
    window.setTimeout(function(){
       window.location.href = "/foreTeller/step1.html";

   }, 3000);
}

if (window.location.pathname === '/foreTeller/graphic.html'){
   window.setTimeout(function(){
      window.location.href = "/foreTeller/starsaying.html";

  }, 5000);
}


let list = document.getElementsByClassName('rating-area');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'label') {
    ev.target.classList.toggle('checked');
  }
}, false);