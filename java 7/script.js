const loginForm = document.forms[0];


function validate(form) {

    let result = true;

    const nameUser = document.querySelector("input[id='nameUser']").value;
    const lastNameUser = document.querySelector("input[id='lastNameUser']").value;
    const email = document.querySelector("input[id='email']").value;
    const BDate = document.querySelector("input[id='dateBirthday']").value;


    if (!nameUser) {

        reportWarning("#nameLabel", "#nameUser")
        result = false;
    }
    if (!lastNameUser) {

        reportWarning("#lastNameLabel", "#lastNameUser")
        result = false;
    }
    if (!email) {

        reportWarning("#emailLabel", "#email")
        result = false;
    }
    if (get_current_age(BDate) < 18) {

        reportWarning("#BDateLabel", "#dateBirthday");

        if (get_current_age(BDate) > 0 && get_current_age(BDate) < 18) {

            document.querySelector("#warningBDate").textContent = "Вам нет 18";
            document.querySelector("#warningBDate").style.color = "red";
        }
        result = false;
    }
    if (!checkboxValidate()) {

        result = false;
    }

    return result;
}

function reportWarning(labelText, inputBorder) {

    document.querySelector(labelText).style.color = 'red';
    document.querySelector(inputBorder).style.border = 'solid 2px red';

}

function checkboxValidate() {

    let technolojy = document.querySelectorAll(".tech");
    let test = document.querySelectorAll(".techText");
    let conter = 0;

    technolojy.forEach(element => {
        if (element.checked) {
            ++conter;
        }
    });

    if (conter < 3) {
        document.querySelector("#techLabel").style.color = "red";
        document.querySelector("#textWarningTech").textContent = "Минимум 3 языка";
        document.querySelector("#textWarningTech").style.color = "red";
    }

}

function get_current_age(date) {
    return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}


loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    if (validate(this)) {
        document.querySelector("label[id='apruved']").textContent = "Форма успешно отправлена";
        document.querySelector("label[id='apruved']").style.color = "green";
        this.submit();
    }
    if (!validate(this)) {
        document.querySelector("label[id='apruved']").textContent = "Выделено красным является обязательным";
        document.querySelector("label[id='apruved']").style.color = "red";
    }
});