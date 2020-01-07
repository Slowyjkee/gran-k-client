import {CREATE_PRODUCT, GET_PRODUCTS} from "../types/action-types";
import {api, apiData} from "../../utils/api";
import {SET_PRODUCTS} from "../types/mutation-types";

export default  {
    namespaced:true,
    state: {
        list:[]
    },
    mutations: {


        [SET_PRODUCTS](state, payload){

            state.list = payload

        },


    },


    actions: {

        async [GET_PRODUCTS]({ commit }){
          let products = await api({METHOD:'get', URL:'products'});
            console.log(products)

          try {
              commit('SET_PRODUCTS', products.data)

          } catch (e) {

            console.trace(e)

          }
        },
        async [CREATE_PRODUCT]({ commit }, payload){
            let {description, price, title} = payload;

            let product = await apiData({METHOD:'post', URL:'products', DATA:{title:title, description:description, price:price}});

            try {
                console.log(product)
            } catch (e) {

                console.trace(e)

            }
        }

    },
    getters: {

    }
}
