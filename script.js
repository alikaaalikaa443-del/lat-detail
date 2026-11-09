function lihatDetail(){
    document.getElementById("namaProduk").innerText = nama;
    document.getElementById("hargaProduk").innerText = harga;
    document.getElementById("deskripsiProduk").innerText = deskripsi;
    document.getElementById("detailProduk").style.display = "block";
}
function TutupDetail(){
    document.getElementById("detail").style.display = "none"
}