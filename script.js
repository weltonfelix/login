load()
function load(){
	div = document.querySelector('div#main') // Atribui a constante 'div' a div principal
	divLogin = document.querySelector('div#main').innerHTML // Conteúdo padrão da div de login
	monkey = document.querySelector('button#btnMonkey')// Botão Macaco
	monkeyImg = document.querySelector('img#monkeyIcon')// Monkey Image
	pswd = document.querySelector('input#boxPswd')
	email = document.getElementById('boxEmail')
	emailClass = email.className
	next = document.getElementById('btnNext')
	isEmailValid = false
	isPasswordValid = false
	mailUser = false
}

function showHide(){
	const txt = document.querySelector('span#txtSH')
	 if(pswd.type == 'password'){
        pswd.type = 'show'
        monkeyImg.src = './assets/monkey.png'
		txt.innerText = 'Ocultar Senha'
    }else{
        pswd.type = 'password'
        monkeyImg.src = '/assets/monkeyCoveringEyes.png'
		txt.innerText = 'Mostrar Senha'
    }
}

function login(){
	if (isEmailValid && isPasswordValid){
		div.innerHTML = "<h3 id='works'>Login realizado com sucesso!</h3>"
		div.innerHTML += "<p><input type='button' class='btns btnsNB' id='back' onclick='back()' value='Voltar'></p>"
	}else{
		next.disabled = true
		next.classList.add('inative')
	}
}

function back(){
	div.innerHTML = divLogin
	load()
}

function passwordValidation(){
	const PVF = document.querySelector('span#passwordField')
	var criteria = (pswd.value.length >= 8) && (pswd.value != email.value) && (pswd.value != mailUser)
	if(criteria){
		PVF.innerHTML = ' '
		isPasswordValid = true
	}
	pswd.onblur = function(){
		if(criteria){
			PVF.innerHTML = ' '
			pswd.classList.remove('ferror')
			isPasswordValid = true
		}
		if (!criteria){
			if(pswd.value.length != 0){
				PVF.innerHTML = "<br><span class='dataerror' style='color: red'>A senha deve ter pelo menos 8 caracteres e ser diferente do E-mail</span><br>"
				pswd.classList.add('ferror')
			}else{
				PVF.innerHTML = ' '
				pswd.classList.remove('ferror')
			}
			isPasswordValid = false
		}
	}
	canLogin()	
}

function emailValidation(){
	var MVF = document.getElementById('emailValidationField') // Mail Validation Field recebe o campo
	var atPos = email.value.indexOf('@')
	mailUser = email.value.substring(0, atPos)
	var domain = email.value.substring(atPos + 1, email.value.length)
	const criteria = (mailUser.length >= 1) && (domain.length>=4) && (mailUser.search('@') == -1) && (domain.search('@') == -1) && (mailUser.search(' ') == -1) && (domain.search(' ') == -1) && (domain.search('.' != -1)) && (domain.indexOf('.')>=1) && (domain.lastIndexOf('.') < (domain.length - 1))
	if (criteria){
		MVF.innerHTML = ''
		email.className = emailClass
		isEmailValid = true
	}
	email.onblur = function(){
		if(email.value.length == 0){
			MVF.innerHTML = ''
			email.classList.remove('ferror')
		}
		if (!criteria){
			if(email.value.length != 0){		
				MVF.innerHTML = "<span class='dataerror' style='color: red'>Verifique o e-mail, ele deve estar no formato: meuemail@email.com</span>"
				email.classList.add('ferror')
			}
			isEmailValid = false
		}
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