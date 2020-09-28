
const applyDiscount = new Promise(function (resolve, reject){

    const discount = false;

    if(discount){
        resolve('Discount Applied');
    }else{
        reject('Discount failed...');
    }
});

applyDiscount.then(result => {
    console.log(result)
}).catch(err =>{
    console.log(err)
})

// console.log(applyDiscount)