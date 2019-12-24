function hs(){
    const sh = document.getElementById('sh')
    const senha = document.getElementById('pass')
    if(senha.type == 'password'){
        senha.type = 'show'
        sh.value = '🐵'
    }else{
        senha.type = 'password'
        sh.value = '🙈'
    }
}