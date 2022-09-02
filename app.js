// https://www.omnicalculator.com/finance/retention-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const retentionratioRadio = document.getElementById('retentionratioRadio');
const netincomeRadio = document.getElementById('netincomeRadio');
const dividendspaidRadio = document.getElementById('dividendspaidRadio');

let retentionratio;
let netincome = v1;
let dividendspaid = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

retentionratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net income';
  variable2.textContent = 'Dividends paid';
  netincome = v1;
  dividendspaid = v2;
  result.textContent = '';
});

netincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Retention ratio';
  variable2.textContent = 'Dividends paid';
  retentionratio = v1;
  dividendspaid = v2;
  result.textContent = '';
});

dividendspaidRadio.addEventListener('click', function() {
  variable1.textContent = 'Retention ratio';
  variable2.textContent = 'Net income';
  retentionratio = v1;
  netincome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(retentionratioRadio.checked)
    result.textContent = `Retention ratio = ${computeretentionratio().toFixed(2)}`;

  else if(netincomeRadio.checked)
    result.textContent = `Net income = ${computenetincome().toFixed(2)}`;

  else if(dividendspaidRadio.checked)
    result.textContent = `Dividends paid = ${computedividendspaid().toFixed(2)}`;
})

// calculation

function computeretentionratio() {
  return ((Number(netincome.value) - Number(dividendspaid.value)) / Number(netincome.value)) * 100;
}

function computenetincome() {
  return Number(retentionratio.value) / Number(dividendspaid.value);
}

function computedividendspaid() {
  return Number(netincome.value) - ((Number(retentionratio.value) / 100) * Number(netincome.value));
}