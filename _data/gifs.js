const axios = require('axios');

module.exports = async () => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}`
    try {
        const resp = await axios.get(url);
        const gifs = resp.data;
        return gifs;
    } catch (error) {
        console.log(error);
    }

}