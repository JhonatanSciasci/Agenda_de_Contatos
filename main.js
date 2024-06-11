const form = document.getElementById('form-agenda');
const EsteNome = [];
const EsteTelefone = [];

let linhas = '';

form.addEventListener('submit', function (e) { 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputName = document.getElementById('nome');
    const inputTell = document.getElementById('telefone');

    if (EsteNome.includes(inputName.value)) {
        alert(`Este nome: ${inputName.value} já foi inserido.`);
    } else {
        EsteNome.push(inputName.value);
        EsteTelefone.push(parseFloat(inputTell.value));
    
        let linha = '<tr>';
        linha += `<td>${inputName.value}</td>`;
        linha += `<td>${inputTell.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputName.value = '';
    inputTell.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}