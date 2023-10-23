const form = document.getElementById('Form')
        function postData() {
            const merek = document.getElementById('merek').value;
            const model = document.getElementById('model').value;
            const tipe = document.getElementById('tipe').value;
            const kapasitasMesin = document.getElementById('kapasitasMesin').value;
            const tipeMesin = document.getElementById('tipeMesin').value;
            const dayaMesin = document.getElementById('dayaMesin').value;
            const torsiMesin = document.getElementById('torsiMesin').value;
            const pendinginanMesin = document.getElementById('pendinginanMesin').value;
            const bahanBakar = document.getElementById('bahanBakar').value;
            const panjang = document.getElementById('panjang').value;
            const lebar = document.getElementById('lebar').value;
            const tinggi = document.getElementById('tinggi').value;
            const berat= document.getElementById('berat').value;

            const motor = {
                merek,
                model,
                tipe,
                kapasitasMesin,
                tipeMesin,
                dayaMesin,
                torsiMesin,
                pendinginanMesin,
                bahanBakar,
                panjang,
                lebar,
                tinggi,
                berat

            };

            let datamo = JSON.parse(localStorage.getItem('motor')) || [];
            datamo.push(motor);
            console.log(datamo);
            localStorage.setItem('motor', JSON.stringify(datamo));
            form.reset();
        };

        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.addEventListener('click', postData);