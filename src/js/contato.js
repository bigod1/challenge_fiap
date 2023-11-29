function handleForm(){
    const nameInput = document.querySelector('.input__name')
    const nameSpan = document.querySelector('.name__span')

    const emailInput = document.querySelector('.input__email')
    const emailSpan = document.querySelector('.email__span')
    const button = document.querySelector('button')

    button.addEventListener('click', (event) => {
        event.preventDefault()

        if (nameInput.value === ''){
            nameSpan.innerText = 'Por favor preencha com seus dados!'
        }
        else{
            nameSpan.innerText = ''
        }
        
        if(emailInput.value === ''){
            emailSpan.innerText = 'Por favor preencha com seus dados!'
        }
        else{
            emailSpan.innerText = ''
        }

        if(nameInput.value != '' && emailInput.value != ''){
            alert('Agradecemos o contato!')
        }

        nameInput.value = ''
        emailInput.value = ''
    })
}

handleForm()