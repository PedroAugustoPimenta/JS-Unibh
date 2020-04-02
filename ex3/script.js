function Carregar() {

    document.getElementById('imagem').innerHTML = "<image src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Floading&psig=AOvVaw3mHz0pE67kwOr78DT3dlqn&ust=1585876497615000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODkkr7IyOgCFQAAAAAdAAAAABAD'>";
    Alert();
}

function Mudar() {

    document.getElementById('imagem').innerHTML = "Carregado com sucesso"

}
function Alert() {
    setTimeout(Mudar, 5000);
}