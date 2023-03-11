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
    novaAba('/myname/eps/ep1.html')
}
function ep2(){
    console.log('ep1')
    novaAba('/myname/eps/ep2.html')
}
function ep3(){
    console.log('ep1')
    novaAba('/myname/eps/ep3.html')
}
function ep4(){
    console.log('ep1')
    novaAba('/myname/eps/ep4.html')
}
function ep5(){
    console.log('ep1')
    novaAba('/myname/eps/ep5.html')
}
function ep6(){
    console.log('ep1')
    novaAba('/myname/eps/ep6.html')
}
function ep7(){
    console.log('ep1')
    novaAba('/myname/eps/ep7.html')
}
function ep8(){
    console.log('ep1')
    novaAba('/myname/eps/ep8.html')
}