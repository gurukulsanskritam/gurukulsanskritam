$("#nav-placeholder").load("nav.html");
// this is kept outside as first load nav.html only then nav-link will be visible
$( document ).ready(function() {
    var loc = window.location;
    console.log("loc = ",loc);

	x = document.getElementsByClassName("nav-link");

    console.log("x=",x.length);

	for (i = 0; i < x.length; i++) {
   		if (x[i].href == loc){
   			x[i].classList.add("active");		
   		}
   		else{
   			x[i].classList.remove("active");		
   		}
	}
});
