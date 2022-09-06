import { Api } from "./api.js";

class Edit {
  static async editMode() {
    const select = document.getElementById("select");
    const searchBtn = document.getElementById("searchBtn");
    const clients = await Api.listingClients();


    clients.forEach((element) => {
      const option = document.createElement("option");
      option.value = element.id;
      option.innerText = element.nome;
      select.appendChild(option);
    });

   searchBtn.addEventListener("click", async (event) => {
      event.preventDefault()
      const setId = select.value

      const user = await Api.searchClient(setId);

      this.edition(user)
    })
  }

  static async edition(client){
    const update = document.getElementById("update");

    const userName = document.getElementById("names");
    const userEmail = document.getElementById("emails");
    const userAge = document.getElementById("ages");
    const userCpf = document.getElementById("cpfs");
    const userSex = document.getElementById("sexs");
    const userCep = document.getElementById("ceps");
    const userStreet = document.getElementById("streets");
    const userNumber = document.getElementById("numbers");
    const userBorough = document.getElementById("boroughs");
    const userCity = document.getElementById("citys");
    const userState = document.getElementById("states");

    userName.value = client.nome;
    userEmail.value = client.email;
    userAge.value = client.idade;
    userCpf.value = client.cpf;
    userSex.value = client.sexo;
    userCep.value = client.endereco.cep;
    userState.value = client.endereco.estado;
    userCity.value = client.endereco.cidade;
    userBorough.value = client.endereco.bairro;
    userStreet.value = client.endereco.rua;
    userNumber.value = client.endereco.numero;
    
    update.addEventListener("click", async (event) => {
      event.preventDefault()
      const select = document.getElementById("select");
      const setId = select.value

      const data = {
        nome: userName.value,
        email: userEmail.value,
        sexo: userSex.value,
        idade: userAge.value,
        cpf: userCpf.value,
        endereco: {
          estado: userState.value,
          cidade: userCity.value,
          bairro: userBorough.value,
          numero: userNumber.value,
          rua: userStreet.value,
          cep: userCep.value,
        },
      }

      const user = await Api.editClient(data, setId);

      this.edition(user)
    })
  }
}
Edit.editMode()