var billValue, tipPercentage, shareCount, totalTipValue, shareValue;

function calculateTips(){
    billValue = document.getElementById('bill-value').value;
    tipPercentage = document.getElementById('tip-percentage').value;
    shareCount = document.getElementById('share-count').value;

    billValue = parseInt(billValue)
    tipPercentage = parseInt(tipPercentage)
    shareCount = parseInt(shareCount)

    totalTipValue = billValue * tipPercentage / 100;
    shareValue = totalTipValue / shareCount;

    document.getElementById('result').innerText = shareValue;
}

function resetValue(){
    document.getElementById('bill-value').value = "";
    document.getElementById('tip-percentage').value = "";
    document.getElementById('share-count').value = "";
}

var calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', calculateTips)

var resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetValue)