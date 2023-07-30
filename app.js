const form = document.getElementById('container')
const showSuccess = document.getElementsByClassName("success")[0]
const showFailure = document.getElementsByClassName("failure")[0]

//this is our default registered user
const username = "mac"
const password = "123456"
const usernameTwo = "Emresafy"
const passwordTwo = "Oladimeji"

const handleSubmit = (event) => {
    event.preventDefault();  // this prevent the normal submit operation

    const formDetails = new FormData(form); // this help to get all the details in the form

    //Login to validate 

    if(formDetails.get("username") === username && formDetails.get("password") === password){
        showSuccess.style.display = "block"
        showFailure.style.display = "none" 
    } 
    else if (formDetails.get("username") === usernameTwo && formDetails.get("password") === passwordTwo){
        showSuccess.style.display = "block"
        showFailure.style.display = "none" 
    } 
    else{
        showFailure.style.display = "block"
        showSuccess.style.display = "none"
    };
}

form.addEventListener('submit', handleSubmit);