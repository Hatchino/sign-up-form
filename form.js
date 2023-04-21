const form = document.forms["form-contact"];
const submit = form.querySelector('input[type=submit]');
const errorMessages = form.querySelectorAll('.error-message');
//const errorIcon = document.querySelector('.error-icon');


// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let tabError = [];
    checkForm(tabError);

    if (tabError.length === 0) {
        location.reload();
    }

})

const checkForm = (tabError) => {
   
    for (let objetForm of form) {
        let type = objetForm.type;
        let name = objetForm.name;
        let value = objetForm.value;

        if (type == "submit") {
            continue;
        }


        // Add custom error message when the value is empty
        if (value == "") {
            switch (name) {
                case "first-name":
                    tabError.push("First Name cannot be empty");
                    //objetForm.classList.add("error");
                    break;
                case "last-name":
                    tabError.push("Last Name cannot be empty");
                    //objetForm.classList.add("error");
                    break;
                case "password":
                    tabError.push("Password cannot be empty");
                    //objetForm.classList.add("error");
                    break;

                case "email":
                    // Check if the email address is formatted correctly
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                    if (!emailRegex.test(value)) {
                        tabError.push("Looks like this is not an email");
                        //objetForm.classList.add("error");
                    }
                    break;

                default:
                    tabError.push(`${name} cannot be empty`);
            }
        }

        const divError = objetForm.nextElementSibling;

        if (!divError || !divError.classList.contains("error-message")) {
            // Create an error element to display the error message
            const errorElement = document.createElement("span");
            errorElement.className = "error-message";
            errorElement.innerText = tabError[tabError.length - 1];

            // Insert the error element after the form field
            objetForm.parentNode.insertBefore(errorElement, objetForm.nextSibling);
            objetForm.classList.add("error");
            const errorIcon = objetForm.parentNode.querySelector(".error-icon");
            errorIcon.style.display = "block";
            console.log(document.querySelectorAll('icon-erreur'));
        }


    }

}



