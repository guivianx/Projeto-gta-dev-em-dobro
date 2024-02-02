/* <- comentários em javascript

primeiro crie uma lógica antes de fazer o código, um trecho de como o sistema deve funcionar no codigo para ter uma noção do que deve ser feito ao decorrer do trampo, no trampo n necessita fazer isso não é necessario 


Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

    passo 1 obter o botão de seleção de plaformas no js pode verificar quando o usuário clicar em cima dele 

    passo 2 Pegar o elemento do conteúdo que precisa ser mostrado

    passo 3 pegar o clique do usuário no js

    passo 4 quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo dele apareça




Objetivo 2 - caso a lista de botões da plataforma já esteja aparecendo e o usuário clicar em cima no botão, o conteúdo deve ficar escondido

    passo 1 - verificar se o botão ja foi ativado pelo usuário, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/


const botao = document.querySelector(".btn-plataformas")

const barraPlataformas = document.querySelector(".btn-plataformas .plataformas")

// método toggle, faz a alternancia entre valores 


botao.addEventListener("click", () => {

    barraPlataformas.classList.toggle("ativo")

})

//     if (barraPlataformas.classList.contains("ativo")) {

//         barraPlataformas.classList.remove("ativo");

//     } else {
//         barraPlataformas.classList.add("ativo");
//     }
// })



// selecionar tudo e apertar ., comenta a parte selecionada

// refatorar é melhorar o código após o codigo já estar funcionando