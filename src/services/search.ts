import {search} from '../api/routes';
import request from "../api/request"

 //function search
export const _search = (query?:string) =>{

    request.get(search,`&language=fr&query=${query}`)
  };
  //function go back
export const _goBack = () =>{
    console.log('<--------- Back');
}