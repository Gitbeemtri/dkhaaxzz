/* Mengubah data di data.js menjadi isi halaman. Tidak perlu diedit. */
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const drop = (empty, id) => { if (empty) $(id).closest("section").remove(); };

document.title = DATA.nama + " – Portofolio";

/* Hero */
const kata = DATA.nama.trim().split(/\s+/);
const akhir = kata.length > 1 ? kata.pop() : "";
$("nama").innerHTML = esc(kata.join(" ")) + (akhir ? `<br><em>${esc(akhir)}</em>` : "");
$("profesi").textContent = DATA.profesi;
$("intro").textContent = DATA.intro;
DATA.status ? ($("status").textContent = DATA.status) : $("status").remove();

const inisial = DATA.nama.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
$("foto").innerHTML = DATA.foto
  ? `<img src="${esc(DATA.foto)}" alt="Foto ${esc(DATA.nama)}" width="800" decoding="async" fetchpriority="high">`
  : `<div class="slot"><b aria-hidden="true">${esc(inisial)}</b><small>Taruh foto diri di sini</small></div>`;

/* Pita keahlian */
const chips = DATA.skill.map(s => `<span>${esc(s)}</span>`).join("");
$("skill").innerHTML = chips + chips;
if (!DATA.skill.length) document.querySelector(".band").remove();

/* Tentang */
$("lead").textContent = DATA.tentangLead;
$("tentangTeks").innerHTML = DATA.tentang.map(t => `<p>${esc(t)}</p>`).join("");
$("stats").innerHTML = DATA.stats.map(s => `<div class="stat"><b>${esc(s.angka)}</b>${esc(s.label)}</div>`).join("");
if (!DATA.stats.length) $("stats").remove();

/* Pengalaman */
$("rows").innerHTML = DATA.pengalaman.map(p => `
  <li class="row"><span class="when">${esc(p.waktu)}</span>
    <div><h3>${esc(p.judul)}</h3><div class="where">${esc(p.tempat)}</div><p>${esc(p.deskripsi)}</p></div></li>`).join("");
drop(!DATA.pengalaman.length, "rows");

/* Proyek */
if (DATA.proyek.length === 1) $("proyekGrid").classList.add("single");
$("proyekGrid").innerHTML = DATA.proyek.map((p, i) => `
  <article class="proj">
    <div class="shot">${p.gambar
      ? `<img src="${esc(p.gambar)}" alt="Tampilan ${esc(p.judul)}" loading="lazy" decoding="async">`
      : `<div class="slot"><b aria-hidden="true">${String(i + 1).padStart(2, "0")}</b><small>Taruh foto proyek di sini</small></div>`}</div>
    <div>
      <div class="meta">${[p.kategori, p.tahun].filter(Boolean).map(x => `<span>${esc(x)}</span>`).join("")}</div>
      <h3>${esc(p.judul)}</h3>
      <p>${esc(p.deskripsi)}</p>
      <div class="tags">${(p.teknologi || "").split(",").filter(t => t.trim()).map(t => `<span>${esc(t.trim())}</span>`).join("")}</div>
      ${p.link ? `<a class="go" href="${esc(p.link)}" target="_blank" rel="noopener">Lihat proyek →</a>` : ""}
    </div>
  </article>`).join("");
drop(!DATA.proyek.length, "proyekGrid");

/* Sertifikat */
const daftarSertifikat = DATA.sertifikat || [];
$("certs").innerHTML = daftarSertifikat.map(c => {
  const rincian = [["Periode", c.periode], ["Durasi", c.durasi], ["Hasil", c.hasil], ["Ditandatangani", c.penandatangan]]
    .filter(r => r[1]).map(r => `<div><dt>${r[0]}</dt><dd>${esc(r[1])}</dd></div>`).join("");
  const gambar = c.gambar
    ? `<a class="cert-img" href="${esc(c.gambar)}" target="_blank" rel="noopener" aria-label="Buka ${esc(c.judul)} ukuran penuh"><img src="${esc(c.gambar)}" alt="${esc(c.judul)}" loading="lazy" decoding="async"></a>`
    : `<div class="cert-img empty"><div class="slot"><b aria-hidden="true">✦</b><small>Taruh gambar sertifikat di sini</small></div></div>`;
  return `
  <article class="cert">
    ${gambar}
    <div>
      <h3>${esc(c.judul)}</h3>
      <p class="by">${esc(c.penerbit)}</p>
      <dl>${rincian}</dl>
      <div class="btns">
        ${c.gambar ? `<a class="btn" href="${esc(c.gambar)}" target="_blank" rel="noopener">Lihat sertifikat</a>` : ""}
        ${c.pdf ? `<a class="btn ghost" href="${esc(c.pdf)}" download>Unduh PDF</a>` : ""}
      </div>
    </div>
  </article>`;
}).join("");
drop(!daftarSertifikat.length, "certs");

/* Kontak */
const jd = DATA.kontakJudul.trim().split(" ");
const jdAkhir = jd.length > 1 ? jd.pop() : "";
$("kontakJudul").innerHTML = esc(jd.join(" ")) + (jdAkhir ? ` <em>${esc(jdAkhir)}</em>` : "");
$("kontakTeks").textContent = DATA.kontakTeks;
$("kontakBtns").innerHTML = DATA.kontak.map(k =>
  `<a class="btn ${k.utama ? "" : "ghost"}" href="${esc(k.href)}" target="_blank" rel="noopener">${esc(k.label)}</a>`).join("");
$("footer").textContent = "© " + new Date().getFullYear() + " " + DATA.nama;

/* Menu: hanya bagian yang masih ada */
const label = { tentang: "Tentang", pengalaman: "Pengalaman", proyek: "Proyek", sertifikat: "Sertifikat", kontak: "Kontak" };
$("menu").innerHTML = Object.keys(label).filter(id => $(id)).map(id => `<li><a href="#${id}">${label[id]}</a></li>`).join("");
