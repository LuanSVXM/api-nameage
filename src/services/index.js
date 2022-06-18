const axios = require('axios');


const api = axios.create({
    baseURL: 'https://api.agify.io',
    timeout: 2000,
    
  });

  module.exports=  {api}