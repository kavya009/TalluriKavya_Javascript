function validateForm(){
  var name=document.getElementById("name").value;  
  var password=document.getElementById("password").value; 
  var secondpassword=document.getElementById("cpassword").value; 
  var email=document.getElementById("email").value;   
  var num=document.getElementById("number").value;
  var date = document.getElementById("date").value;
  var data = date.split("-");


  if (name == ""){  
    alert("Name cannot be emtpy!!");  
    return false;  
  }else if(email == ""){
    alert("Email cannot be emtpy!!");
    return false;
  }else if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") + 2 >= email.length){  
    alert("Please enter a valid e-mail address");  
    return false;  
  }else if(password == "" || cpassword==""){
    alert("Password cannot be emtpy!!");
    return false;
  } else if(password.length < 6){  
    alert("Password must be at least 6 characters long!!");  
    return false;  
  } else if(password != secondpassword){ 
    alert("password must be same!"); 
    return false;  
  } else if(num==""){
    alert("Phone number is compulsory!!");
    return false;
  }else if(isNaN(num)){   
    alert("Enter Numeric value only!!");
    return false;
  }else if(num.length > 10 || num.length < 10){  
    alert("Invalid phone number, Please enter a valid number!!");
    return false;
  }else if(date==""){
    alert("date of birth is compulsory!!");
    return false;
  }else if (data[0] > 2003){
      alert("Age is inappropriate, should be greater than 18!!");
        return false;
  }else{
    alert("Submitted successfully..")
    return true;  
  }   
}
