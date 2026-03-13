let modo="light";

function atualizarMenu(){
let menu=document.getElementById("menu");
menu.innerHTML="";

if(modo==="light"){
menu.innerHTML+=`<button onclick="trocarSecao('inicio-light')">Início</button>`;
menu.innerHTML+=`<button onclick="trocarSecao('timeline-light')">Linha do Tempo</button>`;
//menu.innerHTML+=`<button onclick="trocarSecao('nos-light')">Sobre Nós</button>`;
menu.innerHTML+=`<button onclick="alternarModo()">🌙</button>`;
}else{
menu.innerHTML+=`<button onclick="trocarSecao('inicio-dark')">Universo</button>`;
menu.innerHTML+=`<button onclick="trocarSecao('sobre-dark')">Sobre Ela</button>`;
menu.innerHTML+=`<button onclick="trocarSecao('carta-animada')">Carta</button>`;
menu.innerHTML+=`<button onclick="trocarSecao('surpresa-dark')">Surpresa</button>`;
menu.innerHTML+=`<button onclick="alternarModo()">☀</button>`;
}
}

function trocarSecao(id){
document.querySelectorAll(".section").forEach(sec=>{
sec.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

function alternarModo(){
modo = modo==="light" ? "dark" : "light";
document.body.className=modo;
document.getElementById("background-effects").innerHTML="";
atualizarMenu();

if(modo==="light"){
criarCoracoes();
trocarSecao("inicio-light");
}else{
criarEstrelas();
criarMeteoros();
criarFotosFlutuando();
trocarSecao("inicio-dark");
}
}

function criarCoracoes(){
let container=document.getElementById("background-effects");
for(let i=0;i<20;i++){
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*-100+"vh";
heart.style.animationDuration=(6+Math.random()*6)+"s";
container.appendChild(heart);
}
}

function criarMeteoros(){
let container=document.getElementById("background-effects");
for(let i=0;i<6;i++){
let meteor=document.createElement("div");
meteor.className="meteor";
meteor.style.top=Math.random()*50+"vh";
meteor.style.left=Math.random()*110+"vw";
meteor.style.animationDuration=(2+Math.random()*2)+"s";
container.appendChild(meteor);
}
}

function mostrarSurpresa(){

let msg = document.getElementById("mensagemSurpresa")

msg.innerHTML = `
<p>Ainda não tivemos a chance, de ter um pedido oficial, de ter um momento perfeito para fazer o seu pedido o mais lindo possivel, mas já somos namorados, de corpo e alma, você ainda vai 
receber o seu pedido pessoalmente no momento certo, do jeito mais lindo possivel mas até la meu amor, você aceita namorar essa pessoinha aqui? Eu sei que as vezes sou lerdo, ou 
erro contigo por açoes que não prestei atenção ou esqueci, mas eu te amo, te amo muito mesmo, e a unica pessoa que passa o dia todo em minha mente e ti, então Leticia, você aceita 
esse pedido temporario dessa pessoa até chegar o oficial?? em em em 🥹🥹🥹💜</p>
<img src="imagens/casamento.png" class="foto-surpresa animar">
`

}

/* TIMELINE ANIMATION */

function animarTimeline(){
if(modo!=="light") return;

let items=document.querySelectorAll(".timeline-item");
items.forEach(item=>{
let top=item.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
item.classList.add("show");
}
});
}

window.addEventListener("scroll", animarTimeline);

/* INIT */
atualizarMenu();
trocarSecao("inicio-light");
criarCoracoes();

function criarEstrelas(){

let container = document.getElementById("background-effects");

for(let i=0;i<120;i++){

let star = document.createElement("div");
star.className = "star";

star.style.top = Math.random()*100 + "vh";
star.style.left = Math.random()*100 + "vw";

star.style.animationDuration = (1 + Math.random()*3) + "s";

container.appendChild(star);

}

}


function criarFotosFlutuando(){

let container = document.getElementById("background-effects")

let fotos = [
"imagens/gatinha_orbita.jpeg",
"imagens/biquinho_orbita.jpeg",
"imagens/Crisma_orbita.jpeg",
"imagens/docinho_orbita.jpeg",
"imagens/fofura_orbita.jpeg",
"imagens/forte_orbita.jpeg",
"imagens/zoinho.jpeg",
"imagens/fofura2_orbita.jpeg"
]

fotos.forEach((foto,i)=>{

let img = document.createElement("img")

img.src = foto
img.className = "foto-galaxia"

img.style.top = Math.random()*80 + "vh"
img.style.left = Math.random()*80 + "vw"

img.style.animationDuration = (20 + i*5) + "s"

container.appendChild(img)

})

}

function toggleMusica(){

let musica = document.getElementById("musica")

if(musica.paused){
musica.play()
}else{
musica.pause()
}

}

function trocarMusica(arquivo){

let musica = document.getElementById("musica")

musica.src = arquivo
musica.play()

}

function atualizarContadorAnimado(){

let inicio = new Date("2025-06-012 00:00:00")
let agora = new Date()

let diff = agora - inicio

let segundos = Math.floor(diff/1000)
let minutos = Math.floor(segundos/60)
let horas = Math.floor(minutos/60)
let dias = Math.floor(horas/24)

let anos = Math.floor(dias/365)
let meses = Math.floor((dias%365)/30)
let diasRest = dias%30

document.getElementById("anos").innerText = anos
document.getElementById("meses").innerText = meses
document.getElementById("dias").innerText = diasRest
document.getElementById("horas").innerText = horas%24
document.getElementById("minutos").innerText = minutos%60
document.getElementById("segundos").innerText = segundos%60

}

setInterval(atualizarContadorAnimado,1000)

function abrirCarta(){

let envelope = document.querySelector(".envelope")

envelope.classList.toggle("aberto")

}