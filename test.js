class Test {
  constructor(sorular) {
    this.sorular = sorular;
    this.aktifSoruIndexi = 0;
    this.dogruSayisi = 0;
    this.skor = 0;
  }

  aktifSoruyuGetir() {
    return this.sorular[this.aktifSoruIndexi];
  }

  cevabiKontrolEt(secilenCevap) {
    const aktifSoru = this.aktifSoruyuGetir();

    if (secilenCevap === aktifSoru.dogruCevap) {
      this.dogruSayisi++;
      return true;
    }

    return false;
  }

  sonrakiSoruyaGec() {
    this.aktifSoruIndexi++;
  }

  sonSoruMu() {
    return this.aktifSoruIndexi === this.sorular.length - 1;
  }

  skoruHesapla() {
    this.skor = Math.round((this.dogruSayisi / this.sorular.length) * 100);
    return this.skor;
  }

  sifirla() {
    this.aktifSoruIndexi = 0;
    this.dogruSayisi = 0;
    this.skor = 0;
  }
}