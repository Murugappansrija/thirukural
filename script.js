const url = "https://api-thirukkural.vercel.app/api?num=";

let num = 1;


const kurals = document.getElementById("kurals");
const subheading = document.getElementById("2ndheading");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");


async function input(id = 1, cb = () => {}) {
  const response = await fetch(url + id);
  const data = await response.json();

  if (data) {
    cb(data);
  }
}

// CALLER FUNCTION
function fetchKural(id) {
  if (id) {
    input(id, nextkural);
  } else {
    input(num, nextkural);
  }
}

fetchKural();


function nextkural(data = {}) {
  kurals.innerText = data["sect_tam"] || "NA";
  subheading.innerHTML = data["number"] || "NA";
  line1.innerText = data["line1"] || "NA";
  line2.innerText = data["line2"] || "NA";
  num++;
}