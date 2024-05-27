// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

const revivedasync = async()=>{
  try{
    const johnprofile = await getJohnProfile()
    console.log(johnprofile)
    const johnOrder = await getJohnOrders()
      console.log(johnOrder)
    }catch(e){
      console.log(e)
    }
  }
  revivedasync()
// Start coding here
