import anxios from 'axios';

const client = anxios.create({
    baseURL: 'http://192.168.43.108:8989/auth/create'
})

export default client;