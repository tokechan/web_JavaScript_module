import { subtotal, display, calcPostageFromPurchase } from "./util.js"

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const addButton = document.getElementById("add");
const sumButton = document.getElementById("sum");

const products = [
  {
    id: 1,
    name: "オリジナルブレンド200g",
    price: 500,
  },
  {
    id: 2,
    name: "オリジナルブレンド500g",
    price: 900,
  },
  {
    id: 3,
    name: "スペシャルブレンド200g",
    price: 700,
  },
  {
    id: 4,
    name: "オリジナルブレンド200g",
    price: 1200,
  }
]

addButton.addEventListener('click', e => add());
sumButton.addEventListener('click', e => calc());

let purchases = [];
function add() {
  const targetId  = parseInt(priceElement.value);
  const product = products.find(item => item.id == targetId);
  const number = numberElement.value;
  let purchase = {
    product: product,
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex((item) => item.product.id === purchase.product.id)
  if(purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }
  window.alert(`${display(purchases)}\n小計${subtotal(purchases)}円`);
  priceElement.value = "";
  numberElement.value = "";
}


function calc() {
  const sum = subtotal(purchases);
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

