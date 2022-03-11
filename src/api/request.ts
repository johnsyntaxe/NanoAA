import { datas } from "../types/action";

export default {
    get(route?:string, params?:string) {
      return this.request('GET', route, params);
    },
    request(method = '', route = '', params='')  {
      const req = {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      let url = route + params;

      return new Promise<datas[]>((resolve, reject) => {
        fetch(url, req)
          .then((response) => response.json())
          .then((responseData) => {
            resolve(responseData.results);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  };
  