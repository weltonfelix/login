load()
function load(){
	div = document.querySelector('div#main') // Atribui a constante 'div' a div principal
	divLogin = document.querySelector('div#main').innerHTML // Conteúdo padrão da div de login
	monkey = document.querySelector('input#btnMonkey')// Botão Macaco
	pswd = document.querySelector('input#boxPswd')
	email = document.getElementById('boxEmail')
	emailClass = email.className
	next = document.getElementById('btnNext')
}

function showHide(){
	const txt = document.querySelector('span#txtSH')
	 if(pswd.type == 'password'){
        pswd.type = 'show'
        monkey.value = '🐵'
		txt.innerText = 'Ocultar Senha'
    }else{
        pswd.type = 'password'
        monkey.value = '🙈'
		txt.innerText = 'Mostrar Senha'
    }
}

function login(){
	if (isEmailValid && isPasswordValid){
		div.innerHTML = "<h3 id='works'>Login realizado com sucesso!</h3>"
		div.innerHTML += "<p><input type='button' class='btns btnsNB' id='back' onclick='back()' value='Voltar'></p>"
	}else{
		alert('Preencha todos os campos!')
	}
}

function back(){
	div.innerHTML = divLogin
	load()
}

function passwordValidation(){
	const PVF = document.querySelector('span#passwordField')
	const criteria = (pswd.value.length >= 8) && (pswd.value != email.value)
	if(criteria){
		PVF.innerHTML = ' '
		isPasswordValid = true
	}else{
		PVF.innerHTML = "<br><span class='dataerror' style='color: red'>A senha deve ter pelo menos 8 caracteres e ser diferente do E-mail</span><br>"
		isPasswordValid = false
	}
	canLogin()	
}

function emailValidation(){
	var MVF = document.getElementById('emailValidationField') // Mail Validation Field recebe o campo
	var atPos = email.value.indexOf('@')
	var user = email.value.substring(0, atPos)
	var domain = email.value.substring(atPos + 1, email.value.length)
	const criteria = (user.length >= 1) && (domain.length>=4) && (user.search('@') == -1) && (domain.search('@') == -1) && (user.search(' ') == -1) && (domain.search(' ') == -1) && (domain.search('.' != -1)) && (domain.indexOf('.')>=1) && (domain.lastIndexOf('.') < (domain.length - 1))
	if (criteria == false){
		MVF.innerHTML = "<span class='dataerror' style='color: red'>Verifique o e-mail, ele deve estar no formato: meuemail@email.com</span>"
		email.classList.add('ferror')
		isEmailValid = false
	}else{
		MVF.innerHTML = ''
		email.className = emailClass
		isEmailValid = true
	}
	canLogin()
}

function canLogin(){
	if (isEmailValid && isPasswordValid){
		next.disabled = false
		next.classList.remove('inative')
	}else{
		next.disabled = true
		next.classList.add('inative')
	}
}