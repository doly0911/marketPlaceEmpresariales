import api from './api'

export default {

    async getProducts(searchWord) {

        const data1 = await api.api1().get(`api/search?q=${searchWord}`)
        /*
        const data2 = await api.api2().get(`api/search?q=${searchWord}`)
        const data3 = await api.api3().get(`api/search?q=${searchWord}`)*/


        const data2 = {
            query = "televisor",
            total = 1,
            seller:
            {
                id = "",
                name = "vendedeo 2"
            },
            items:
                [
                    {
                        id: ID,
                        name: "Nevera vendedor 2",
                        brand: "Oster",
                        thubnail: "URL",
                        city:
                        {
                            name: "Medellin",
                            code: "MED"
                        },
                        price: 0.0,
                        currency: "COP",
                        rating: 0.0
                    },

                ]
        }

        const data3 = {
            query = "televisor",
            total = 1,
            seller:
            {
                id = "",
                name = "Name"
            },
            items:
                [
                    {
                        id: ID,
                        name: "moto vendedor  3",
                        brand: "Oster",
                        thubnail: "URL",
                        city:
                        {
                            name: "Medellin",
                            code: "MED"
                        },
                        price: 0.0,
                        currency: "COP",
                        rating: 0.0
                    },

                ]
        }
        var products = new Array()
        products.push(data1.data)
        products.push(data2.data)
        products.push(data3.data)

        return products;

    },

    async getProductById(id, keySeller) {
        switch (keySeller) {
            case 0:
                const data = await api.api1().get(`api/item/:${id}`)
                return data.data;
                break;
            case 1:
                const data = await api.api2().get(`api/item/:${id}`)
                return data.data;
                break;
            case 2:
                const data = await api.api3().get(`api/item/:${id}`)
                return data.data;
                break;
            default:
                break;
        }
    }

}