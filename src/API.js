export default class API {
  constructor() {
    this.url = 'http://localhost:7070/api';
  }

  async fetchItems() {
    try {
      return await fetch(`${this.url}/services`);
    } catch (e) {
      console.log(e)
    }
  }

  async deleteItem(id) {
    try {
      await fetch(`${this.url}/services/${id}`, {
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
      return await fetch(`${this.url}/services/${id}`);
    } catch (e) {
      console.log(e)
    }
  }
}