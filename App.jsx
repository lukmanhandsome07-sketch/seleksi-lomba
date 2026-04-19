import { useState } from "react";

function App() {
  // 📊 Data peserta
  const calonPeserta = [
    { nama: "Tariq", nilaiUjian: 85 },
    { nama: "Ziyad", nilaiUjian: 60 },
    { nama: "Aisyah", nilaiUjian: 92 },
    { nama: "Fulan", nilaiUjian: 70 },
    { nama: "Khadijah", nilaiUjian: 88 },
  ];

  // 🎯 Filter: hanya yang nilai >= 80
  const pesertaLolos = calonPeserta.filter(
    (peserta) => peserta.nilaiUjian >= 80
  );

  // 🧾 Ambil nama saja
  const daftarNamaLolos = pesertaLolos.map(
    (peserta) => peserta.nama
  );

  // 🔍 Debug (cek di console)
  console.log("🎉 Daftar Peserta Lolos:", daftarNamaLolos);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏆 Asisten Seleksi Lomba IT</h1>

      <h2>📋 Semua Peserta:</h2>
      <ul>
        {calonPeserta.map((peserta, index) => (
          <li key={index}>
            {peserta.nama} - Nilai: {peserta.nilaiUjian}
          </li>
        ))}
      </ul>

      <h2>✅ Peserta Lolos (≥ 80):</h2>
      <ul>
        {pesertaLolos.map((peserta, index) => (
          <li key={index}>
            🎉 {peserta.nama}
          </li>
        ))}
      </ul>

      <h2>🏅 Nama Saja:</h2>
      <p>{daftarNamaLolos.join(", ")}</p>
    </div>
  );
}

export default App;
