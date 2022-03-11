// import NetInfo from '@react-native-community/netinfo';
//mport RNFetchBlob from 'rn-fetch-blob'

// import { AUTHORIZATION } from './urls';
//import { isTokenExpired } from '../utility';
// import I18n from '../i18n/I18n';

export const DEFHEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

// export const getWithTimeout = async (
//     uri: string,
//     header?: object,
//     time = 20000,
// ) => {
//     // Check network
//     const networkState = await NetInfo.fetch();
//     if (!networkState.isConnected) {
//         throw new Error("Check your internet network");
//     }
//     // If there is a token ckeck validity of the token
//     if (header && header.hasOwnProperty('x-nanobnk-auth')) {
//         // @ts-ignore
//         const token = header['x-nanobnk-auth'];
//         if (token && isTokenExpired(token)) {
//             throw new Error('Token expired. Please log out');
//         }
//     }
//     // Set timeout tracker
//     const controller = new AbortController();
//     const headers = header ? { ...DEFHEADER, ...header } : DEFHEADER;
//     const configs = {
//         method: 'GET',
//         headers,
//         signal: controller.signal,
//     };
//     // To send delete signal after the timeout
//     const timeout = setTimeout(() => {
//         controller.abort();
//     }, time);
//     console.log('Get on url ==> ', uri);
//     // console.log('Get headers ==> ', headers);
//     return fetch(uri, configs)
//         .then(async (response) => {
//             const datas = await response.json();
//             if (!response.ok) {
//                 throw new Error(datas.message);
//             }
//             console.log('Get results ==> ', datas);
//             return datas;
//         })
//         .catch((error) => {
//             if (error.name === 'AbortError') {
//                 throw new Error(
//                     'Response timed out. Check your connection (VPN or internet).',
//                 );
//             }
//             throw new Error(error.message);
//         });
// };

// export const postWithTimeout = async (
//     uri: string,
//     params: object,
//     header?: object,
//     time = 20000,
// ) => {
//     // Check network
//     const networkState = await NetInfo.fetch();
//     if (!networkState.isConnected) {
//         throw new Error("Check your internet network");
//     }
//     // If there is a token ckeck validity of the token
//     if (header && header.hasOwnProperty('x-nanobnk-auth')) {
//         // @ts-ignore
//         const token = header['x-nanobnk-auth'];
//         if (token && isTokenExpired(token)) {
//             throw new Error('Token expired. Please log out');
//         }
//     }
//     // Set timeout tracker
//     const controller = new AbortController();
//     const headers = header ? { ...DEFHEADER, ...header } : DEFHEADER;
//     const configs = {
//         method: 'POST',
//         headers,
//         body: JSON.stringify(params),
//         signal: controller.signal,
//     };
//     // To send delete signal after the timeout
//     const timeout = setTimeout(() => {
//         controller.abort();
//     }, time);

//     return fetch(uri, configs)
//         .then(async (response) => {
//             const datas = await response.json();
//             if (!response.ok) {
//                 throw new Error(datas.message);
//             }
//             return datas;
//         })
//         .catch((error) => {
//             if (error.name === 'AbortError') {
//                 throw new Error(
//                     'Response timed out. Check your connection (VPN or internet).',
//                 );
//             }
//             throw new Error(error.message);
//         });
// };
export const getRequest = async (url: string, header?: object) => {
    // Check network
    // const networkState = await NetInfo.fetch();
    // if (!networkState.isInternetReachable) {
    //     throw new Error("Check your internet network");
    // }
    // Compute request
    const headers = header ? { ...DEFHEADER, ...header } : DEFHEADER;
    console.log('Get on url = ', url);
    try {
        // const response = await fetch(url, {
        //     headers,
        // });
        const response = await RNFetchBlob.config({ trusty: true }).fetch('GET', url, headers);
        console.log("CODE getRequest " + response.info().status);
        // const datas = await response.json();
        // if (!response.ok) {
        if (response.info().status !== 200) {
            console.log('une erreur dans generic Get request');
            const err = JSON.parse(response.data)
            console.log(err);
            if (err.hasOwnProperty('message')) throw new Error(err.message);
            if (err.hasOwnProperty('error')) throw new Error(err.error);
            throw new Error(err)
        }
        return response.json();
    } catch (error: any) {
        // console.log("CODE getRequest " + error.info().status);
        console.log(error);
        throw new Error(error);
    }
    // Check if the response status is ok
    // Otherwise return the results
};

export const postRequest = async (
    url: string,
    params: object,
    header?: object,
) => {
    // Check network
    // const networkState = await NetInfo.fetch();
    // if (!networkState.isInternetReachable) {
    //     throw new Error("Check your internet network");
    // }
    try {
        // Compute request
        const headers = header ? { ...DEFHEADER, ...header } : DEFHEADER;
        console.log('Post on url = ', url);
        console.log('Post Params = ', JSON.stringify(params));
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify(params),
        // });
        const response = await RNFetchBlob.config({ trusty: true }).fetch('POST', url, headers, JSON.stringify(params));
        // Make request
        // const data = await response.json();
        // Check if the response status is ok
        // if (!response.ok) {
        console.log("CODE postRequest xxxxx " + response.info().status);
        if (response.info().status !== 200) {
            console.log('une erreur dans generic Post request');
            // console.log(datas);
            const err = JSON.parse(response.data)
            console.log(err);
            if (err.hasOwnProperty('message') && err.message != null) throw new Error(err.message);
            if (err.hasOwnProperty('error')) throw new Error(err.error);
            throw new Error(err)
        }
        // Otherwise return the results
        // const datas = await response.json();
        return response.json();
    } catch (err: any) {
        console.log("CODE postRequest " + err.info().status);
        console.log(err);
        throw new Error(err.message);
    }
};