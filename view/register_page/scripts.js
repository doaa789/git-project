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

// Validate email

var email_field=document.getElementById('email_field');
email_field.onchange =function(){
  ValidateEmail(email_field)
}

function ValidateEmail(email){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email.value.match(mailformat)){
  alert("invalid email address !! please enter a new email ");
  }
}

// Validate length of password
var thePassword="";

var userPassword=document.getElementsByName('psw');
for (var i = 0; i < userPassword.length; i++) {
  ValidatePassword(userPassword[i]);
}

function ValidatePassword(password){
  password.onchange =function(){
    if(password.value.length < 4) {
    alert("password must have more than 4 character !! try again");
    }
    else{
      thePassword=password.value;
    }
  } 
};

// Validate repeat password
var repeatPassword=document.getElementsByName('psw-repeat');
for (var i = 0; i < repeatPassword.length; i++) {
  ValidateRepeatPassword(repeatPassword[i]);
}

function ValidateRepeatPassword(password){
  password.onchange =function(){
    if(password.value != thePassword) {
    alert("repeat password is not like password");
    }
  }
};







