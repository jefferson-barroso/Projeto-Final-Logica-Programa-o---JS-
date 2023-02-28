let novaVaga = [];
let candidatos = [];
//FUNÇÕES SECUNDÁRIAS:
function exibir_menu() {
  return prompt(
    " Menu \n O que deseja? \n 1) Listar Vagas \n 2) Criar Nova Vaga \n 3) Visualizar Vaga \n 4) Inscrever Candidato em Nova Vaga \n 5) Excluir Vaga \n 6) Sair"
  );
}
function listar_vagas() {
  alert("Você escolheu -  listar vaga");
  for (let i = 0; i < novaVaga.length; i++) {
    alert(
      "Vaga " +
        "  [" +
        i +
        "]  " +
        novaVaga[i].slice(0, 3) +
        " com " +
        (novaVaga[i].length - 4) +
        " candidaturas"
    );
  }
}
function criar_vaga() {
  let verificar = alert("Você escolheu - Criar Vaga");
  let nome = prompt("Por favor, digite o nome da vaga");
  let descricao = prompt("Qual a descrição da vaga?");
  let data = prompt("Qual é a data limite pra inscrição");
  let novaVaga1 = [nome, descricao, data, candidatos];
  let confirm = prompt(
    "Confirma esta inscrição? " + novaVaga1.slice(0, 3) + " [S/N]"
  );
  if (confirm == "S") {
    novaVaga.push(novaVaga1);
  } else {
    alert("Tente novamente ");
  }
}
function visualizar_vaga() {
  let verificar = alert("Você escolheu - Visualizar Vaga");
  let indice = parseInt(prompt("Qual indice da vaga?"));
  if (indice <= novaVaga.length) {
    alert(
      "Acerca da vaga selecionada: " +
        novaVaga[indice].slice(0, 3) +
        " com " +
        (novaVaga[indice].length - 4) +
        " candidatos escritos."
    );
  } else {
    alert("Tente novamente");
  }
}
function inscrever_candidato() {
  let verificar = alert("Você escolheu - Inscrever Candidato");
  let nome = prompt("Qual é o seu nome? ");
  let indice2 = parseInt(
    prompt("Qual o indice da vaga que você deseja se inscrever? ")
  );
  let confirm = prompt(
    "Você realmente deseja se inscrever em " +
      novaVaga[indice2].slice(0, 3) +
      " ? [S/N]"
  );
  if (confirm == "S") {
    candidatos.push(nome);
    novaVaga[indice2].push(candidatos[-1]);
  } else {
    alert("Tente Novamente");
  }
}
function excluir_vaga() {
  let verificar5 = alert("Você escolheu - Excluir Vaga");
  let indice3 = parseInt(prompt("Qual o indice da vaga você quer excluir"));
  let confirm = prompt(
    "Você realmente deseja excluir " +
      novaVaga[indice3].slice(0, 3) +
      " ? [S/N]"
  );
  if (confirm == "S") {
    novaVaga.splice(indice3, 1);
  } else {
    alert("Tente novamente...");
  }
}
//FUNÇÃO PRINCIPAL
function executar() {
  let opcao = "";

  do {
    opcao = exibir_menu();
    let resultado;
    switch (opcao) {
      case "1":
        resultado = listar_vagas();
        break;
      case "2":
        resultado = criar_vaga();
        break;
      case "3":
        resultado = visualizar_vaga();
        break;
      case "4":
        resultado = inscrever_candidato();
        break;
      case "5":
        resultado = excluir_vaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
        break;
    }
  } while (opcao !== "6");
}

//Chamar pra executar a função principal e inicar o processo
executar();
