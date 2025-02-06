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
  Haircut: 5000,
  "Face Shave": 60000,
  "Cut and Shave": 100000,
  "Beard Trim": 40000,
  "Head Shave": 60000,
  "Line Up": 40000,
  Hairwash: 30000,
};

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
        <td>Paket special</td>
        <td>${elemen.tanggal}</td>
        <td>${elemen.jam}</td>
        <td>${harga}</td>
        <td>
          <div class="">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </td>
      </tr>`;
  }

  list.innerHTML = tampilan;
}

// function edit(id) {
//   let isi = document.getElementById("isi");
//   // find element
//   let element = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id === id) {
//       element = i;
//       break;
//     }
//   }

//   // appear di isi
//   isi.value = data[element].isi;

//   //tuker button add jadi update
//   let btnUpdateAdd = document.getElementById("updateAdd");
//   btnUpdateAdd.innerText = "Update";
//   btnUpdateAdd.onclick = () => {
//     update(element);
//   };
// }
// function update(id) {
//   let isi = document.getElementById("isi");
//   data[id].isi = isi.value;
//   isi.value = "";

//   let btnUpdateAdd = document.getElementById("updateAdd");
//   btnUpdateAdd.innerText = "Add";
//   btnUpdateAdd.onclick = add;

//   renderData();
// }

// function del(id) {
//   data = data.filter((elemen) => {
//     return elemen.id !== id;
//   });
//   renderData();
// }

function add() {
  //find last id
  let lastId = data[data.length - 1].id;

  // data.push({ id: lastId + 1, isi: isi.value });
  // renderData();
  // isi.value = "";

  let jam = document.getElementById("jam");
  console.log(jam.value);
  console.log(typeof jam.value);
}

renderData();
