const tela = document.getElementById('tela')

function Mostrar(n){
    tela.value += n
}
function Calcular(){
    try{
    tela.value = eval(tela.value)}
    catch(error){
    tela.value = "Error"   
    }
}
function Limpar(){
    tela.value = ""
}