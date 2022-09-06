import { Api } from "./api.js";

class Delete {
    static async deleteMode() {
      const select = document.getElementById("delSlct");
      const searchBtn = document.getElementById("delBtn");
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

        const user = await Api.deletClient(setId);
        return user
      })
    }
  }
  Delete.deleteMode()