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
	if (pswd.value.length == 0 || email.value.length == 0){
		alert('Preencha todos os campos!')
	}else{
		div.innerHTML = "<h3 id='works'>Login realizado com sucesso!</h3>"
		div.innerHTML += "<p><input type='button' class='btns btnsNB' id='back' onclick='back()' value='Voltar'></p>"
	}
}

function back(){
	div.innerHTML = divLogin
	load()
}

function passwordValidation(){
	/*
	const pswdField = document.querySelector('span#passwordField')
	if(pswd.value.length < 8){
		pswdField.innerHTML = "<br><span class='dataerror' style='color: red'>A senha deve ter pelo menos 8 caracteres</span><br>"
		next.addAtribute('disabled')
	}else{
		pswdField.innerHTML = ' '
	}
	*/
}

function emailValidation(){
	var MVF = document.getElementById('emailValidationField') // Mail Validation Field recebe o campo
	atPos = email.value.indexOf('@')
	var user = email.value.substring(0, atPos)
	var domain = email.value.substring(atPos + 1, email.value.length)
	criteria = (user.length >= 1) && (domain.length>=4) && (user.search('@') == -1) && (domain.search('@') == -1) && (user.search(' ') == -1) && (domain.search(' ') == -1) && (domain.search('.' != -1)) && (domain.indexOf('.')>=1) && (domain.lastIndexOf('.') < (domain.length - 1))
	if (criteria == false){
		MVF.innerHTML = "<span class='dataerror' style='color: red'>Verifique o e-mail, ele deve estar no formato: meuemail@email.com</span>"
		email.className += ' ferror'
	}else{
		MVF.innerHTML = ''
		email.className = emailClass
		next.disabled = false
		//next.className += ' active'
	}
}