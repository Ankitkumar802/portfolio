function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ankitkumar777768@gmail.com",
    Password : "Ankitkumar@1234@",
    To : 'ankitkumar777768@gmail.com',
    From : document.getElementById("email"), value,
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}