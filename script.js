const promess = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants ');
promess.then(processarResposta);

function processarResposta (resposta){ 
    console.log(resposta.data);
}

let usersON = [];

const entrarSala = () => {
    usersON = resposta.data;
    const nome  = prompt("Digite seu nome:");
    if(usersON.some(e => e.name === nome)){
        alert("Nome já selecionado, digite outro!")
        entrarSala()
    }else{
        let pessoa = {name: nome, message: ""};
        usersON.push(pessoa);
    }
}







