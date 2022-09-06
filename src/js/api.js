export class Api {
  static baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes";
  static headers = {
    "Content-Type": "application/json",
  };

  static async listingClients() {
    const options = {
      method: "GET",
      headers: this.headers,
    };
    const client = await fetch(`${this.baseUrl}`, options)
      .then((res) => res.json())
      .then((res) => res);

    return client;
  }

  static async asignClient(data) {
    const options = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    };

    const newClient = await fetch(`${this.baseUrl}`, options)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));

    return newClient;
  }

  static async searchClient(id) {
    const options = {
      method: "GET",
      headers: this.headers,
    };
    const client = await fetch(`${this.baseUrl}/${id}`, options)
      .then((res) => res.json())
      .then((res) => res);

    return client;
  }

  static async editClient(body, id) {
    const options = {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(body),
    };
console.log(body)
    const edited = await fetch(`${this.baseUrl}/${id}`, options)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));

    return edited;
  }

  static async deletClient(id) {
    const options = {
      method: "DELETE",
      headers: this.headers,
    };

    const del = await fetch(`${this.baseUrl}/${id}`, options)
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));

    return del;
  }
}
