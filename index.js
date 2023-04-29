(async function getMenu(){
  const url = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
  let responce = await fetch(url);
  let data = await responce.json();
  // console.log(data[0].name);
  data.forEach(obj => {
      console.log(obj.name," - ", obj.price);
  });
  // TakeOrder();
  let order = new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({order1: "Cheeseburger", order2: "Pizza", order3: "Grilled Cheese Sandwich"})
      },2500)
  });
  order.then(TakeOrder);
}())

function TakeOrder(val){
  console.log(val);
  let prepare = new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({order_status:true, paid:false})
      },1500)
  });
  prepare.then(orderPrep);
}


function orderPrep(val){
  console.log(val);
  let pay = new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({order_status:true, paid:true})
      },1000)
  });
  pay.then(payOrder);
}

function payOrder(val){
  console.log(val);
  if(val.paid==true){
      thankyouFnc();
  }
}

function thankyouFnc(){
  alert("thankyou for eating with us today!");
}
//function getMenu() {
//  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
//    .then(response => response.json())
//    .then(data => {
//      // Show the menu to the user
//      console.log('Menu:', data);
//    })
//    .catch(error => {
//      console.error('Error fetching menu:', error);
//    });
//}
//
//function takeOrder() {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const burgers = ['Cheeseburger', 'Bacon Burger', 'Veggie Burger'];
//      const order = {
//        burgers: burgers.sort(() => Math.random() - 0.5).slice(0, 3)
//      };
//      console.log('Order:', order);
//      resolve(order);
//    }, 2500);
//  });
//}
//
//function orderPrep() {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const status = {
//        order_status: true,
//        paid: false
//      };
//      console.log('Order Status:', status);
//      resolve(status);
//    }, 1500);
//  });
//}
//
//function payOrder() {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const status = {
//        order_status: true,
//        paid: true
//      };
//      console.log('Payment Status:', status);
//      resolve(status);
//    }, 1000);
//  });
//}
//
//function thankyouFnc() {
//  console.log('Thank you for eating with us today!');
//}
//
//// Call the functions in sequence using promise chaining
//getMenu()
//  .then(() => {
//    return takeOrder();
//  })
//  .then(() => {
//    return orderPrep();
//  })
//  .then(() => {
//    return payOrder();
//  })
//  .then((status) => {
//    if (status.paid) {
//      thankyouFnc();
//    }
//  })
//  .catch(error => {
//    console.error('Error:', error);
//  });