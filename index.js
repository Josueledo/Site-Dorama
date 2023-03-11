// function show(){
//     if(password.type == 'password'){
//         password.type = 'text'
//     }else{
//         password.type = 'password'
//     }
// }



// function cadastrar(){

    

//     const pass = document.getElementById('password')
//     const email = document.getElementById('email')
//     const username = document.getElementById('name')

//     const valid1 = document.getElementById('active')
//     const valid2 = document.getElementById('active1')
//     const valid3 = document.getElementById('active2')
//     const min = document.getElementById('min6')
//     const sucess = document.querySelector('.sucess')
    
//     if (username.value == ''){
//         valid1.style.display = 'block'
//         username.style.border = '1px solid red'

//     }
//     else{
//         username.style.border = '2px solid rgba(137, 43, 226, 0.574)'
//         valid1.style.display = 'none'
        
        
//     }
//     if(email.value == ''){
//         valid2.style.display = 'block'
//         email.style.border = '1px solid red'
//     }else{
//         email.style.border = '2px solid rgba(137, 43, 226, 0.574)'
//         valid2.style.display = 'none'
        
        
//     }
//     if(pass.value == ''){
//         valid3.style.display = 'block'
//         password.style.border = '1px solid red'

//     }else if(pass.length < 6){
//         min.style.display = 'block'
//     }else{
//         pass.style.border = '2px solid rgba(137, 43, 226, 0.574)'
//         valid3.style.display = 'none'
//         sucess.style.display = 'block'
//     }


 

// listaUser =  JSON.parse(localStorage.getItem('listaUser') || '[]')

// listaUser.push(
//     {

//         username: username.value,
//         email: email.value,
//         password: pass.value,
//     }
// )


//     localStorage.setItem('listaUser', JSON.stringify(listaUser))



    
// }





// function loginFun(){
    

//     const password = document.getElementById('password')
//     const username = document.getElementById('username')
//     const valid1 = document.getElementById('active')
//     const valid2 = document.getElementById('active2')

//     if(username.value == ''){
//         valid1.style.display = 'block'
//         username.style.border = '1px solid red'
//     }else{
//         username.style.border = '2px solid rgba(137, 43, 226, 0.574)'
//         valid1.style.display = 'none'
        
//     }
    
//     if(password.value == ''){
//         valid2.style.display = 'block'
//         password.style.border = '1px solid red'

//     }else if(password.length < 6){
//         min.style.display = 'block'
//     }else{
//         password.style.border = '2px solid rgba(137, 43, 226, 0.574)'
//         valid2.style.display = 'none'
       
//     }

    

//   let listaUser = []

//   let userValid = {
//     email: '',
//     user: '',
//     senha: ''

//   }

//   listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
//     listaUser.forEach((item) =>{
//         if(username.value == item.username && password.value == item.password){
//             userValid = {
//                 user: item.username,
//                 email: item.email,
//                 senha:item.password,
//             }

//         }
//     })

//     if(username.value == userValid.user && password.value == userValid.senha){
//         window.location.href = '/index/index.html'

//         let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
//         localStorage.setItem('token', token)

//         localStorage.setItem('userLogado', JSON.stringify(userValid))


//     }else{
//         alert("username ou senha invalidos")
//     }

//  console.log(userValid)
   
  


  
// }



