import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  get(key:string, defaultValue = null) {
    return new Promise((resolve, rejects) => {
      AsyncStorage.getItem(key)
        .then((json) => {
          if(json){
            let data = JSON.parse(json);
            resolve(data);
          }
        })
        .catch((error) => rejects(error));
    });
  },
  set(key:string, Value:string) {
    let data = JSON.stringify(Value);
    return new Promise((resolve, rejects) => {
      AsyncStorage.setItem(key, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => rejects(error));
    });
  },
};