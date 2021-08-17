const orderList=["order1","order2"];

exports.isValidOrder=function(currenrOrder){
    return true;
}


exports.addOrder=function(currenrOrder){
    console.log("Added order successfully");
}


exports.getOrders=function(){
    console.log(orderList);
    return orderList;
}