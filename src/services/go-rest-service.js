export default class GoRestService {
  _apiBase = 'https://gorest.co.in/public-api';
  _token = '2znph1MHCJ4sqk0eE25htgHf30htBVYUIbnH';

  getResource = async () => {
    try {
      let response = await fetch(
        `${this._apiBase}/users?_format=json&access-token=${this._token}`,
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };
}
