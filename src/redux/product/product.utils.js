import Client from 'shopify-buy';

export const setDropProducts = (dropNumber) => {
  let products = {};
  const client = Client.buildClient({
        domain: 'semi-aquatics.myshopify.com',
        storefrontAccessToken: 'a841eca62f514cb4af9d650a38075fbf'
      });

  client.collection.fetchAllWithProducts().then((collections) => {
    // Do something with the collections
    products.currentProducts = collections[2].products
  } );
  if (products.currentProducts)
    return products.currentProducts
  else
    return products;
}
