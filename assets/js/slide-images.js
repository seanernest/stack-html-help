function setImg(){
  // random number between 1 and 100
  var numRand = Math.floor(Math.random() * (5 - 1 + 1)) + 1; 
  document.getElementById("imgYuruCamp").src = "/assets/images/anime/yuru-camp/"+numRand+".png";}



  // call it the first time
  setImg();

  // set an interval to change it every 30 seconds
  window.setInterval("setImg()",8000);