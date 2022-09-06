import { Api } from "./api.js";

class IndexPage {

  static async renderPage(client) {
    const list = document.querySelector(".container");
   
    client.forEach((element) => {
        const card = this.renderCard(element)
        list.appendChild(card)
  })
  }


  static renderCard(elem) {
    
    const card = document.createElement("li");
    const name = document.createElement("h2");
    const personal = document.createElement("div");
    const nomeCompleto = document.createElement("h3");
    const email = document.createElement("p");
    const idade = document.createElement("p");
    const cpf = document.createElement("p");
    const sexo = document.createElement("p");
    const local = document.createElement("div");
    const address = document.createElement("h3");
    const cep = document.createElement("p");
    const estado = document.createElement("p");
    const cidade = document.createElement("p");
    const bairro = document.createElement("p");
    const rua = document.createElement("p");
    const numero = document.createElement("p");

    card.id = elem.id;
    name.innerText = elem.nome;
    email.innerText = elem.email;
    idade.innerText = elem.idade;
    cpf.innerText = elem.cpf;
    sexo.innerText = elem.sexo;
    cep.innerText = elem.endereco.cep;
    estado.innerText = elem.endereco.estado;
    cidade.innerText = elem.endereco.cidade;
    bairro.innerText = elem.endereco.bairro;
    rua.innerText = elem.endereco.rua;
    numero.innerText = elem.endereco.numero;
    nomeCompleto.innerText = "Dados Pessoais";
    address.innerText = "Endereço";

    personal.appendChild(nomeCompleto);
    personal.appendChild(email);
    personal.appendChild(idade);
    personal.appendChild(cpf);
    personal.appendChild(sexo);
    local.appendChild(address);
    local.appendChild(cep);
    local.appendChild(estado);
    local.appendChild(cidade);
    local.appendChild(bairro);
    local.appendChild(rua);
    local.appendChild(numero);
    card.appendChild(name);
    card.appendChild(personal);
    card.appendChild(local);

    return card;
  }
}
const client = await Api.listingClients();
IndexPage.renderPage(client)