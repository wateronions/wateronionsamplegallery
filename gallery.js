function upDate(previewPic) {
  // Get the #image div
  const imageDiv = document.getElementById("image");

  // Update the text to the alt attribute of the hovered image
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  // Get the #image div
  const imageDiv = document.getElementById("image");

  // Reset the text to the default message
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
