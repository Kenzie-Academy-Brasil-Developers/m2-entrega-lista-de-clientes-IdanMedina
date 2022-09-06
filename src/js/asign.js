import { Api } from "./api.js";

export class Asign {
  static asignUser() {
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userAge = document.getElementById("age");
    const userCpf = document.getElementById("cpf");
    const userSex = document.getElementById("sex");
    const userCep = document.getElementById("cep");
    const userStreet = document.getElementById("street");
    const userNumber = document.getElementById("number");
    const userBorough = document.getElementById("borough");
    const userCity = document.getElementById("city");
    const userState = document.getElementById("state");
    const asignBtn = document.getElementById("asignBtn");

    asignBtn.addEventListener("click", async (event) => {
      event.preventDefault();

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
      };

      await Api.asignClient(data);
    });
  }
}
Asign.asignUser();
