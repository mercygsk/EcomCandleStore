const Products = require('../../models/products.cjs');

module.exports = {
    getProducts
};


async function getProducts(req, res) {
  try{
    const products = await Products.find({});
    // console.log(products);
    res.status(200).json(products);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

