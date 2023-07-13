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
  ).innerHTML += `<button id="creaTabSel" class="tab" onclick="tabStandNum()">CREA UNA TABBELINA A PIACERE</button>`;
}

let numeriRandom = [];
function estraiNum() {
  let randnum = Math.floor(Math.random() * 76) + 1;
  if (numeriRandom.includes(randnum)) {
    return estraiNum();
  } else {
    numeriRandom.push(randnum);
    let doc = document.getElementsByClassName(`${randnum}`);
    doc[0].className += " selected";
  }
}
console.log(numeriRandom);

function tabStand() {
  let randNumber = [];
  for (let i = 0; i < 24; i++) {
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
}
function tabStandNum() {
  const numinput = prompt("Inserici il numero di tabelle che Vuoi:");
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
}
