import { type as addProduct } from '../actions/addProduct';
import { type as showProduct } from '../actions/showProduct';
import { type as calcTotal } from '../actions/calcTotal';
import { type as deleteProduct } from '../actions/deleteProduct';
import { type as resetAll } from '../actions/resetAll';
import { type as addCompra } from '../actions/addCompra';
import { type as filtered } from '../actions/filtered';
import { type as search} from '../actions/search';
import {type as deleteNotis} from '../actions/deleteNotis';
import item from '../../data/item';

const defaultState = {
    product: [
        
    ],
    shop: [ ],
    total: [ ],
    compras:[],
    notificaciones:[]
}
    


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case showProduct: {    
            return{
                    ...state,
                    product: item.filter(j => j.productType !== payload),
                   }; 
            }

        case addProduct: {    
        return{
                ...state,
                shop: state.shop.concat(payload),
               }; 
        }

        case calcTotal: {
        let ufas = state.total.map((item,i) => {
            if(item.Product === payload.Product) {
                return state.total.splice(i,1);
                } 
            })
        return {
            ...state,
            total: state.total.concat(payload),       
            }       
        }
        case deleteProduct: {    
         
            return{
             ...state,
             shop: state.shop.filter(j => j.id !== payload),
             total: state.total.filter(j => j.Productid !== payload),
            };
        }

        case resetAll:{
            return{
                ...state,
                shop: [],
                total: [],
               };
        }
        case addCompra:{
            return{
                ...state,
                compras: state.compras.concat(payload),
                notificaciones: state.notificaciones.concat(payload)
               };
        }
        case filtered:{
          let  filteres = [...state.shop];
          
            return{
                ...state,
                product: item.filter(j => j.productType == payload),
               };
        }
        case search: {

            const regex = new RegExp(`^${payload}` , 'i');  
            var result = item.filter(n => regex.test(n.name));
            return {
                ...state,
                product: item.filter(n => regex.test(n.name))
            }
        }
        case deleteNotis:{
            return{
                ...state,
                notificaciones: [],
               };
        }
    default:
        return state;
}
}
export default reducer;