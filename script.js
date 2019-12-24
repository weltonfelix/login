const div = document.querySelector('div#main') // Atribui a constante 'div' a div principal
const divLogin = document.getElementById('main').innerHTML // Conteúdo padrão da div de login

function show(){ // Cria a função que esconde ou mostra a senhaconst pswd = document.getElementById('boxPswd')
    const monkey = document.getElementById('btnMonkey')// Botão Macaco
	const pswd = document.getElementById('boxPswd')
    pswd.type = 'show'
    monkey.value = '🐵'
}

function showHide(){
	const monkey = document.getElementById('btnMonkey')// Botão Macaco
	const pswd = document.getElementById('boxPswd')
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
	const email = document.getElementById('boxEmail')
	const pswd = document.getElementById('boxPswd')
	if (pswd.value.length == 0 || email.value.length == 0){
		alert('Preencha todos os campos!')
	}else{
		div.innerHTML = "<h3 id='works'>Login realizado com sucesso!</h3>"
		div.innerHTML += "<p><input type='button' class='btns btnsNB' id='back' onclick='back()' value='Voltar'></p>"
	}
}

function back(){
	div.innerHTML = divLogin
}