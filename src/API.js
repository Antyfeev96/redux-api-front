export default class API {
  constructor() {
    this.url = 'http://localhost:7070/api';
  }

  async fetchItems() {
    try {
      const response = await fetch(`${this.url}/services`);
      return await response.json();
    } catch (e) {
      console.log(e)
    }
  }

  async deleteItem(id) {
    try {
      const response = await fetch(`${this.url}/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
    } catch (e) {
      console.log(e)
    }
  }

  async getItem(id) {
    try {
      const response = await fetch(`${this.url}/services/${id}`);
      return await response.json();
    } catch (e) {
      console.log(e)
    }
  }
}