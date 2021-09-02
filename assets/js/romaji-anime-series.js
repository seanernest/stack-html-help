function toggleRomaji() {
  var x = document.getElementById("romajiButton");
  if (x.innerHTML === "Show Romaji Titles") {
    x.innerHTML = "Show English Titles";
  } else {
    x.innerHTML = "Show Romaji Titles";
  }
  var x = document.getElementById("YuruCamp");
  if (x.innerHTML === "Laid-Back Camp") {
    x.innerHTML = "Yuru Camp";
  } else {
    x.innerHTML = "Laid-Back Camp";
  }
  var x = document.getElementById("HeyaCamp");
  if (x.innerHTML === "Room Camp") {
    x.innerHTML = "Heya Camp";
  } else {
    x.innerHTML = "Room Camp";
  }
} 