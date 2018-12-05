let form = document.getElementById("application-form");
console.log(form);
let fields = document.querySelectorAll(".select");
form.addEventListener("submit", getData);

function getData(e) {
  e.preventDefault();
  const data = getDataValue();
  const tech = getTechData();
  const body = { ...data,
    tech
  };
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

function addFields() {
  let table = document.getElementById("table");
  let divTr = document.createElement("div");

  divTr.className = "tr row tech";
  divTr.innerHTML = `<div class="td col-md-4">
  <input type="text" name="languagesTools" class="text-dark form-control">
</div>
<div class="td col-md-4">
  <input type="text" name="experienceYears" list="defaultTels" class="form-control">
  <datalist id="defaultTels">
      <option value="1">
      <option value="2">
      <option value="3">
      <option value="4">
  </datalist>
</div>
<div class="td col-md-4">
  <input type="text" name="lastUsed" list="defaultYers" class="form-control">
  <datalist id="defaultYers">
      <option value="2015">
      <option value="2016">
      <option value="2017">
      <option value="2018">
  </datalist>

</div>`;
  table.appendChild(divTr);
}