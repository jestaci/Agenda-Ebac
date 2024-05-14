const form = document.getElementById ('form-agenda');
const imgCadastrado = '<img src="./imagens/download.jpg" alt"emoji telefone" /> '; 

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    addLinha ();
    atualizaAgenda();
    somaTotal();
});

function addLinha (){
    
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputTelAgenda = document.getElementById('tel-agenda');

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputTelAgenda.value}</td>`;
    linha += `<td>${inputNomeAgenda.value = imgCadastrado }</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeAgenda.value = '';
    inputTelAgenda.value = '';
};

function atualizaAgenda (){
    
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
};
