 function myFunction(color1, color2, color3) {

     var x = document.querySelectorAll(".color-demo");
     var a = color1;
     var i;
     for (i = 0; i < x.length; i++) {
         x[i].style.backgroundColor = a;
     }

     var y = document.querySelectorAll(".navbar-default");
     var b = color2;
     var i;
     for (i = 0; i < y.length; i++) {
         y[i].style.backgroundColor = b;
     }

     var z = document.querySelectorAll(".section1");
     var c = color3;
     var i;
     for (i = 0; i < z.length; i++) {
         z[i].style.backgroundColor = c;
     }
 }