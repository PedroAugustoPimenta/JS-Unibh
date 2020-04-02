
let inicio = document.getElementById('inicio').value;
let final = document.getElementById('final').value;
let aux = inicio;
function escrevaNumeros() {

    if (aux < final) {
        Alert();
    } else {
        break
    }


}

function Escrever() {
    var para = document.createElement("P");
    para.innerText = aux;
    document.body.appendChild(para);
    escrevaNumeros();
}

function Alert() {

    setTimeout(Escrever, 5000);
}
