let form = document.getElementById("application-form");
console.log(form);
let fields = document.querySelectorAll(".select");
form.addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();
  const data = getDataValue();
  const tech = getTechData();
  const body = { ...data, tech };
  console.log(body);
}

function getDataValue() {
  var data = {};
  fields.forEach(item => {
    if (item.name != "english") {
      data[item.name] = item.value;
    } else if (item.checked) {
      data[item.name] = item.value;
    }
  });
  return data;
}

function getTechData() {
  const techArr = [];
  const data = document.querySelectorAll(".tech");
  data.forEach(tr => {
    const obj = {};
    tr.childNodes.forEach(div => {
      div.childNodes.forEach(el => {
        if (el.name) {
          obj[el.name] = el.value;
        }
      });
    });
    if (Object.keys(obj).length > 0) {
      techArr.push(obj);
    }
  });
  return techArr;
}

function addFilds() {
  let table = document.getElementById("table");
  let divTr = document.createElement("div");

  divTr.className = "tr row tech";
  divTr.innerHTML = `<div class="td col-md-4">
                                  <input  type="text" name="languagesTools">
                                </div>
                              <div class="td col-md-4">
                                    <input  type="number" name="experienceYears">
                                 </div>
                                <div class="td col-md-4">
                                    <input  type="text" name="lastUsed">
                                  </div>`;
  table.appendChild(divTr);
}

let form = document.getElementById("application-form");
console.log(form);
let fields = document.querySelectorAll(".select");
form.addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();
  const data = getDataValue();
  const tech = getTechData();
  const body = { ...data, tech };
  console.log(body);
}

function getDataValue() {
  var data = {};
  fields.forEach(item => {
    if (item.name != "english") {
      data[item.name] = item.value;
    } else if (item.checked) {
      data[item.name] = item.value;
    }
  });
  return data;
}

function getTechData() {
  const techArr = [];
  const data = document.querySelectorAll(".tech");
  data.forEach(tr => {
    const obj = {};
    tr.childNodes.forEach(div => {
      div.childNodes.forEach(el => {
        if (el.name) {
          obj[el.name] = el.value;
        }
      });
    });
    if (Object.keys(obj).length > 0) {
      techArr.push(obj);
    }
  });
  return techArr;
}

function addFilds() {
  let table = document.getElementById("table");
  let divTr = document.createElement("div");

  divTr.className = "tr row tech";
  divTr.innerHTML = `<div class="td col-md-4">
                                  <input  type="text" name="languagesTools">
                                </div>
                              <div class="td col-md-4">
                                    <input  type="number" name="experienceYears">
                                 </div>
                                <div class="td col-md-4">
                                    <input  type="text" name="lastUsed">
                                  </div>`;
  table.appendChild(divTr);
}
