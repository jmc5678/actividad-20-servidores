function validateForm() { 
    var user = document.getElementById("name").value; 
    var pass = document.getElementById("password").value; 
     if (user == "jared" && pass == "1") {  
        alert("usuario y contraseña validos") ;
        window.location="c.html";
      } else { 
        alert("intenta de nuevo"); 
     } 
 };