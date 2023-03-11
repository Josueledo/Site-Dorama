
userInfo = JSON.parse(localStorage.getItem('listaUser'))



let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.getElementById('username')

console.log(userInfo)

logado.innerHTML = userLogado.user


if(localStorage.getItem('token') == null){
    alert('Voce precisa estar logado para acessar essa página')
}
function sair(){
    localStorage.removeItem('token')
}
// alert("bem Vindo "+ userInfo.username);


function myname(){
    console.log('myname')
    window.location.href = '/myname/myname.html'
}
function garota20(){
    console.log('Garota do seculo 20')
    window.location.href = '/garota-seculo-20/garota20.html'
}




