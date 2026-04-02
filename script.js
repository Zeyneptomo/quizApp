const test = new Test(sorular);
const arayuz = new Arayuz();

let zamanlayici;
let kalanSure = 15;
let cevaplandiMi = false;

function testiBaslat() {
  test.sifirla();
  arayuz.testEkraniniGoster();
  soruyuYukle();
}

function soruyuYukle() {
  cevaplandiMi = false;
  kalanSure = 15;

  const aktifSoru = test.aktifSoruyuGetir();

  arayuz.soruSayaciniGuncelle(test.aktifSoruIndexi, test.sorular.length);
  arayuz.sureyiGuncelle(kalanSure);
  arayuz.soruyuGoster(aktifSoru);
  arayuz.secenekleriGoster(aktifSoru.secenekler);
  arayuz.ileriButonunuPasifYap();

  if (test.sonSoruMu()) {
    arayuz.bitirButonunuGoster();
  } else {
    arayuz.ileriButonunuGoster();
  }

  zamanlayiciyiBaslat();
  secenekOlaylariniEkle();
}

function secenekOlaylariniEkle() {
  const secenekButonlari = arayuz.secenekAlani.querySelectorAll(".secenek-butonu");

  secenekButonlari.forEach((buton) => {
    buton.addEventListener("click", function () {
      if (cevaplandiMi) return;

      cevaplandiMi = true;
      clearInterval(zamanlayici);

      const secilenCevap = buton.textContent;
      const cevapDogruMu = test.cevabiKontrolEt(secilenCevap);

      arayuz.secilenCevabiIsaretle(buton, cevapDogruMu);

      if (!cevapDogruMu) {
        arayuz.dogruCevabiIsaretle(test.aktifSoruyuGetir().dogruCevap);
      }

      arayuz.secenekleriPasifYap();
      arayuz.ileriButonunuAktifYap();
    });
  });
}

function zamanlayiciyiBaslat() {
  clearInterval(zamanlayici);

  zamanlayici = setInterval(() => {
    kalanSure--;
    arayuz.sureyiGuncelle(kalanSure);

    if (kalanSure <= 0) {
      clearInterval(zamanlayici);
      sureDolduIslemi();
    }
  }, 1000);
}

function sureDolduIslemi() {
  if (cevaplandiMi) return;

  cevaplandiMi = true;

  arayuz.dogruCevabiIsaretle(test.aktifSoruyuGetir().dogruCevap);
  arayuz.secenekleriPasifYap();

  setTimeout(() => {
    sonrakiAdimaGec();
  }, 1000);
}

function sonrakiAdimaGec() {
  if (test.sonSoruMu()) {
    testiBitir();
  } else {
    test.sonrakiSoruyaGec();
    soruyuYukle();
  }
}

function testiBitir() {
  clearInterval(zamanlayici);

  const sonSkor = test.skoruHesapla();
  arayuz.sonucEkraniniGoster();
  arayuz.sonuclariGoster(test.dogruSayisi, sonSkor);
}

arayuz.baslatButonu.addEventListener("click", function () {
  testiBaslat();
});

arayuz.ileriButonu.addEventListener("click", function () {
  sonrakiAdimaGec();
});

arayuz.bitirButonu.addEventListener("click", function () {
  testiBitir();
});

arayuz.yenidenBaslatButonu.addEventListener("click", function () {
  testiBaslat();
});