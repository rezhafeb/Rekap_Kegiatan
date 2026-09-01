const SPREADSHEET_ID="GANTI_DENGAN_ID_SPREADSHEET";
const SHEET_NAME="DATA_KEGIATAN";
const HEADERS=["ID","Nama Kegiatan","Jenis Kegiatan","Nomor Surat Tugas","Pembuat Laporan","Status","Tanggal Kegiatan","Tanggal Penyerahan Ke Keuangan","Penerima di Keuangan","Jumlah Anggaran","Tanggal Pencairan","Keterangan","Timestamp"];

function doGet(){const sh=getSheet_();const v=sh.getDataRange().getDisplayValues();if(v.length<2)return out_({data:[]});const h=v[0].map(x=>String(x).trim().toLowerCase());const data=v.slice(1).filter(r=>r.join("").trim()).map(r=>{let o={};h.forEach((k,i)=>o[k]=r[i]||"");return{id:o.id,nama:o["nama kegiatan"],jenis:o["jenis kegiatan"],nomor:o["nomor surat tugas"],pembuat:o["pembuat laporan"],status:o.status,tglKegiatan:o["tanggal kegiatan"],tglSerah:o["tanggal penyerahan ke keuangan"],penerima:o["penerima di keuangan"],anggaran:o["jumlah anggaran"],tglCair:o["tanggal pencairan"],keterangan:o.keterangan}});return out_({data:data})}

function doPost(e){try{const d=JSON.parse(e.postData.contents),sh=getSheet_();sh.appendRow([d.id||Date.now(),d.nama||"",d.jenis||"",d.nomor||"",d.pembuat||"",d.status||"",d.tglKegiatan||"",d.tglSerah||"",d.penerima||"",d.anggaran||0,d.tglCair||"",d.keterangan||"",new Date()]);return out_({success:true})}catch(err){return out_({success:false,message:err.message})}}

function getSheet_(){const ss=SpreadsheetApp.openById(SPREADSHEET_ID);let sh=ss.getSheetByName(SHEET_NAME);if(!sh){sh=ss.insertSheet(SHEET_NAME);sh.appendRow(HEADERS);sh.setFrozenRows(1)}return sh}
function out_(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON)}