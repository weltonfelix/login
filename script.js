const div = document.querySelector('div#main')
function hs(){
	const senha = document.getElementById('pass')
    const sh = document.getElementById('sh')
    if(senha.type == 'password'){
        senha.type = 'show'
        sh.value = '🐵'
    }else{
        senha.type = 'password'
        sh.value = '🙈'
    }
}
function logar(){
	const senha = document.getElementById('pass')
	const mail = document.getElementById('mail')
	if (senha.value.length == 0 || mail.value.length == 0){
		alert('Preencha todos os campos!')
	}else{
		div.innerHTML = "<h3 id='works'>Login realizado com sucesso!</h3>"
		div.innerHTML += "<p><input type='button' id='back' onclick='back()' value='Voltar'></p>"
	}
}
function back(){
	div.innerHTML = `<p>E-mail: <input type="email" name="e-mail" id="mail"></p>
	<p>Senha: <input type="password" name="senha" id="pass"><input type="button" onclick="hs()" id="sh" value="🙈"></p>
	<p><input type='button' id='next' onclick='logar()' value='Próximo'></p>`;
}
