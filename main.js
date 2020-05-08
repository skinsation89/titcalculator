//calculate Tip
let calculateTip = () => {
  let tabAmt = document.getElementById('tabamt').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let numOfPeople = document.getElementById('peopleamt').value;

  if(tabAmt === "" || serviceQual === 0) {
    alert("Please enter values");
    return;
  }

  if(numOfPeople === 0 || numOfPeople <= 1) {
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  //calculate tip
  let total = (tabAmt * serviceQual) / numOfPeople;
  //Rounds it to two decimal places
  total = Math.round(total * 100) / 100;
  //Always rounds it to two decimal places
  total = total.toFixed(2);

  //display the tip
  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;


}

//hide the tip until function fires
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

//call function
document.getElementById('tittilate').addEventListener('click', calculateTip);
