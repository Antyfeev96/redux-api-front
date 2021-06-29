export default class API {
  public url: string;
  constructor() {
    this.url = 'http://localhost:7070/api';
  }

  async fetchItems() {
    try {
      const response = await fetch(`${this.url}/services`);
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e)
    }
  }
}