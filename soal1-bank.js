class BankAccount {
  constructor(nama, saldoAwal) {
    this.nama = nama;
    this.saldo = saldoAwal;
  }

  setor(jumlah) {
    this.saldo += jumlah;
    console.log(`${this.nama} setor Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
  }

  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak cukup!");
    } else {
      this.saldo -= jumlah;
      console.log(`${this.nama} tarik Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
    }
  }

  cekSaldo() {
    console.log(`Saldo ${this.nama}: Rp${this.saldo}`);
  }
}

// Coba pakai
const akunDella = new BankAccount("Della", 100000);
akunDella.cekSaldo();
akunDella.setor(50000);
akunDella.tarik(30000);
akunDella.tarik(200000);