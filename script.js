var modal = document.getElementById('modal01');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");


function onClick(element) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	captionText.innerHTML = element.alt;
}


