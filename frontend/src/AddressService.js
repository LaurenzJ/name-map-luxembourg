import axios from 'axios';

const url = 'http://localhost:5000/api/addresses';

class AddressService {

    static getAddresses() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(
                        data.map(address => ({
                            ...address,
                        }))
                    );
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }

    static getAddressesWithName(familiy_name) {
        // test
        if(familiy_name.length > 2) {
            return new Promise((resolve, reject) => {
                axios.get(url+`/${familiy_name}`).then((res) => {
                        const data = res.data;
                        resolve(
                            data.map(address => ({
                                ...address,
                            }))
                        );
                    })
                    .catch((err) => {
                        reject(err);
                    })
            });
        }
        
    }


}

export default AddressService;