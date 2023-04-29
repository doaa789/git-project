// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the sign_in_modal
var sign_in_modal = document.getElementById('id02');

// When the user clicks anywhere outside of the sign_in_modal, close it
window.onclick = function(event) {
    if (event.target == sign_in_modal) {
        sign_in_modal.style.display = "none";
    }
}