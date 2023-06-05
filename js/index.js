const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const number = document.getElementById('number')
const dob = document.getElementById('dob')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})
const sendData=(usernameVal,count,sRate)=>{
        if(count===sRate){
            alert('Registration Successful');
            // swal("Good job! "+ usernameVal,"Registration Successful","success")
            location.href=`thank.html?username=${usernameVal}`
        }
}
//for final validaton
const successMsg = (usernameVal)=>{
    let formCon = document.getElementsByClassName('form-control');
    var count=formCon.length-1
    for(var i=0;i<formCon.length;i++){
        if(formCon[i].className==='form-control success'){
            var sRate = 0+i;
            sendData(usernameVal,count,sRate)
        }else{
            return false
        }
    }
}
//More on mail
const isEmail=(emailVal)=>{
    var atSymbol = emailVal.indexOf("@"); 
    if(atSymbol<1) return false; //not @ at start
    var dot = emailVal.lastIndexOf(".");
    if(dot<=atSymbol+2) return false; //. should be 2 after  @
    if(dot===emailVal.length-1) return false; //not . at last
    return true
}
const validate=()=>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const numberVal = number.value.trim();
    const dobVal = dob.value.trim();
    
    //validate Username
    if(usernameVal=== ""){
        setErrorMsg(username,'username cannot be blank')
    }
    else if(usernameVal.length<=3){
        setErrorMsg(username,'username min 4 character')
    }
    else{
        setSuccessMsg(username);
    }
    
    //Validate Email
    if(emailVal=== ""){
        setErrorMsg(email,'email cannot be blank')
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email,'Not a valid Email')
    }
    else{
        setSuccessMsg(email);
    }

    //validate phone number
    if(numberVal=== ""){
        setErrorMsg(number,'phone number cannot be blank')
    }
    else if(numberVal.length !=10){
        setErrorMsg(number,'Not a valid phone number')
    }
    else{
        setSuccessMsg(number);
    }

    //validate pssword
    if(passwordVal=== ""){
        setErrorMsg(password,'password cannot be blank')
    }
    else if(passwordVal.length<=8){
        setErrorMsg(password,'Password atleast contain 8 characters ')
    }
    else{
        setSuccessMsg(password);
    }

    //validate confirm passoword
    if(cpasswordVal===""){
        setErrorMsg(cpassword,'password cannot be blank');
    }
    else if(passwordVal !=cpasswordVal){
        setErrorMsg(cpassword,'password cannot matched\n Please try again')
    }
    else{
        setSuccessMsg(cpassword)
    }
    

    //dob
    if(dobVal=== ""){
        setErrorMsg(dob,'dob number cannot be blank')
    }
    else{
        setSuccessMsg(dob);
    }

    successMsg(usernameVal);

}
function setErrorMsg(input , errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className="form-control success";
}