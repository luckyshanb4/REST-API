const orderList=[];



exports.addOrder=function(currentOrder){
    orderList.push(currentOrder);
    console.log("Added order successfully");
}


exports.getOrders=function(){
    console.log(orderList);
    return orderList;
}