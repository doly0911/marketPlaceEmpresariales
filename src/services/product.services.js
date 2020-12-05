import api from './api'

export default {

    async getProducts(searchWord) {
        try {


            const data1 = await api.api1.get(`api/search?q=${searchWord}`)

            const data2 = await api.api2.get(`django_api/search/?q=${searchWord}`)
            
            const data3 = await api.api3.get(`api/search?q=${searchWord}`)

            var products = new Array()
            products.push(data1.data)
            products.push(data2.data)
            products.push(data3.data)

            return products;
        } catch (error) {
            console.log(error);
            return {};
        }
    },

    async getProductById(id, keySeller) {
        let results;
        switch (keySeller) {
            case '0':
                console.log("enntro")
                results = await api.api1.get(`api/item/${id}`)
                return results.data;

            case '1':
                results = await api.api2.get(`django_api/item/${id}`)
                return results.data;

            case '2':
                results = await api.api3.get(`api/item/${id}`)
                return results.data;

            default:

                break;
        }
    }

}