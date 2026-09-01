# Website Berkas Keuangan - Mobile

Prototype mobile-first yang mengikuti struktur spreadsheet rekap kegiatan dan anggaran.

Fitur:
- Menu "Berkas ke Keuangan" dan "Berkas dari Keuangan"
- Dropdown Jenis Kegiatan
- Dropdown Status Proses
- Pencarian nama kegiatan/nomor surat/pembuat
- Ringkasan total, proses, dan selesai
- Kartu berkas + timeline proses
- Responsif untuk layar HP

Integrasi Google Sheets:
1. Jadikan spreadsheet sebagai Google Sheets.
2. Buat Google Apps Script Web App yang mengembalikan data JSON.
3. Ganti konstanta DATA pada index.html dengan data dari endpoint tersebut.
4. Struktur kolom yang tersedia dari spreadsheet:
   Nama Kegiatan, Jenis Kegiatan, Nomor Surat Tugas, Pembuat Laporan,
   Status, Tanggal Kegiatan, Tanggal Penyerahan Ke Keuangan, Penerima di Keuangan,
   Jumlah Anggaran, Tanggal Pencairan, Keterangan.

Catatan:
Prototype memakai data demo agar dapat dibuka langsung tanpa server.
