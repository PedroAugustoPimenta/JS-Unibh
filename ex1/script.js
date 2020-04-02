function despertador() {
    alert("hora de Acordar");
}

function Alerta() {
    let tempo = document.getElementById('tempo').value;
    setTimeout(despertador, tempo);
}