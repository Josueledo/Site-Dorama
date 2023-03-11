userInfo = JSON.parse(localStorage.getItem('listaUser'))



let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.getElementById('username')

console.log(userInfo)

logado.innerHTML = userLogado.user

function novaAba(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function ep1(){
    console.log('ep1')
    novaAba('/garota-seculo-20/eps/ep1.html')
}
