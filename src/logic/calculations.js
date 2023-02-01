// =(A2*B2)+((A2*B2)*C2)+((A2*B2)*D2)
const actualPrice = (weight, price, emolument, benefit) => {
  emolument = emolument/100;
  benefit = benefit/100;
  return (weight*price)+((weight*price)*emolument)+((weight*price)*benefit);
}


module.exports = {
  actualPrice
}