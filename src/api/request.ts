export default {
    get(route?:string, params?:string) {
      return this.request('GET', route, params);
    },
    request(method = '', route = '', params='') {
      const req = {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      let url = route + params;
      console.log('<--------- Back', url);

      return new Promise((resolve, reject) => {
        fetch(url, req)
          .then((response) => response.json())
          .then((responseData) => {
            // resolve(responseData);
            console.log('xsdddddßssssssêkdhkjhffù', responseData)
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  };
  