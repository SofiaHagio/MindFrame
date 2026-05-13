var fotosMembros = document.querySelectorAll(".foto-wrap img");
for (var f = 0; f < fotosMembros.length; f++) {
  var posicao = fotosMembros[f].getAttribute("data-pos");
  if (posicao) fotosMembros[f].style.objectPosition = posicao;
}

var loginOverlay = document.getElementById("login-overlay");
var btnLogin     = document.getElementById("btn-login");
var inputUser    = document.getElementById("login-user");
var inputPass    = document.getElementById("login-pass");
var loginErro    = document.getElementById("login-erro");

btnLogin.addEventListener("click", function () {
  var usuario = inputUser.value.trim();
  var senha   = inputPass.value.trim();
  if (usuario === "" || senha === "") {
    loginErro.textContent = "Preencha todos os campos.";
    return;
  }
  if (usuario !== "admin" || senha !== "1234") {
    loginErro.textContent = "Usuário ou senha incorretos.";
    inputPass.value = "";
    return;
  }
  loginErro.textContent = "";
  loginOverlay.style.display = "none";
  var nomeUsuario = prompt("Login feito com sucesso! Qual é o seu nome?");
  if (nomeUsuario && nomeUsuario.trim() !== "") {
    mostrarAlerta("Bem-vindo(a), " + nomeUsuario + "! Explore o MindFrame 🎉");
  } else {
    mostrarAlerta("Bem-vindo(a) ao MindFrame! 🎉");
  }
});

inputPass.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") btnLogin.click();
});

var navbar    = document.getElementById("navbar");
var hamburger = document.getElementById("hamburger");
var navLinks  = document.getElementById("nav-links");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("rolado", window.scrollY > 40);
});

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("aberto");
});

var todosOsLinks = document.querySelectorAll("#nav-links a");
for (var i = 0; i < todosOsLinks.length; i++) {
  todosOsLinks[i].addEventListener("click", function () {
    navLinks.classList.remove("aberto");
  });
}

var linksDeNavegacao = document.querySelectorAll('a[href^="#"]');
for (var j = 0; j < linksDeNavegacao.length; j++) {
  linksDeNavegacao[j].addEventListener("click", function (e) {
    var alvo = document.querySelector(this.getAttribute("href"));
    if (!alvo) return;
    e.preventDefault();
    alvo.scrollIntoView({ behavior: "smooth" });
  });
}

var dadosSlide = [
  { src: "assets/img/carrossel1.png" },
  { src: "assets/img/carrossel2.png" },
  { src: "assets/img/carrossel3.png" },
  { src: "assets/img/carrossel4.png" },
  { src: "assets/img/carrossel5.png" },
  { src: "assets/img/carrossel6.png" }
];

var indiceAtual   = 0;
var slideImg      = document.getElementById("slide-img");
var slideContador = document.getElementById("slide-contador");
var btnAnterior   = document.getElementById("btn-anterior");
var btnProximo    = document.getElementById("btn-proximo");

function atualizarSlide() {
  slideImg.style.opacity = "0";
  setTimeout(function () {
    slideImg.src = dadosSlide[indiceAtual].src;
    slideImg.alt = "Imagem " + (indiceAtual + 1);
    slideContador.textContent = (indiceAtual + 1) + " / " + dadosSlide.length;
    slideImg.style.opacity = "1";
  }, 300);
}

slideImg.style.transition = "opacity 0.5s";
atualizarSlide();

btnProximo.addEventListener("click", function () {
  indiceAtual = indiceAtual + 1;
  if (indiceAtual >= dadosSlide.length) indiceAtual = 0;
  atualizarSlide();
  clearInterval(intervaloSlide);
});

btnAnterior.addEventListener("click", function () {
  indiceAtual = indiceAtual - 1;
  if (indiceAtual < 0) indiceAtual = dadosSlide.length - 1;
  atualizarSlide();
  clearInterval(intervaloSlide);
});

var intervaloSlide = setInterval(function () {
  indiceAtual = indiceAtual + 1;
  if (indiceAtual >= dadosSlide.length) indiceAtual = 0;
  atualizarSlide();
}, 5000);

var alertaBox       = document.getElementById("alerta-box");
var alertaMsg       = document.getElementById("alerta-msg");
var btnFecharAlerta = document.getElementById("btn-fechar-alerta");

function mostrarAlerta(mensagem) {
  alertaMsg.textContent = mensagem;
  alertaBox.style.display = "flex";
}

btnFecharAlerta.addEventListener("click", function () {
  alertaBox.style.display = "none";
});

var btnVideo       = document.getElementById("btn-video");
var modalVideo     = document.getElementById("modal-video");
var btnFecharModal = document.getElementById("btn-fechar-modal");
var videoIframe    = document.getElementById("video-iframe");

btnVideo.addEventListener("click", function () {
  modalVideo.classList.add("aberto");
});

btnFecharModal.addEventListener("click", function () {
  modalVideo.classList.remove("aberto");
  var srcAtual = videoIframe.src;
  videoIframe.src = "";
  videoIframe.src = srcAtual;
});

modalVideo.addEventListener("click", function (e) {
  if (e.target === modalVideo) btnFecharModal.click();
});

var observador = new IntersectionObserver(function (entradas) {
  for (var k = 0; k < entradas.length; k++) {
    if (entradas[k].isIntersecting) entradas[k].target.classList.add("visivel");
  }
}, { threshold: 0.12 });

var elementosAnimados = document.querySelectorAll(".card, .passo, .tech-item, .membro");
for (var m = 0; m < elementosAnimados.length; m++) {
  observador.observe(elementosAnimados[m]);
}
var jaExibiu = false;

window.addEventListener("scroll", function () {
  var secaoTime = document.getElementById("time");
  if (!secaoTime || jaExibiu) return;
  if (secaoTime.getBoundingClientRect().top < window.innerHeight * 0.7) {
    jaExibiu = true;
    mostrarAlerta("Conheça o time por trás do MindFrame! 👥");
  }
});


var btnFeedback = document.createElement("button");
btnFeedback.textContent = "💬 Feedback";

btnFeedback.style.position     = "fixed";
btnFeedback.style.bottom       = "24px";
btnFeedback.style.right        = "24px";
btnFeedback.style.background   = "#8B7CF6";
btnFeedback.style.color        = "#fff";
btnFeedback.style.border       = "none";
btnFeedback.style.borderRadius = "100px";
btnFeedback.style.padding      = "12px 22px";
btnFeedback.style.fontFamily   = "'Cinzel', serif";
btnFeedback.style.fontSize     = "0.85rem";
btnFeedback.style.fontWeight   = "700";
btnFeedback.style.cursor       = "pointer";
btnFeedback.style.zIndex       = "800";
btnFeedback.style.boxShadow    = "0 4px 20px rgba(139,124,246,0.4)";
btnFeedback.style.transition   = "transform 0.2s";

btnFeedback.addEventListener("mouseover", function () { this.style.transform = "translateY(-3px)"; });
btnFeedback.addEventListener("mouseout",  function () { this.style.transform = "translateY(0)"; });

btnFeedback.addEventListener("click", function () {
  var feedback = prompt("O que você achou do MindFrame? Deixe seu feedback:");
  if (feedback && feedback.trim() !== "") {
    mostrarAlerta("Obrigado pelo feedback: \"" + feedback + "\" 💜");
  } else if (feedback !== null) {
    mostrarAlerta("Nenhum feedback digitado.");
  }
});

document.body.appendChild(btnFeedback);