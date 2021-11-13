const postForm = document.querySelector('.post-form');
const category = document.querySelector('.cat-select__selected');
const gender = document.querySelector('#gender');
const age = document.querySelector('#age');
// const bikeModel = document.getElementById('bikeModel');
// const bikeMileage = document.getElementById('bikeMileage');
// const bikeYear = document.getElementById('bikeYear');
// const bikeProvince = document.getElementById('bikeProvince');
// const bikeCity = document.getElementById('bikeCity');
// const bikeArea = document.getElementById('bikeArea');
// const bikeTitle = document.getElementById('input-title3');
// const bikeDescription = document.getElementById('description3'); 
// const BikePricingSelect = document.getElementById('ddlModels3');
// const bikePrice = document.getElementById('input-amount3');
// const bikePhoneNumber = document.getElementById('bike-input-phone-number');
// const bikeEmail = document.getElementById('bike-input-email');  
const nextBtn = document.querySelectorAll(".btns-group__btn-next");


const postBottomMsg = document.getElementById('postBottomMsg');

function validCategory() {
    if (category.value !== "") {
        category.style.border = "1px solid var(--color-success)"
        // invalidBikeModel()
        setSuccessFor(category, 'Valid Category')
    } else {
        setErrorFor(category, 'Please select category')
    }
}

function validGender() {
    if (gender.value !== "") {
        gender.style.border = "1px solid var(--color-success)"
        // invalidBikeModel()
        setSuccessFor(gender, 'Valid Gender')
    } else {
        setErrorFor(gender, 'Select Gender')
    }
}
function validAge() {
    if (age.value !== "") {
        age.style.border = "1px solid var(--color-success)"
        // invalidBikeModel()
        setSuccessFor(age, 'Valid Age')
    } else {
        setErrorFor(age, 'Select Age')
    }
}






// function validBikeModel(){
//     if(bikeModel.value !== ""){
//         bikeModel.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeModel, 'Valid motorcycle model')
//     }else{
//         setErrorFor(bikeModel, 'Please select motorcycle model')
//     }
// }

// function validBikeMileage(){
//     if(bikeMileage.value !== ""){
//         bikeMileage.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeMileage, 'Valid motorcycle mileage')
//     }
// }


// function validBikeYear(){
//     if(bikeYear.value !== "" && bikeYear.value.length === 4 && bikeYear.value < 2021 && bikeYear.value > 1969) {
//         bikeYear.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeYear, 'Valid year');
//     }else if(bikeYear.value === ""){
//         bikeYear.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeYear, 'Please add your desktop year');
//     }else if(bikeYear.value.length !== 4){
//         bikeYear.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeYear, 'Only between 1970 & 2020');
//     }
// }

// function validBikeProvince(){
//     if(bikeProvince.value !== ""){
//         invalidBikeCity();
//         invalidBikeArea();
//         bikeProvince.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeProvince, 'Valid province'); 
//     }
// }
// function invalidBikeCity(){
//     if(bikeCity.value === ""){
//         setErrorFor(bikeCity, 'Invalid city')
//     }
// }

// function validBikeCity(){
//     if(bikeCity.value !== ""){
//         invalidBikeArea();
//         bikeCity.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeCity, 'Valid city')
//     }else{
//         setErrorFor(bikeCity, 'Invalid city')
//     }
// }

// function invalidBikeArea(){
//     if(bikeArea.value === ""){
//         setErrorFor(bikeArea, 'Invalid area')
//     }
// }

// function validBikeArea(){
//     if(bikeArea.value !== ""){
//         bikeArea.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeArea, 'Valid area')
//     }else{
//         setErrorFor(bikeArea, 'Invalid area')
//     }
// }
// function validBikeTitle(){
//     if(bikeTitle.value !== "" && bikeTitle.value.length > 4) {
//         bikeTitle.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeTitle, 'Valid title');
//     }else if(bikeTitle.value === ""){
//         bikeTitle.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeTitle, 'Please add a title');
//     }else if(bikeTitle.value.length < 5){
//         bikeTitle.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeTitle, 'Title must more than 4 characters');
//     }
// }

// function validBikeDescription(){
//     if(bikeDescription.value !== "" && bikeDescription.value.length > 19) {
//         bikeDescription.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeDescription, 'Valid title');
//     }else if(bikeDescription.value === ""){
//         bikeDescription.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeDescription, 'Please add a description');
//     }else if(bikeDescription.value.length < 20){
//         bikeDescription.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeDescription, 'Description needs 20 characters');
//     }
// }

// function validBikeAmount(){
//     if(!bikePrice.disabled) {
//         if(bikePrice.value !== "" ) {
//             bikePrice.style.border = "1px solid var(--success-color)"
//             setSuccessFor(bikePrice, 'Valid amount');
//         }else{
//             bikePrice.style.border = "1px solid var(--color-danger)"
//             setErrorFor(bikePrice, 'Please add amount')
//         }
//     }else if(bikePrice.disabled){
//         bikePrice.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikePrice, 'Valid amount');
//     }
// }
// function validBikePhoneNo(){
//     var phoneno = /^\(?([0]{1})\)?[-. ]?([1-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if(bikePhoneNumber.value !== "" && bikePhoneNumber.value.match(phoneno) ) {
//         bikePhoneNumber.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikePhoneNumber, 'Valid phone number');
//     }else if(bikePhoneNumber.value === ""){
//         bikePhoneNumber.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikePhoneNumber, 'Please add phone number');
//     }else{
//         bikePhoneNumber.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikePhoneNumber, 'Phone number not valid');
//     }
// }

// function validBikeEmail(){
//     if(bikeEmail.value === '') {
//         bikeEmail.style.border = "1px solid var(--color-danger)"
//         setErrorFor(bikeEmail, 'Email is needed');     
// 	}else if (!isEmail(bikeEmail.value)) {
//         bikeEmail.style.border = "1px solid var(--color-danger)"
// 		setErrorFor(bikeEmail, 'Email not valid');
// 	}else{
//         bikeEmail.style.border = "1px solid var(--success-color)"
//         setSuccessFor(bikeEmail, 'Email valid')
//     }
// }


// bikeForm.addEventListener('submit', e => {
//     e.preventDefault();    
//     checkBikeInputs();

// });


function checkForm() {
    if (validCategory() || validGender() || validAge()) {
        setErrorFor(postBottomMsg, 'It looks like you forgot something');
    }
    else {
        document.getElementById('post-top-indication').style.visibility = "hidden";
        postForm.disabled = true;
        // bikeForm.submit();
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'valid error';
    small.innerText = message;
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'valid success';
    small.innerText = message;
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}