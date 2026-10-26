/* =====================================================
   ISI DATA DIRI DI SINI SAJA. File lain tidak perlu diubah.

   FOTO DIRI   -> "foto"   (taruh file di folder images/)
   FOTO PROYEK -> "gambar" di tiap proyek (folder images/)

   Daftar yang dikosongkan ([]) otomatis hilang dari halaman.
   Untuk menambah proyek, salin satu blok { ... } lalu tempel
   di bawahnya (jangan lupa koma).
   ===================================================== */
const DATA = {
  nama: "Favian Mahardika Rusyanto",
  profesi: "Siswa SMK Bina Mandiri Multimedia",
  intro: "Satu atau dua kalimat tentang bidang yang kamu tekuni dan apa yang sedang kamu cari, misalnya magang, kerja, atau kuliah.",
  status: "Terbuka untuk kerja",   // kosongkan jika tidak mau ditampilkan

  foto: "images/foto.jpg",

  tentangLead: "Satu kalimat besar yang merangkum siapa kamu dan apa yang kamu perjuangkan.",
  tentang: [
    "Paragraf pertama: perkenalkan diri, sekolah, jurusan, dan apa yang kamu kerjakan.",
    "Paragraf kedua: ceritakan pengalaman PKL, minat, dan tujuan kamu ke depan."
  ],

  // Angka ringkas (opsional). Kosongkan dengan stats: []
  stats: [
    { angka: "6 bulan",     label: "Durasi PKL" },
    { angka: "Sangat Baik", label: "Hasil PKL" },
    { angka: "1",           label: "Proyek" }
  ],

  skill: ["Keahlian 1", "Keahlian 2", "Keahlian 3", "Keahlian 4", "Keahlian 5", "Keahlian 6"],

  // Pengalaman PKL, organisasi, dan pendidikan. Urutkan dari yang terbaru.
  pengalaman: [
    { waktu: "Jan – Jul 2026", judul: "Praktik Kerja Lapangan (PKL)", tempat: "Tree Logika Dinamika (PC24 Group Indonesia)", deskripsi: "PKL selama 6 bulan dengan hasil Sangat Baik. Tambahkan tugas yang kamu kerjakan dan hasilnya, pakai kata kerja: membuat, membantu, memperbaiki." },
    { waktu: "Tahun – sekarang", judul: "Siswa SMK", tempat: "SMK Bina Mandiri Multimedia", deskripsi: "Tulis jurusan, prestasi, atau organisasi yang relevan." }
  ],

  // gambar: nama file di folder images/. link: alamat proyek (boleh kosong).
  // tahun boleh dikosongkan. teknologi: pisahkan dengan koma.
  proyek: [
    {
      judul: "Aplikasi Layanan Situsari",
      kategori: "Web App",
      tahun: "",
      deskripsi: "Aplikasi web layanan desa dengan peta wilayah per RW, ringkasan data kependudukan, dan formulir kunjungan warga untuk layanan seperti pembuatan KTP. Sesuaikan penjelasan ini dengan peran kamu.",
      teknologi: "Teknologi 1, Teknologi 2",
      gambar: "images/proyek-situsari.webp",
      link: ""
    }
  ],

  // Sertifikat PKL, lomba, atau pelatihan. Kosongkan dengan sertifikat: []
  // gambar: file di folder images/, pdf: file di folder files/ (boleh dikosongkan)
  sertifikat: [
    {
      judul: "Sertifikat Praktik Kerja Lapangan",
      penerbit: "Tree Logika Dinamika (PC24 Group Indonesia)",
      periode: "20 Januari 2026 – 20 Juli 2026",
      durasi: "6 bulan",
      hasil: "Sangat Baik",
      penandatangan: "Ritzky Ardya Naztaze, Direktur Utama",
      gambar: "images/sertifikat-pkl.webp",
      pdf: "files/sertifikat-pkl.pdf"
    }
  ],

  kontakJudul: "Yuk, kerja bareng.",
  kontakTeks: "Untuk peluang magang, kerja, atau kolaborasi, silakan hubungi saya melalui salah satu kanal berikut.",
  // Hapus baris yang tidak dipakai. "utama: true" = tombol putih.
  kontak: [
    { label: "Kirim email", href: "mailto:email@kamu.com", utama: true },
    { label: "Instagram", href: "https://instagram.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" }
  ]
};
