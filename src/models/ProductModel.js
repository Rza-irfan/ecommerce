// ProductModel.js
// const productModel = (prodId, name, image, description, price, category,quantity) =>{
    // ProductBuilder.js - Builder function
const productModel = () => {
    let product = {};
  
    const setId = (id) => {
      product = { ...product, id };
      return builder;
    };
  
    const setName = (name) => {
      product = { ...product, name };
      return builder;
    };

    const setDescription = (description) => {
      product = { ...product, description };
      return builder;
    };

    const setImage = (image) => {
        product = {...product, image};
        return builder;
    }
  
    const setPrice = (price) => {
      product = { ...product, price };
      return builder;
    };
  
    const setCategory = (category) => {
      product = { ...product, category };
      return builder;
    };
    const setQuantity = (quantity) => {
        product = { ...product, quantity };
        return builder;
      };
  
    const build = () => ({ ...product });
  
    const builder = {
      setId,
      setName,
      setImage,
      setDescription,
      setPrice,
      setCategory,
      setQuantity,
      build,
    };
  
    return builder;
  };
// } ({
//     prodId,
//     name,
//     image,
//     description,
//     price,
//     category,
//     quantity:1
//   });
  export default productModel;  