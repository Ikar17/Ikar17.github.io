document.addEventListener('DOMContentLoaded', () =>{
    //złapanie formularza
    let form = document.getElementById('form');

    //oczekiwanie na przesłanie danych
    form.addEventListener('submit', (formData) => {
        formData.preventDefault();


        let name = formData.target.elements[0];
        let surname = formData.target.elements[1];
        let number = formData.target.elements[2];
        let mail = formData.target.elements[3];
    
        let nameError = document.getElementById('nameError');
        let surnameError = document.getElementById('surnameError');
        let numberError = document.getElementById('numberError');
        let mailError = document.getElementById('mailError');

        nameError.innerText = "";
        surnameError.innerText = "";
        numberError.innerText = "";
        mailError.innerText = "";

        let flagName = 1;
        let flagSurname = 1;
        let flagNumber = 1;
        let flagMail = 1;


        //walidacja
        if(name.value.length < 3 || name.value.startsWith(' ')){
            nameError.innerText = "Niepoprawne imię";
            flagName = 0;
        }
        if(surname.value.length < 3 || surname.value.startsWith(' ')){
            surnameError.innerText = "Niepoprawne nazwisko";
            flagSurname = 0;
        }
        if(number.value.length !== 9){
            numberError.innerText = "Niepoprawny numer";
            flagNumber =0;
        }
        if(mail.value.length < 5 || mail.value.startsWith(' ')){
            mailError.innerText = "Niepoprawne mail";
            flagMail =0;
        }

        //wprowadzono poprawne dane - czyszczenie formularza
        if(flagName && flagSurname && flagNumber && flagMail){
            formData.target.elements[0].value = "";
            formData.target.elements[1].value = "";
            formData.target.elements[2].value = "";
            formData.target.elements[3].value = "";
        }
        
    })
})