
function changeProductNumber(type, isIncreasing, price) {
    productInput = document.getElementById(type + '-number')
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    // update case price
    productInput.value = productNumber;
    const productTotal = document.getElementById(type + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();


}
function getInputValue(type){
    const productInput = document.getElementById(type + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
   
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    
    document.getElementById('total-price').innerText = totalPrice;

}
// phone increae event

document.getElementById('phone-plus').addEventListener('click', function () {
    changeProductNumber('phone', true, 1219);
   
})
// phone decrease event
document.getElementById('phone-minus').addEventListener('click', function () {
    changeProductNumber('phone', false, 1219);
   
})


// handle  case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    changeProductNumber('case', true, 59);
    

});
// handle case minus button
document.getElementById('case-minus').addEventListener('click', function () {
    changeProductNumber('case', false, 59);
   
});

