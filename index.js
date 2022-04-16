const PORT = 5500
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'random-words5.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })
})


app.get('/check', (req, res) => {
    const word = req.query.word

    const options = {
            method: 'GET',
            url: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
            params: {entry: word},
            headers: {
              'x-RapidAPI-Host': 'twinword-word-associations-v1.p.rapidapi.com',
              'x-RapidAPI-Key': process.env.RAPID_API_KEY
            }
          }
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          })
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))