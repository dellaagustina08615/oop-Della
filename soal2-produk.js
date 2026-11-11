class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  getInfo() {
    return `Produk: ${this.nama}, Harga: ${this.harga}`;
  }
}

class ProdukElektronik extends Produk {
  constructor(nama, harga, garansiTahun) {
    super(nama, harga);
    this.garansiTahun = garansiTahun;
  }

  getInfo() {
    return `Produk: ${this.nama}, Harga: ${this.harga}, Garansi: ${this.garansiTahun} tahun`;
  }
}

const baju = new Produk("Baju", "Rp150rb");
console.log(baju.getInfo());

const laptop = new ProdukElektronik("Laptop", "Rp10jt", 2);
console.log(laptop.getInfo());