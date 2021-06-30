export default class API {
  public url: string;
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

  async deleteItem(id: number) {
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
}