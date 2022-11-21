let productArray =[
{
    image:"./image/anh2.jpg",
    names:"Nintendo Switch",
    prices:"USD 299",
    amount: 0 ,
    id:1                                                     
},{
    image:"./image/anh3.jpg",
    names:"PS5",
    prices:"USD 499",
    amount: 0,
    id:2                                                   

},{
    image:"./image/anh4.jpg",
    names:"Iphone 14 Pro Max - 1TB",
    prices:"USD 1,599",
    amount: 0,
    id:3                                                     
},{
    image:"./image/anh5.jpg",
    names:"Samsung S22 Ultra - 1TB",
    prices:"USD 1,399",
    amount: 0,
    id:4
},{
    image:"./image/anh6.jpg",
    names:"MacBook Pro 14' M1 Max",
    prices:"USD 4,699",
    amount: 0,
    id:5
},{
    image:"./image/anh7.jpg",
    names:"Ipad Air M1 Chip (2022) (256GB)",
    prices:"USD 749",
    amount: 0,
    id:6
},{
    image:"./image/anh9.jpg",
    names:"Tesla Bot (Available 2024)",
    prices:"USD 20,000",
    amount: 0,
    id:7
},{
    image:"./image/anh10.jpg",
    names:"Start your own StartUp",
    prices:"USD 5,000,000",
    amount: 0,
    id:8
},{
    image:"./image/anh11.jpg",
    names:"Entire production of Nvidia GPUs for 2022",
    prices:"USD 700,000,000",
    amount: 0,
    id:9
},{
    image:"./image/anh12.jpg",
    names:"Influence 1 high ranking politician",
    prices:"USD 2,000,000",
    amount: 0,
    id:10
},{
    image:"./image/anh13.jpg",
    names:"Private Concert with ANY Super Star",
    prices:"USD 1,000,000",
    amount: 0,
    id:11
},{
    image:"./image/anh15.jpg",
    names:"Lamborghini Aventador SVJ",
    prices:"USD 512,000",
    amount: 0,
    id:12
},{
    image:"./image/anh15.b.jpg",
    names:"Bugatti La Voiture Noire",
    prices:"USD 11,000,000",
    amount: 0,
    id:13
},{
    image:"./image/anh16.jpg",
    names:"1000 Acres of land",
    prices:"USD 4,100,000",
    amount: 0,
    id:14
},{
    image:"./image/anh16.b.jpg",
    names:"Private Island, Central America (medium size)",
    prices:"USD 4,950,000",
    amount: 0,
    id:15
},{
    image:"./image/anh17.jpg",
    names:"Monalisa by Leonardo da Vinci (estimate)",
    prices:"USD 869,000,000",
    amount: 0,
    id:16
},{
    image:"./image/anh18.jpg",
    names:"NFL Team",
    prices:"USD 3,000,000,000",
    amount: 0,
    id:17
},{
    image:"./image/anh19.jpg",
    names:"Jet Gulfstream G450",
    prices:"USD 17,000,000",
    amount: 0,
    id:18
},{
    image:"./image/anh20.jpg",
    names:"Produce a Hollywood Movie",
    prices:"USD 90,000,000",
    amount: 0,
    id:19
},{
    image:"./image/anh21.jpg",
    names:"L.A Mega Mansion (8 bd, 20 ba)",
    prices:"USD 52,000,000",
    amount: 0,
    id:20
},{
    image:"./image/anh22.jpg",
    names:"Mega Yatch",
    prices:"USD 300,000,000",
    amount: 0,
    id:21
}
]
   

function showProducts(){
    let products = ''
    for (let i in productArray) {
        products += `
        <div class="element">
            <img src="${productArray[i].image}" alt="">
            <p id="name">${productArray[i].names}</p>
            <span id="${productArray[i].prices}">${productArray[i].prices}</span>
            <div class="buyAndSellContainer">
                <button onclick=decreaseAmount(${productArray[i].id}) id="disabled${productArray[i].id}" disabled  class="btn-sell" >Sell</button>
                <span id="amount${productArray[i].id}">${productArray[i].amount}</span>
                <button onclick=accreteAmount(${productArray[i].id}) id="amount${productArray[i].id}" class="btn-buy" >Buy</button>
            </div>
        </div>
        `
    }
    document.getElementById("allElements").innerHTML = products
}
showProducts()



let btnBuy = document.getElementsByClassName("btn-buy");
let btnSell = document.getElementsByClassName("btn-sell")
// let spans = document.getElementById("amount");

let totalMoneyOrigin = 217000000000;
let totalMoney=totalMoneyOrigin;
let sum = 0;
let totalParent = 0;
console.log(totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
document.getElementById('totalMoney').innerHTML = `Remaining:${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
document.getElementById('percentageLeft').innerHTML = `You only spent 0.000000 % of the total!`
function accreteAmount(idProduct) {
 for (let i = 0; i < productArray.length; i++) {
    if(productArray[i].id==idProduct){
        let count=document.getElementById(`amount${idProduct}`);
        productArray[i].amount = ++count.innerHTML;
        let newProductArrayy = productArray[i].prices.slice(3,15).toString().replace(/\,/g, '')
        totalMoney = totalMoney - newProductArrayy;
            document.getElementById('totalMoney').innerText = `Remaining:${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
            sum =sum+  Number(newProductArrayy);
        if(count.innerHTML !== 0){
            document.getElementById(`disabled${productArray[i].id}`).disabled = false;
        }
    }
   
 }
 document.getElementById('percentageLeft').innerText = `You only spent ${((sum / totalMoneyOrigin) * 100 ).toFixed(6) + ""}% of the total!`
}

function decreaseAmount(idProduct) {   
    for (let i = 0; i < productArray.length; i++) {
        if(productArray[i].id==idProduct){
            let count=document.getElementById(`amount${idProduct}`).innerHTML;
            count--;
            let newProductArrayy = productArray[i].prices.slice(3,15).toString().replace(/\,/g, '')
        console.log(Number(newProductArrayy));
        console.log(newProductArrayy);
        totalMoney = totalMoney + Number(newProductArrayy)
        console.log(Number(newProductArrayy));
            document.getElementById('totalMoney').innerText = `Remaining:${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
            sum = count * Number(newProductArrayy)
            console.log(sum);
            document.getElementById('percentageLeft').innerText = `You only spent ${((sum / totalMoney) * 100 ).toFixed(6) + ""}% of the total!`
            document.getElementById(`amount${idProduct}`).innerHTML=count
            if(count == 0){
                document.getElementById(`disabled${productArray[i].id}`).disabled = true;
            } else{
                document.getElementById(`disabled${productArray[i].id}`).disabled = false;
            }  
            
        }
    }   
}


