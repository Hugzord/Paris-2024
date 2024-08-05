const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem ganhará as olimpíadas?",
        alternativas: [
            {
                texto: "Brazino",
                afirmacao: "O brasil vai ganhar, "
            },
            {
                texto: "Japão",
                afirmacao: "O japão vai dominar o mundo,"
            }
        ]
    },
    {
        enunciado: "Qual seu tipo de esporte favorito?",
        alternativas: [
            {
                texto: "Individual",
                afirmacao: "sou um lobo solitário"
            },
            {
                texto: "Coletivo",
                afirmacao: "amo meus amigos."
            }
        ]
    },
    {
        enunciado: "Vôlei ou handebol",
        alternativas: [
            {
                texto: "Vôlei é mais daora",
                afirmacao: "acho vôlei muito top"
            },
            {
                texto: "Handebol que é chave",
                afirmacao: "ninguém gosta de handebol"
            }
        ]
    },
    {
        enunciado: "Brasil ja ganhou ouro em qual modalidade?",
        alternativas: [
            {
                texto: "Xadrez",
                afirmacao: "Nem tem xadrez nas olimpíadas burro."
            },
            {
                texto: "Judô",
                afirmacao: "a Beatriz ganhou na categoria maior de 72kg"
            }
        ]
    },
    {
        enunciado: "Qual modalidade merece participar da próxima competição ",
        alternativas: [
            {
                texto: "Futsal",
                afirmacao: "o futsal merece mais reconhecimento"
            },
            {
                texto: "Bocha",
                afirmacao: "que bocha o q????? "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
