# Página de Login
  Página de login simples usando HTML5, CSS e JS.
  [**Acessar**](https://weltonfelix.github.io/login)
  
## Funções
### Mostrar/Ocultar Senha
  Ao clicar no botão com o emoji do macaco, o modo de eibição da senha é alternado através da função:
  ```
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

  ```
  
### Validação do E-mail e da Senha
  Enquanto o usuário digita, ocorre uma validação dos dados informados, através das funções:
  ```
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
  ``` 
  
  ```
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
  
  ```
  
  Apenas após a validação dos dados, o botão para prosseguir com o login é ativado.
      
    function canLogin(){
      if (isEmailValid && isPasswordValid){
        next.disabled = false
        next.classList.remove('inative')
      }else{
        next.disabled = true
        next.classList.add('inative')
      }
    }
