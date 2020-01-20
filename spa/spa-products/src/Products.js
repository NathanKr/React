import React from "react";

const Products = () => {
  const products = [
    {
      name: "Shirts",
      img:
        "https://image.shutterstock.com/image-photo/young-man-wearing-white-blank-260nw-328594940.jpg"
    },
    {
      name: "Shoes",
      img:
        "https://image.shutterstock.com/image-photo/woman-wearing-black-leather-pants-260nw-202758559.jpg"
    },
    {
      name: "Boots",
      img:
        "https://image.shutterstock.com/image-photo/cowboy-boots-store-260nw-354224642.jpg"
    }
  ];

  const elements = products.map((product, index) => (
    <div>
      <p key={index}>{product.name}</p>
      <img src={product.img} alt="picture" />
    </div>
  ));

  return (
    <div>
      <h1>Products</h1>
      {elements}
    </div>
  );
};

export default Products;
