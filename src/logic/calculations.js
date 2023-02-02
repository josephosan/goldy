// =(A2*B2)+((A2*B2)*C2)+((A2*B2)*D2)
const actualPrice = (weight, price, emolument, benefit, tax=false) => {
  emolument = emolument/100;
  benefit = benefit/100;
  const finalPrice = (weight*price)+((weight*price)*emolument)+((weight*price)*benefit);

  if(tax) {
    return finalPrice + (finalPrice*(9/100));
  }
  return finalPrice;
}

const fakePrice = (weight, price, emolument, benefit, tax=false) => {
  emolument = emolument/100;
  benefit = benefit/100;
  const addedEmolument =  (weight*price) + ((weight*price)*emolument);
  const finalPrice1 = addedEmolument + (addedEmolument*benefit);
  const finalPrice2 = (weight*price) + (addedEmolument*benefit);

  if(tax) {
    return {
      finalPrice1: finalPrice1 + (finalPrice1*(9/100)),
      finalPrice2: finalPrice2 + (finalPrice2*(9/100)),
    }
  }

  return {
    finalPrice1, 
    finalPrice2
  }
}


module.exports = {
  actualPrice,
  fakePrice
}