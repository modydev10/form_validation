const form = document.querySelector('form');
const createBtn = document.getElementById('create-btn');


createBtn.addEventListener('click', (e) => {
    e.preventDefault();
})

function emptyInput(inputElement) {
    inputElement.parentElement.querySelector('.error-msg').classList.add('visible');
    inputElement.parentElement.querySelector('.error-msg').textContent = "input shouldn't be empty";
    // console.log(inputElement.parentElement.querySelector('small'));
}


const usernameRegex = /^[a-zA-Z0-9_-]{3,12}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// the password should contain capital and small letters, at least one number
// and one symbol, the order doesn't matter
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// function clearAgeInput() {
//     let ageInput = document.getElementById('age');
//     const age = Number(ageInput.value)
//     if (age < 1 || age > 120) {
//         ageInput.value = "";
//         inputElement.parentElement.querySelector('small').classList.add('visible');
//         inputElement.parentElement.querySelector('small').textContent = "input shouldn't be empty";
//     }
// }

function checkValidation(input) {
    if (input.id == 'username') {
        // console.log('checking')
        const test = usernameRegex.test(input.value);
        if (test) {
            input.className = 'valid-input';
            input.parentElement.querySelector('small').classList.remove('visible');
        } else {
            input.className = 'not-valid-input';
            input.parentElement.querySelector('small').classList.add('visible');
            input.parentElement.querySelector('small').textContent = "username is not valid";
        }
    } else if (input.id == 'password') {
        const test = passwordRegex.test(input.value);
        if (test) {
            input.className = 'valid-input';
            input.parentElement.querySelector('small').classList.remove('visible');
        } else {
            input.className = 'not-valid-input';
            input.parentElement.querySelector('small').classList.add('visible');
            input.parentElement.querySelector('small').textContent =
                "the password should consist of at least 8 character. including a capital letter, a small letter, a number and a symbol";
        }
    } else if (input.id == 'age') {
        // let input = document.getElementById('age');
        const age = Number(input.value)
        if (age < 1 || age > 120) {
            input.value = "";
            input.parentElement.querySelector('small').classList.add('visible');
            input.parentElement.querySelector('small').textContent = `are you ${age} years old? please be serious`;
        } else {
            input.className = 'valid-input';
            input.parentElement.querySelector('small').classList.remove('visible');
            input.parentElement.querySelector('small').textContent = "";
        }
    } else if (input.id == 'email') {
        const test = emailRegex.test(input.value);
        if (test) {
            input.className = 'valid-input';
            input.parentElement.querySelector('small').classList.remove('visible');
        } else {
            input.className = 'not-valid-input';
            input.parentElement.querySelector('small').classList.add('visible');
            input.parentElement.querySelector('small').textContent = "email is not valid";
        }
    }
}



const inputFields = document.querySelectorAll('.form-control input');

inputFields.forEach((input, i) => {

    input.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {

            if (input.value == "") {
                emptyInput(input);
            } else {
                checkValidation(input);
            }

            // move to the next input
            if (i != inputFields.length - 1) {
                inputFields[i + 1].focus();
            }

        } else if (e.key == 'Backspace' && input.value == "") {
            input.className = '';
            input.parentElement.querySelector('small').classList.remove('visible');
            // input.parentElement.querySelector('small').textContent = "";
        }
    })

})