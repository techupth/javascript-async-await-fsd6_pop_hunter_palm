//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
const suc = (data)=>{
  console.log(data)
}
const fail = (e)=>{
  console.log(e)
}
// Start coding here
getJohnProfile()
.then(suc)
.catch(fail)