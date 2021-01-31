import api from './api'

export default {

    async getProducts(searchWord) {
        try {

            console.log(searchWord);
            /*  const data1 = await api.api1.get(`api/search?q=${searchWord}`)
  
              const data2 = await api.api2.get(`django_api/search/?q=${searchWord}`)
  
              const data3 = await api.api3.get(`api/search?q=${searchWord}`)
  
              var products = new Array()
              products.push(data1.data)
              products.push(data2.data)
              products.push(data3.data)
  */
            let json = {
                query: "",
                total: 0,
                seller:
                {
                    id: "id vendedir",
                    name: "nombre vendedor"
                },
                items:
                    [
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 1000.0000,
                            currency: "COP",
                            rating: 3.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 233330.0,
                            currency: "COP",
                            rating: 2.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 23413210.0,
                            currency: "COP",
                            rating: 1.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 132431.0,
                            currency: "COP",
                            rating: 4.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            };

            let json2 = {
                query: "",
                total: 0,
                seller:
                {
                    id: "id vended0r 2",
                    name: "nombre vendedor 2"
                },
                items:
                    [
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 0.0,
                            currency: "COP",
                            rating: 0.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 0.0,
                            currency: "COP",
                            rating: 0.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            city:
                            {
                                name: "Medellin",
                                code: "MED"
                            },
                            price: 0.0,
                            currency: "COP",
                            rating: 0.0
                        },
                        {
                            id: 2131,
                            name: "Nevera",
                            brand: "Oster",
                            thumbnail: "https://images.pexels.com/photos/3208624/pexels-photo-3208624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
            };
            var products2 = new Array()
            products2.push(json);
            products2.push(json2);

            return products2;
        } catch (error) {
            console.log(error);
            return {};
        }
    },

    async getProductById(id, keySeller) {
        try {
            let results;
            if (keySeller == '0') {
                results = await api.api1.get(`api/item/${id}`)
            }
            if (keySeller == '1') {
                results = await api.api2.get(`django_api/item/${id}`)
            }
            if (keySeller == '2') {
                results = await api.api3.get(`api/item/${id}`)
            }
            return results.data;
        } catch (error) {
            console.log("error");
            console.log(error);
        }


    }

}