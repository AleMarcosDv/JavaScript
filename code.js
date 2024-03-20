let getbody = document.querySelector("body");


getbody.innerHTML = `
<h1> Shopping Wallet </h1>
<h2>Botinha Gucci</h2>
<img src="/img/gucci.jpg" width="250px">
<p>Valor: R$ 277,00</p>
<button id="btn-rem">-</button>
<input id="qntdpro" type="number" value="1" min="0">
<button id="btn-add">+</button>
<h2>Subtotal</h2>
<section id="total">
  <p><span id="qntdtotal">0</span></p>
  <p>R$ <span id="valortotal">0</span></p>
</section>
`
let getqnttot = document.getElementById("qntdtotal");
let getvlrtot = document.getElementById("valortotal");
let getbtnrem = document.getElementById("btn-rem");
let getbtnadd = document.getElementById("btn-add");
const valorreal = 277;
let valor = {
    quantidade: 1, 
    real: 277,
};

const getqntpro = document.getElementById("qntdpro")

function atu(){
    getqnttot.innerText = valor.quantidade + " itens"
    getvlrtot.innerText = valor.real.toFixed(2);
}
atu();

const rem = ()=>{
    if (Number(getqntpro.value) > 0 ){
        getqntpro.value = Number(getqntpro.value) - 1;
       valor.quantidade = getqntpro.value;
       valor.real = valor.real - valorreal;
       valor.real = valor.real;   
       atu();
    }
}

const add =() => {
    getqntpro.value = Number(getqntpro.value) + 1;
    valor.quantidade = getqntpro.value;
    valor.real = valorreal * valor.quantidade;
    valor.real = valor.real;

    atu();
}

getbtnrem.addEventListener("click", rem);
getbtnadd.addEventListener("click", add);