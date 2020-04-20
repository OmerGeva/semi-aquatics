const express = require('express');

const request = require('request');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/item-info', (req, res) => {
  const {productId, variantId } = req.query
  const username = process.env.REACT_APP_SHOPIFY_API_KEY;
  const password = process.env.REACT_APP_SHOPIFY_API_PASSWORD;
  request(
    { url: `https://${username}:${password}@semi-aquatics.myshopify.com/admin/api/2020-04/products/${productId}/variants/${variantId}.json` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  )
});
const port  = process.env.NODE_ENV === 'development' ? 3001 : 80
app.listen(port, () =>
  console.log('Express server is running on localhost:3001')
);


