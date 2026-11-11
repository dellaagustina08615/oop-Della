class BankAccount {
  #saldo;
  constructor(namaPemilik, saldoAwal) {
    this.namaPemilik = namaPemilik;
    this.#saldo = saldoAwal;
  }
  deposit(jumlah) {
    if (jumlah > 0) { this.#saldo += jumlah; return true; }
    return false;
  }
  withdraw(jumlah) {
    if (jumlah > 0 && jumlah <= this.#saldo) { this.#saldo -= jumlah; return true; }
    return false;
  }
  getSaldo() { return this.#saldo; }
}

let akun = null;

function buatAkun() {
  const nama = document.getElementById("inputNama").value;
  const saldoAwal = Number(document.getElementById("inputSaldo").value);
  if (!nama || saldoAwal < 0) {
    document.getElementById("pesanBuat").textContent = "Isi nama dan saldo awal dengan benar!";
    return;
  }
  akun = new BankAccount(nama, saldoAwal);
  document.getElementById("menuTransaksi").style.display = "block";
  document.getElementById("pesanBuat").textContent = "";
  tampilkan();
}
function tampilkan() {
  document.getElementById("nama").textContent = akun.namaPemilik;
  document.getElementById("saldo").textContent = akun.getSaldo().toLocaleString("id-ID");
}
function setor() {
  const j = Number(document.getElementById("jumlah").value);
  if (!akun.deposit(j)) document.getElementById("pesan").textContent = "Jumlah harus lebih dari 0!";
  else document.getElementById("pesan").textContent = "";
  tampilkan();
}
function tarik() {
  const j = Number(document.getElementById("jumlah").value);
  if (!akun.withdraw(j)) document.getElementById("pesan").textContent = "Saldo tidak cukup / jumlah tidak valid!";
  else document.getElementById("pesan").textContent = "";
  tampilkan();
}
function cekSaldo() {
  tampilkan();
  alert("Saldo kamu: Rp " + akun.getSaldo().toLocaleString("id-ID"));
}