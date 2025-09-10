const mysubscribe = document.getElementById("mysubscribe")
const myvisa = document.getElementById("myvisa")
const mymaster = document.getElementById("mymaster")
const myrupe = document.getElementById("myrupe")
const mysubmit= document.getElementById("mysubmit")
const subresult = document.getElementById("subresult")
const payment = document.getElementById("payment")


mysubmit.onclick = function(){
    if(mysubscribe.checked){
        subresult.textContent = `You subscribed this page`
    }
    else{
        subresult.textContent = `Please subsscibe this page`
    }
    if(myvisa.checked){
        payment.textContent = `you are going to pay through visa`
    }
    else if(mymaster.checked){
        payment.textContent = `you will be paying through mastercard`
    }
    else if(myrupe.checked){
        payment.textContent = `you will be paying through myrupe`
    }
    else{
        payment.textContent = `Please select the payment method`
    }
}