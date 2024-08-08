var counter=0;
var totalSale=0;
let count=localStorage.getItem("totalOrder")
let sales=localStorage.getItem("totalSales")
document.querySelector("#totalOrders").innerHTML=count
document.querySelector("#Sales").innerHTML=sales
console.log(count)
console.log(sales)
document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault();

    let values=document.querySelectorAll(".Quantity")
    let arr=[]
    let arr2=[200,300,400]
    values.forEach((val)=>{
        let values=parseInt(val.value)
        arr.push(values)
    })
    console.log(arr)
    let totalAmount=0;
    let PriceWithQuantity=0
    for(let i=0;i<arr.length;i++){
        PriceWithQuantity=arr[i]*arr2[i]
        totalAmount=PriceWithQuantity+totalAmount
    }
    console.log(totalAmount)
    let gst=totalAmount*20/100
    let totalService=totalAmount*10/100
    let total=totalAmount+gst+totalService
    document.querySelector("#subTotal").innerHTML=totalAmount
    document.querySelector("#Tax").innerHTML=gst
    document.querySelector("#ServiceTax").innerHTML=totalService
    document.querySelector("#total").innerHTML=total
    counter++;
    totalSale+=total
    localStorage.setItem("totalOrder",counter)
    localStorage.setItem("totalSales",totalSale)
})

document.querySelector("#generate").addEventListener("click",(e)=>{
    e.preventDefault();
    let count=localStorage.getItem("totalOrder")
let sales=localStorage.getItem("totalSales")
    document.querySelector("#totalOrders").innerHTML=count
    document.querySelector("#Sales").innerHTML=sales
})
