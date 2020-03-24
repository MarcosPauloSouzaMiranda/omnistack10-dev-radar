const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (req, res) => {

    const { github_username, techs } = req.body;

    const apiResponse = await axios.get('https://api.github.com/users/MarcosPauloSouzaMiranda');

    console.log(apiResponse);
    // const { name = login, avatar_url, bio } = apiResponse.data;

    // const techsArray = [];

    // const dev = await Dev.create({
    //     github_username,
    //     name,
    //     avatar_url,
    //     bio,
    //     techsArray
    // });

    console.log('Aqui!');
    return res.status(200).json({msg: 'Teste'});

});

module.exports = routes;