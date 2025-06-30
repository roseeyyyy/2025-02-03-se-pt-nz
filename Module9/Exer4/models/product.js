export default (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    brand: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image_link: DataTypes.TEXT,
    description: DataTypes.TEXT,
    product_type: DataTypes.STRING,
    product_api_id: DataTypes.INTEGER
  });

  return Product;
};
