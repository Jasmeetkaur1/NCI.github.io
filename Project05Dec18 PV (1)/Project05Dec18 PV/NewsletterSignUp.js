function Signup(){
    if(document.getElementById("txtSurname").value==''){
        document.getElementById("SurnameError").style.display='';
        return false;
    }else{
        document.getElementById("SurnameError").style.display='none';
    }
};