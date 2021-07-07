import axios from'axios';

const BANKS_REST_API_URL = 'http://localhost:8080/api/banks/';

class BankService {

    getBanks() {
        return axios.get(BANKS_REST_API_URL);
    }

    getBankById(BankId) {
        return axios.get(BANKS_REST_API_URL  + '/' + BankId);
    }

    createBank(bank) {
        return axios.post(BANKS_REST_API_URL, bank);
    }

    deleteBank(BankId) {
        return axios.delete(BANKS_REST_API_URL + '/' + BankId)
    }
}

export default new BankService();