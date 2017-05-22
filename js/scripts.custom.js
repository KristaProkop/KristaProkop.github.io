//Advances slides in project view

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n, set) {
  showDivs(slideIndex += n, set);
}

function showDivs(n, set) {
  var i;
  var x = document.getElementsByClassName(set);

  if (n > x.length) {
    slideIndex = 1
  }    

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  x[slideIndex-1].style.display = "block"; 

}