function addBulletPoint() {
  const NTD = document.getElementById("newBullet").value;
  var myList = document.getElementById("myList");
  var newListItem = document.createElement("li");
  var listItemText = document.createTextNode(NTD);
  console.log(NTD);
  newListItem.appendChild(listItemText);
  myList.appendChild(newListItem);
}
