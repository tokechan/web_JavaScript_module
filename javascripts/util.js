export function subtotal(items) {
    return items.reduce((prev, item) => {
      return prev + item.product.price * item.number;
    }, 0)
  }
  
  export function display(items) {
    return items.map(item => {
      return `${item.product.price}円:${item.number}点`;
    }).join("\n")
  };
  
  export function calcPostageFromPurchase(sum) {
     if (sum == 0 || sum >= 3000) {
       return 0;
     } else if (sum < 1000){
      return 500;
     } else {
      return 250;
     }
  } 