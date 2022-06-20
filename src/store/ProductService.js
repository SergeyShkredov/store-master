import axios from 'axios';


const API_URL_PRODUCT = 'http://localhost:8090/product';

class ProductService {
    getAllProducts() {
        return axios.get(API_URL_PRODUCT)
    }

    getProduct(id) {
        return axios.get(API_URL_PRODUCT + `/${id}`)
    }

    getCategories() {
        return axios.get('http://localhost:8090/product/categories')
    }

}

export default new ProductService()
