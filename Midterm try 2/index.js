let days = ["M", "T", "W","Th","F","Sa","Su"];
let images = ["M.jpg", "T.jpg", "W.jpg"];
let prevday;

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("day")[i].id = days[i];

  // document.getElementById("one").addEventListener('click', setActiveButton, false);
  // document.getElementById("two").addEventListener('click', setActiveButton, false);

}

document.getElementById('M').classList.toggle('active');
//document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(e){


  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday +"care").style.display = "none";

  }
  // console.log("previous meal: " + prevmeal);
  // prevmeal.classList.toggle('active');


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log(day);
  document.getElementById(day +"care").style.display = "block";
  //document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg' >";

}


// function setActiveButton(e){
//   e.target.classList.toggle("active");
// }