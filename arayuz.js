class Arayuz {
  constructor() {
    this.baslangicEkrani = document.getElementById("baslangicEkrani");
    this.testEkrani = document.getElementById("testEkrani");
    this.sonucEkrani = document.getElementById("sonucEkrani");

    this.baslatButonu = document.getElementById("baslatButonu");
    this.ileriButonu = document.getElementById("ileriButonu");
    this.bitirButonu = document.getElementById("bitirButonu");
    this.yenidenBaslatButonu = document.getElementById("yenidenBaslatButonu");

    this.soruSayaci = document.getElementById("soruSayaci");
    this.sureAlani = document.getElementById("sureAlani");
    this.soruMetni = document.getElementById("soruMetni");
    this.secenekAlani = document.getElementById("secenekAlani");

    this.dogruSayisiAlani = document.getElementById("dogruSayisiAlani");
    this.skorAlani = document.getElementById("skorAlani");
  }

  baslangicEkraniniGoster() {
    this.baslangicEkrani.classList.remove("d-none");
    this.testEkrani.classList.add("d-none");
    this.sonucEkrani.classList.add("d-none");
  }

  testEkraniniGoster() {
    this.baslangicEkrani.classList.add("d-none");
    this.testEkrani.classList.remove("d-none");
    this.sonucEkrani.classList.add("d-none");
  }

  sonucEkraniniGoster() {
    this.baslangicEkrani.classList.add("d-none");
    this.testEkrani.classList.add("d-none");
    this.sonucEkrani.classList.remove("d-none");
  }

  soruSayaciniGuncelle(aktifIndex, toplamSoruSayisi) {
    this.soruSayaci.textContent = `Soru ${aktifIndex + 1} / ${toplamSoruSayisi}`;
  }

  sureyiGuncelle(sure) {
    this.sureAlani.textContent = sure;
  }

  soruyuGoster(soruNesnesi) {
    this.soruMetni.textContent = soruNesnesi.soruMetni;
  }

  secenekleriGoster(secenekler) {
    this.secenekAlani.innerHTML = "";

    secenekler.forEach((secenekMetni) => {
      const buton = document.createElement("button");
      buton.className = "btn btn-outline-dark text-start secenek-butonu";
      buton.textContent = secenekMetni;
      this.secenekAlani.appendChild(buton);
    });
  }

  secenekleriPasifYap() {
    const secenekButonlari = this.secenekAlani.querySelectorAll(".secenek-butonu");

    secenekButonlari.forEach((buton) => {
      buton.disabled = true;
      buton.classList.add("pasif");
    });
  }

  ileriButonunuAktifYap() {
    this.ileriButonu.disabled = false;
  }

  ileriButonunuPasifYap() {
    this.ileriButonu.disabled = true;
  }

  ileriButonunuGoster() {
    this.ileriButonu.classList.remove("d-none");
    this.bitirButonu.classList.add("d-none");
  }

  bitirButonunuGoster() {
    this.ileriButonu.classList.add("d-none");
    this.bitirButonu.classList.remove("d-none");
  }

  dogruCevabiIsaretle(dogruCevap) {
    const secenekButonlari = this.secenekAlani.querySelectorAll(".secenek-butonu");

    secenekButonlari.forEach((buton) => {
      if (buton.textContent === dogruCevap) {
        buton.classList.remove("btn-outline-dark");
        buton.classList.add("dogru");
      }
    });
  }

  secilenCevabiIsaretle(buton, cevapDogruMu) {
    buton.classList.remove("btn-outline-dark");

    if (cevapDogruMu) {
      buton.classList.add("dogru");
    } else {
      buton.classList.add("yanlis");
    }
  }

  sonuclariGoster(dogruSayisi, skor) {
    this.dogruSayisiAlani.textContent = `Doğru Sayısı: ${dogruSayisi}`;
    this.skorAlani.textContent = `Skor: ${skor}`;
  }
}