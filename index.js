$(document).ready(function(){

     //animate fade in for navbar and title
     //check whether or not page is scrolled or not
     if($(document).scrollTop() > 0) {
          $('#navbar').animate({ "opacity" : "0.96" }, 10);
          $('#title').animate({ "opacity" : "1.0" }, 10);
     } else {
          $('#navbar').animate({ "opacity" : "0.96" }, 2500);
          $('#title').animate({ "opacity" : "1.0" }, 2000);
     }
});
