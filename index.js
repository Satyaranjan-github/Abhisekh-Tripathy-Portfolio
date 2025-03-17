function sendMail(){
  var params = {
    from_name:document.getElementById("name").value,
    email_id:document.getElementById("email").value,
    message:document.getElementById("message").value,
  }

// const serviceID = "service_iz2fs0m" ;
// const templateID = "template_phnknrm" ;

emailjs.send("service_iz2fs0m","template_phnknrm",params)
.then((result) => {

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
console.log("Success",result)
  alert("Message sent successfully")
}).catch((err) => {
  console.log("Error",err)
});

}