window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.boxShadow = "0px 0px 5px 0px";
    document.getElementById("menu").style.borderRadius = "5px";
    document.getElementById("menu").style.marginBottom = "10px";
    document.getElementById("menu").style.fontSize = "16px";
    document.getElementById("menu").style.marginRight = "50px";
    document.getElementById("menu").style.marginTop = "-10px";
    document.getElementById("menu").style.padding = "10px";
    document.getElementById("name").style.fontSize = "20px";
    document.getElementById("name").style.marginTop = "0px";

  } else {
	document.getElementById("header").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("menu").style.borderRadius = "5px";
    document.getElementById("menu").style.marginBottom = "0px";
    document.getElementById("menu").style.fontSize = "20px";
    document.getElementById("menu").style.marginRight = "0px";
    document.getElementById("menu").style.padding = "17px 30px 18px 10px";
    document.getElementById("name").style.fontSize = "30px";
    document.getElementById("name").style.marginTop = "0px";  	
  }
}