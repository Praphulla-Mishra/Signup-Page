function Validate() {
    var name =
        document.forms.RegForm.Name.value;
    var password =
        document.forms.RegForm.Password.value;
   
    if (name == "" || password =="")  {
        window.alert("Please check your Crendials!!");
        return false;
    }


    if(password.length <6){
        alert("Password should be atleast 6 character long");
        
        return false;

    }
   

    return true;
}