interface IProduct {
  id: number;
  productName: string;
  productPrice: number;
  productStock: number;
}

const product1: IProduct = {
  id: 1,
  productName: "Phone",
  productPrice: 2000,
  productStock: 2,
};
const product2: IProduct = {
  id: 2,
  productName: "Laptop",
  productPrice: 12000,
  productStock: 9,
};

const product3: IProduct = {
  id: 3,
  productName: "PC",
  productPrice: 122000,
  productStock: 9,
};

const purchaseProduct = (product: IProduct, Quantity: number) => {
  if (Quantity < 0) {
    return "invalid ";
  }

  if (product.productStock >= Quantity) {
    const currentpro = product.productStock - Quantity;
    const update = `products stock ${currentpro} Purchase ${Quantity} Success`;
    return update;
  }
  const update = `products stock ${product.productStock} Purchase ${Quantity} Invalid`;
  return update;
};

console.log(purchaseProduct(product1, 3));

const getTotalPrice = (product: IProduct, quantity: number): string => {
  if (product.productStock >= quantity) {
    const price = product.productPrice * quantity;
    return `Total Price ${price}`;
  }

  return "StockOut";
};

console.log(getTotalPrice(product1, 3));
