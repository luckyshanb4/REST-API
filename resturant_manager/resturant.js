const orderList=[];//store all orders in an array. we can use mongo db / local file saving instead of this.


//add an order
exports.addOrder=function(currentOrder){
    orderList.push(currentOrder);
    console.log("Added order successfully");
}


//get orders array
exports.getOrders=function(){
    console.log(orderList);
    return orderList;
}