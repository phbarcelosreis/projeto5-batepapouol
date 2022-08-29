let user = [];
let usersON = [];
let nome;
let getmess;
let colocar;
let input;
let formMessage = [];

const promess = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
promess.then(entrarSala);

function entrarSala(){

    nome = prompt("Digite seu nome:");
    user = {name: nome};
    const requisition = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', user);
    requisition.then(sucesso);
    requisition.catch(falha);

    setInterval(checkON, 5000);

}

function sucesso(){

    console.log("Deu Certo!!");

}

function falha(){
    
    console.log("Esse nome já existe!");
    alert('Esse nome já existe');
    entrarSala()
    
}

function checkON(){

    const check = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', user);
    check.then(userUP);
    check.catch(userDown);

}

function userUP(up){
    console.log('Está Online');
}

function userDown(down){
    console.log('Está Offline');
}

function pegarMensagem(){
    mensagem = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    mensagem.then(mostrarMensagem);
    mensagem.catch(erroMensagem);
}

setInterval(pegarMensagem,3000);

function erroMensagem(valor){
    console.log (valor.response.status);
}

function mostrarMensagem(mensagem){
    allchat=mensagem.data;
    const buscarElemento = document.querySelector("main");
    buscarElemento.innerHTML="";
    allchat.forEach(element => {
        if(element.type==="status"){
            buscarElemento.innerHTML+=`<div class="caixa entrar">
            <div class="chat">
                <h2><h4>(${element.time}) </h4>&nbsp <b>${element.from}</b> &nbsp${element.text}</h2>
            </div>
        </div>`
        } else if (element.type==="message") {
            buscarElemento.innerHTML+= `<div class="caixa digitar">
            <div class="chat">
                <h2><h4>(${element.time})</h4>&nbsp <b>${element.from}</b>&nbsppara&nbsp<b>${element.to}</b>:</h2>
            </div>
            <h2>${element.text}</h2>
        </div>`
        }
    });
    scrollMessage();
}

function scrollMessage(){
    const buscarelemento = document.querySelector("main");
    buscarelemento.lastChild.scrollIntoView();
}

function enviarMensagem(){
    getmess=document.querySelector('input').value;

    formMessage = { 
        from: nome,
        to: "Todos",
        text:  getmess,
        type: "message"
    }
    enviomensagem=axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",formMessage);
    enviomensagem.then(mandar);
    enviomensagem.catch(erroEnvio);
}

function mandar(){
    console.log("Mensagem enviada com sucesso!");
}

function erroEnvio(mensagem){
    console.log("Usuário está offline");
    console.log(mensagem.data);
    window.location.reload();

}









