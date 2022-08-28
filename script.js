let usersON = [];
let pessoa = [];

const promess = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
promess.then(entrarSala);

function entrarSala(resposta){
    usersON = resposta.data;
    const nome  = prompt("Digite seu nome:");
    const user = {name: nome};
    const requisition = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', user);
    requisition.then(sucesso);
    requisition.catch(falha);
}

function sucesso(){
    console.log("Deu Certo!!");
}

function falha(){
    console.log("Esse nome já existe!");
    alert('Esse nome já existe');
    entrarSala();
}









