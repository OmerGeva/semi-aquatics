const express = require('express');
const path = require('path')
const request = require('request');
const axios = require('axios').default;

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.use(express.static(path.join(__dirname, 'build')))

app.post('/api/subscribe/:email', async (req, res) => {

    const {email} = req.params;
    
    try{
        const response = await axios.post(
            'https://api.omnisend.com/v3/contacts',
            {
              "identifiers": [
                {
                  type: "email",
                  id: email,
                  channels: {
                    email: {
                      status: "subscribed",
                      statusDate: new Date()
                    }
                  }
                }
                ]
            },
            {
                headers: { 'X-API-KEY': `${process.env.REACT_APP_OMNISEND_API_KEY}` }
            })
        await console.log(response.data);
        res.send(200);
    }catch(error){
        console.log(error.response.data.error);
        res.status(400).send({message: error.response.data.error});
    }

});

async function subscribeUser(email) {
    
    return response.data;
}


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 3001, () =>
  console.log('Express server is running on localhost:3001')
);
