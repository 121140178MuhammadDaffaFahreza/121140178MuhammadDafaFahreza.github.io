var kontenTable = document.querySelector('.konten-table')

  async function fetchProducts() {
    let motor = [];
    const storedProducts = localStorage.getItem('motor'); 

    if (storedProducts) {
      motor = JSON.parse(storedProducts);
  } else {
        const motor = [
          {
            merek: "Yamaha",
            model: "R1",
            tipe: "Sportbike",
            kapasitasMesin: 1000,
            tipeMesin: "Inline-4",
            dayaMesin: 200,
            torsiMesin: 112,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2050,
            lebar: 690,
            tinggi: 1150,
            berat: 199,
          },
          {
            merek: "Honda",
            model: "CB500",
            tipe: "Standard",
            kapasitasMesin: 471,
            tipeMesin: "Twin",
            dayaMesin: 47,
            torsiMesin: 43,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2100,
            lebar: 800,
            tinggi: 1100,
            berat: 190,
          },
          {
            merek: "Kawasaki",
            model: "Ninja ZX-10R",
            tipe: "Sportbike",
            kapasitasMesin: 998,
            tipeMesin: "Inline-4",
            dayaMesin: 203,
            torsiMesin: 114,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2070,
            lebar: 730,
            tinggi: 1150,
            berat: 206,
          },
          {
            merek: "Suzuki",
            model: "GSX-R1000",
            tipe: "Sportbike",
            kapasitasMesin: 999,
            tipeMesin: "Inline-4",
            dayaMesin: 197,
            torsiMesin: 117,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2045,
            lebar: 705,
            tinggi: 1150,
            berat: 202,
          },
          {
            merek: "Ducati",
            model: "Panigale V4",
            tipe: "Sportbike",
            kapasitasMesin: 1103,
            tipeMesin: "V4",
            dayaMesin: 214,
            torsiMesin: 124,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2070,
            lebar: 810,
            tinggi: 1105,
            berat: 198,
          },
          {
            merek: "Harley-Davidson",
            model: "Street Glide",
            tipe: "Cruiser",
            kapasitasMesin: 1868,
            tipeMesin: "V-twin",
            dayaMesin: 93,
            torsiMesin: 163,
            pendinginanMesin: "Udara",
            bahanBakar: "Bensin",
            panjang: 2450,
            lebar: 955,
            tinggi: 1340,
            berat: 377,
          },
          {
            merek: "BMW",
            model: "S1000RR",
            tipe: "Sportbike",
            kapasitasMesin: 999,
            tipeMesin: "Inline-4",
            dayaMesin: 205,
            torsiMesin: 113,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2074,
            lebar: 848,
            tinggi: 1152,
            berat: 193,
          },
          {
            merek: "Triumph",
            model: "Bonneville T100",
            tipe: "Standard",
            kapasitasMesin: 900,
            tipeMesin: "Parallel Twin",
            dayaMesin: 55,
            torsiMesin: 80,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2157,
            lebar: 785,
            tinggi: 1100,
            berat: 213,
          },
          {
            merek: "KTM",
            model: "Duke 390",
            tipe: "Standard",
            kapasitasMesin: 373,
            tipeMesin: "Single-cylinder",
            dayaMesin: 43,
            torsiMesin: 37,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2002,
            lebar: 838,
            tinggi: 1274,
            berat: 167,
          },
          {
            merek: "Aprilia",
            model: "RSV4",
            tipe: "Sportbike",
            kapasitasMesin: 1077,
            tipeMesin: "V4",
            dayaMesin: 217,
            torsiMesin: 122,
            pendinginanMesin: "Cairan",
            bahanBakar: "Bensin",
            panjang: 2054,
            lebar: 735,
            tinggi: 1120,
            berat: 183,
          },
        ];
          localStorage.setItem('motor', JSON.stringify(motor));
  }
  return motor;
}


async function PopulateTable() {
    try {
        const products= await fetchProducts();
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headerRow = document.createElement('tr');
        for (const key in products[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);

        products.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        kontenTable.innerHTML = '';
        kontenTable.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
    }
}
PopulateTable();