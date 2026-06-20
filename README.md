ขั้นตอนง่ายมาก 5 steps ครับ:
====
Step 1 — สร้าง Google Spreadsheet
เปิด sheets.google.com → สร้าง Spreadsheet ใหม่
Step 2 — เปิด Apps Script
ใน Spreadsheet → Extensions → Apps Script → จะเปิด editor ขึ้นมา
Step 3 — วาง Script
ใน Web App → หน้า Google Sheets → กดปุ่ม 📋 Copy Apps Script → วางแทน code เดิมใน Apps Script editor ทั้งหมด → กด Save (Ctrl+S)
Step 4 — Deploy
กด Deploy → New deployment → ตั้งค่าดังนี้:
Type: Web app
Execute as: Me
Who has access: Anyone
→ กด Deploy → อนุญาต permission → Copy Web app URL ที่ได้
Step 5 — ใส่ URL ใน Web App
กลับมาที่ Web App → หน้า Google Sheets → วาง URL ในช่อง "Google Apps Script Deployment URL" → กด Sync ข้อมูลทั้งหมด
ระบบจะสร้าง 6 ชีทให้อัตโนมัติ: สรุปภาพรวม, งบฐานะการเงิน, งบกำไรขาดทุน, กระแสเงินสด, อัตราส่วน CAMEL, เงินลงทุน
