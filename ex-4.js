// Exercise #4
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
// Start coding here
const conasyn = async ()=>{
  try{const JohnProfile = await getJohnProfile()
  console.log(JohnProfile)
  }catch(e){
    console.log(e)
  }
}
conasyn()