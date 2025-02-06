let data = [
  {
    id: 1,
    namaCustomer: "customer 1",
    namaCapster: "capster 2",
    paket: "Haircut",
    tanggal: "2025-02-05",
    jam: "11:00",
  },
];
let paket = {
  Haircut: 50000,
  "Face Shave": 60000,
  "Cut and Shave": 100000,
  "Beard Trim": 40000,
  "Head Shave": 60000,
  "Line Up": 40000,
  Hairwash: 30000,
};

function hitungTotal() {
  let total = 0;
  for (let elemen of data) {
    total += paket[elemen.paket];
  }
  return total;
}
function renderData() {
  let list = document.getElementById("list");
  let tampilan = "";
  for (let i = 0; i < data.length; i++) {
    let elemen = data[i];
    let harga = paket[elemen.paket];

    tampilan += `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${elemen.namaCustomer}</td>
        <td>${elemen.namaCapster}</td>
        <td>${elemen.paket}</td>
        <td>${elemen.tanggal}</td>
        <td>${elemen.jam}</td>
        <td>${harga}</td>
        <td>
          <div class="">
            <button onclick="edit(${elemen.id})">Edit</button>
            <button onclick="del(${elemen.id})">Delete</button>
          </div>
        </td>
      </tr>`;
  }

  list.innerHTML = tampilan;

  // let total = document.getElementById("total");
  // let hasilTotal = hitungTotal();
  // total.innerText = `${hasilTotal}`;
}
function add() {
  //find last id
  let lastId = data[data.length - 1].id;

  let namaCustomer = document.getElementById("namaCustomer");
  let namaCapster = document.getElementById("namaCapster");
  let paket = document.getElementById("paket");
  let tanggal = document.getElementById("tanggal");
  let jam = document.getElementById("jam");

  data.push({
    id: lastId + 1,
    namaCustomer: namaCustomer.value,
    namaCapster: namaCapster.value,
    paket: paket.value,
    tanggal: tanggal.value,
    jam: jam.value,
  });
  renderData();
  namaCustomer.value = "";
  namaCapster.value = "";
  paket.value = "";
  tanggal.value = "";
  jam.value = "";
}

function del(id) {
  data = data.filter((elemen) => {
    return elemen.id !== id;
  });
  renderData();
}

function edit(id) {
  let namaCustomer = document.getElementById("namaCustomer");
  let namaCapster = document.getElementById("namaCapster");
  let paket = document.getElementById("paket");
  let tanggal = document.getElementById("tanggal");
  let jam = document.getElementById("jam");

  // find element
  let element = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      element = i;
      break;
    }
  }

  // appear di isi
  namaCustomer.value = data[element].namaCustomer;
  namaCapster.value = data[element].namaCapster;
  paket.value = data[element].paket;
  tanggal.value = data[element].tanggal;
  jam.value = data[element].jam;

  //tuker button add jadi update
  let btnUpdateAdd = document.getElementById("updateAdd");
  btnUpdateAdd.innerText = "Update";
  btnUpdateAdd.onclick = () => {
    update(element);
  };
}
function update(id) {
  let namaCustomer = document.getElementById("namaCustomer");
  let namaCapster = document.getElementById("namaCapster");
  let paket = document.getElementById("paket");
  let tanggal = document.getElementById("tanggal");
  let jam = document.getElementById("jam");

  data[id].namaCustomer = namaCustomer.value;
  data[id].namaCapster = namaCapster.value;
  data[id].paket = paket.value;
  data[id].tanggal = tanggal.value;
  data[id].jam = jam.value;

  namaCustomer.value = "";
  namaCapster.value = "";
  paket.value = "";
  tanggal.value = "";
  jam.value = "";

  let btnUpdateAdd = document.getElementById("updateAdd");
  btnUpdateAdd.innerText = "Add";
  btnUpdateAdd.onclick = add;

  renderData();
}

renderData();
