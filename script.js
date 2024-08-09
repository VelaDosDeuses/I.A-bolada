const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Suspeito isso ai!",
                afirmacao: "e realmente. "
            },
            {
                texto: "Ai sim!",
                afirmacao: "posso fazer de tudo."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Vou utilizar a ferramenta da I.A que eu descobri na saida da escola pra me ajudar e dar a repostas que preciso fazendo um trabalho muito bom.",
                afirmacao: "a I.a aajuda baastante."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, e pesquisas no google com intuito de tentar fazer um bom trabalho.",
                afirmacao: "pois eu mesmo irei fazer."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode ajudar em varios tipos de trabalhos e serviços mundialmente como uma ferramnta que podera fazer de tudo.",
                afirmacao: "ate roubar os trabalhos dos outros kkkkkk."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para as I.A por conta de fazerem um trbalho melhr muitas vezes, porem os trabalhadores nao podem perder seus trabalhos de jeito nenhum.",
                afirmacao: "ja que eu posso ter meu trabalho roubado também."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "desenhar uma imagem com suas maos no programa de design como o Paint.",
                afirmacao: "mas irei dsenhar eu no paint."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA, que por sinal e bem feita as as pessoas tem um preconceito legal com ele.",
                afirmacao: "porém eu irei pedir ajuda da i.a!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de distribuir mais as frases e imagems para na parecer feito por I.A.",
                afirmacao: "pois coisa feitas pelas i.a os professores descomfiam e tiram notas."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois podem cometer erro que devem ser vereficados para que o trabalho naop fique desorganizado e feio.",
                afirmacao: "pois com ela e o futuro. "
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
    caixaPerguntas.textContent = "Em 2049... maquinas iram dominar o mundo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
