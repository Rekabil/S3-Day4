function generaTombola() {
  for (let i = 1; i < 77; i++) {
    document.getElementById("Tombola").innerHTML += `<p class="${i}">${i}</p>`;
  }
  document.getElementById("genera").remove();
  document.getElementById(
    "estrai"
  ).innerHTML += `<button id="seleziona" onclick="estraiNum()">ESTRAI UNO NUMERO </button>`;
  document.getElementById(
    "estrai"
  ).innerHTML += `<br><br><br><button id="creaTab" class="tab" onclick="tabStand()">CREA UNA TABBELINA STANDARD</button>`;
  document.getElementById(
    "estrai"
  ).innerHTML += `<input type="number" id="inputTabNumber" placeholder="Scrivi il numero di tabelle">`;
  document.getElementById(
    "estrai"
  ).innerHTML += `<button id="creaTabSel" class="tab" onclick="tabStandNum()">CREA UNA TABBELINA A PIACERE</button>`;
}

let numeriRandom = [];
function estraiNum() {
  let randnum = Math.floor(Math.random() * 76) + 1;
  if (numeriRandom.includes(randnum)) {
    estraiNum();
  } else {
    numeriRandom.push(randnum);
    let matchNumbers = document.getElementsByClassName(`${randnum}`);
    for (let i = 0; i < matchNumbers.length; i++) {
      matchNumbers[i].className += " selected";
    }
  }
}
console.log(numeriRandom);

function tabStand() {
  let randNumber = [];
  for (let i = 0; i < 24; i++) {
    let randnum = Math.floor(Math.random() * 76) + 1;
    if (randNumber.includes(randnum)) {
      i--;
      continue;
    } else {
      randNumber.push(randnum);
      document.getElementById("tabella").innerHTML += `<p class="${randnum}">${randnum}</p>`;
    }
  }
  document.getElementById("creaTab").remove();
  document.getElementById("creaTabSel").remove();
}
function tabStandNum() {
  const numinput = document.getElementById("inputTabNumber").value;

  if (numinput < 1) {
    window.prompt("Invalid Number, try again");
  } else {
    let randNumber = [];
    for (let i = 0; i < numinput; i++) {
      numbers();
      function numbers() {
        let randnum = Math.floor(Math.random() * 76) + 1;
        if (randNumber.includes(randnum)) {
          return numbers();
        } else {
          randNumber.push(randnum);
          document.getElementById("tabella").innerHTML += `<p class="${randnum}">${randnum}</p>`;
        }
      }
    }
    document.getElementById("creaTab").remove();
    document.getElementById("creaTabSel").remove();
    document.getElementById("inputTabNumber").remove();
  }
}
