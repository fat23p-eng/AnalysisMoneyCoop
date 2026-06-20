// ============================================================
// DATA — ข้อมูลงบการเงิน สหกรณ์ออมทรัพย์จุฬาลงกรณ์มหาวิทยาลัย จำกัด
// ปีบัญชีสิ้นสุดวันที่ 31 ธันวาคม 2568
// ============================================================

const DATA = {
  balance: {
    assets: [
      { name: "สินทรัพย์หมุนเวียน", type: "section" },
      { name: "เงินสดและเงินฝากธนาคาร", note: "2", v2568: 161266697, v2567: 179041017 },
      { name: "เงินฝากประจำชุมนุมสหกรณ์", note: "", v2568: 100000000, v2567: 0 },
      { name: "สินทรัพย์ที่ต้องติดตามเป็นพิเศษ-สุทธิ", note: "3", v2568: 142545900, v2567: 230407011 },
      { name: "เงินลงทุนระยะสั้น-สุทธิ", note: "4", v2568: 9122968953, v2567: 7513517248 },
      { name: "เงินให้กู้ยืมระยะสั้น-สุทธิ", note: "5", v2568: 2188944537, v2567: 3847931606 },
      { name: "ดอกเบี้ยเงินให้กู้ค้างรับ", note: "6", v2568: 743136, v2567: 2809376 },
      { name: "ทรัพย์สินรอการจำหน่าย", note: "8", v2568: 228497713, v2567: 228497713 },
      { name: "สินทรัพย์หมุนเวียนอื่น", note: "9", v2568: 141748905, v2567: 161331792 },
      { name: "รวมสินทรัพย์หมุนเวียน", note: "", v2568: 12086715842, v2567: 12163535763, total: true },
      { name: "สินทรัพย์ไม่หมุนเวียน", type: "section" },
      { name: "เงินลงทุนระยะยาว-สุทธิ", note: "4", v2568: 15466475470, v2567: 18412631582 },
      { name: "เงินให้กู้ยืมระยะยาว-สุทธิ", note: "5", v2568: 6639088869, v2567: 7332815293 },
      { name: "ลูกหนี้หุ้นกู้ บมจ.การบินไทย ตามแผนฟื้นฟูกิจการ", note: "7", v2568: 1801203500, v2567: 0 },
      { name: "ที่ดิน อาคาร และอุปกรณ์-สุทธิ", note: "10", v2568: 9026793, v2567: 5170154 },
      { name: "สิทธิการใช้ประโยชน์อาคารสำนักงาน", note: "", v2568: 11855798, v2567: 19653565 },
      { name: "สิทธิการใช้ซอฟท์แวร์", note: "", v2568: 1700354, v2567: 70328 },
      { name: "สินทรัพย์ไม่หมุนเวียนอื่น", note: "11", v2568: 20950, v2567: 55458 },
      { name: "รวมสินทรัพย์ไม่หมุนเวียน", note: "", v2568: 23929371734, v2567: 25770396379, total: true },
      { name: "รวมสินทรัพย์", note: "", v2568: 36016087575, v2567: 37933932143, grand: true },
    ],
    liabilities: [
      { name: "หนี้สินหมุนเวียน", type: "section" },
      { name: "เงินบิกเกินบัญชีธนาคารและเงินกู้ยืมระยะสั้น", note: "12", v2568: 860000000, v2567: 5350000000 },
      { name: "เงินรับฝาก", note: "13", v2568: 15012898700, v2567: 14282492960 },
      { name: "หนี้สินหมุนเวียนอื่น", note: "14", v2568: 125589311, v2567: 128458563 },
      { name: "รวมหนี้สินหมุนเวียน", note: "", v2568: 15998488010, v2567: 19760951523, total: true },
      { name: "หนี้สินไม่หมุนเวียน", type: "section" },
      { name: "หนี้สินไม่หมุนเวียนอื่น", note: "15", v2568: 26949249, v2567: 24787645 },
      { name: "รวมหนี้สินไม่หมุนเวียน", note: "", v2568: 26949249, v2567: 24787645, total: true },
      { name: "รวมหนี้สิน", note: "", v2568: 16025437259, v2567: 19785739168, grand: true },
      { name: "ทุนของสหกรณ์", type: "section" },
      { name: "ทุนเรือนหุ้น (มูลค่าหุ้นละ 10.00 บาท)", note: "", v2568: 15329977010, v2567: 15084951700 },
      { name: "ทุนสำรอง", note: "", v2568: 3053107435, v2567: 2959121985 },
      { name: "ทุนสะสมตามข้อบังคับ ระเบียบและอื่น ๆ", note: "16", v2568: 124322434, v2567: 121061692 },
      { name: "กำไร(ขาดทุน)จากเงินลงทุนที่ยังไม่เกิดขึ้น", note: "17", v2568: 228617457, v2567: -938272341 },
      { name: "กำไรสุทธิประจำปี", note: "", v2568: 1254625981, v2567: 921329938 },
      { name: "รวมทุนของสหกรณ์", note: "", v2568: 19990650316, v2567: 18148192975, total: true },
      { name: "รวมหนี้สินและทุนของสหกรณ์", note: "", v2568: 36016087575, v2567: 37933932143, grand: true },
    ]
  },

  income: [
    { name: "รายได้ดอกเบี้ยและผลตอบแทนจากเงินลงทุน", type: "section" },
    { name: "ดอกเบี้ยรับจากเงินให้กู้ (รายละเอียดแนบ)", v2568: 405339133, p2568: 28.01, v2567: 601877276, p2567: 36.80 },
    { name: "ดอกเบี้ยรับจากเงินฝาก (รายละเอียดแนบ)", v2568: 642637, p2568: 0.04, v2567: 809297, p2567: 0.05 },
    { name: "ผลตอบแทนจากเงินลงทุน (รายละเอียดแนบ)", v2568: 1041124699, p2568: 71.95, v2567: 1032715601, p2567: 63.15 },
    { name: "รวมรายได้ดอกเบี้ยและผลตอบแทน", v2568: 1447106469, p2568: 100, v2567: 1635402175, p2567: 100, total: true },
    { name: "ค่าใช้จ่ายดอกเบี้ยและเงินลงทุน", type: "section" },
    { name: "ดอกเบี้ยจ่ายเงินรับฝาก", v2568: 272140405, p2568: 18.81, v2567: 275964756, p2567: 16.87 },
    { name: "ดอกเบี้ยจ่ายเงินกู้ยืมระยะสั้น", v2568: 107939219, p2568: 7.46, v2567: 201482726, p2567: 12.32 },
    { name: "ค่าเผื่อปรับมูลค่าเงินลงทุน หุ้นกู้ บมจ.การบินไทย", v2568: -357855000, p2568: -24.73, v2567: 0, p2567: 0 },
    { name: "ส่วนเกินมูลค่าหุ้นกู้ บมจ.การบินไทย ตัดจำหน่าย", v2568: 196223, p2568: 0.01, v2567: 1266832, p2567: 0.08 },
    { name: "รวมค่าใช้จ่ายดอกเบี้ยและเงินลงทุน", v2568: 22420846, p2568: 1.55, v2567: 478714315, p2567: 29.28, total: true },
    { name: "หนี้สงสัยจะสูญและหนี้สูญ", type: "section" },
    { name: "รวมหนี้สงสัยจะสูญและหนี้สูญ", v2568: 86488402, p2568: 5.98, v2567: 95888485, p2567: 5.86, total: true },
    { name: "รายได้ดอกเบี้ยและผลตอบแทนจากเงินลงทุนสุทธิ", v2568: 1338197221, p2568: 92.47, v2567: 1060799376, p2567: 64.86, total: true },
    { name: "รายได้อื่น", type: "section" },
    { name: "รวมรายได้อื่น", v2568: 3809959, p2568: 0.26, v2567: 5833266, p2567: 0.35 },
    { name: "ค่าใช้จ่ายในการดำเนินงาน", type: "section" },
    { name: "รวมค่าใช้จ่ายในการดำเนินงาน", v2568: 87381199, p2568: 6.04, v2567: 145302703, p2567: 8.88 },
    { name: "กำไรสุทธิประจำปี", v2568: 1254625981, p2568: 86.70, v2567: 921329938, p2567: 56.34, grand: true },
  ],

  cashflow: [
    { name: "กิจกรรมดำเนินงาน", type: "section" },
    { name: "กำไรสุทธิประจำปี", v2568: 1254625981, v2567: 921329938 },
    { name: "ค่าเสื่อมราคาสินทรัพย์", v2568: 2775118, v2567: 2748072 },
    { name: "ค่าเผื่อปรับมูลค่าเงินลงทุน บมจ.การบินไทย", v2568: -357855000, v2567: 0 },
    { name: "หนี้สูญ-ลูกหนี้เงินกู้", v2568: 328048, v2567: 4758710 },
    { name: "หนี้สงสัยจะสูญ-ลูกหนี้เงินกู้", v2568: -1700757, v2567: 3268664 },
    { name: "กำไรจากการจำหน่ายเงินลงทุน", v2568: -44276041, v2567: -43976031 },
    { name: "รายได้ค้างรับ", v2568: -140592418, v2567: -161622853 },
    { name: "ค่าใช้จ่ายค้างจ่าย", v2568: 112075695, v2567: 119677306 },
    { name: "เงินสดสุทธิจากกิจกรรมดำเนินงาน", v2568: 3334184712, v2567: -328423173, total: true },
    { name: "กิจกรรมลงทุน", type: "section" },
    { name: "เงินสดจ่ายลงทุนในพันธบัตร", v2568: -165476009, v2567: -209903583 },
    { name: "เงินสดจ่ายลงทุนในหุ้นกู้", v2568: -610000000, v2567: -4555000000 },
    { name: "เงินสดรับจากการไถ่ถอนเงินลงทุนในหุ้นกู้", v2568: 1889276041, v2567: 3317683283 },
    { name: "เงินสดจ่ายซื้อเครื่องใช้สำนักงาน", v2568: -1520975, v2567: -722614 },
    { name: "เงินสดจ่ายซื้อเครื่องคอมพิวเตอร์", v2568: -5114600, v2567: -1860000 },
    { name: "เงินสดรับจากการจำหน่ายทรัพย์สิน", v2568: 426973, v2567: 0 },
    { name: "เงินสดสุทธิจากกิจกรรมลงทุน", v2568: 1092765764, v2567: -1229751106, total: true },
    { name: "กิจกรรมจัดหาเงิน", type: "section" },
    { name: "เงินสดรับจากการออกตั๋วสัญญาใช้เงิน", v2568: 58100000000, v2567: 93070000000 },
    { name: "เงินสดจ่ายชำระหนี้ตั๋วสัญญาใช้เงิน", v2568: -62590000000, v2567: -90430000000 },
    { name: "เงินสดรับจากเงินรับฝาก", v2568: 28876398729, v2567: 28380155744 },
    { name: "เงินสดจ่ายคืนเงินรับฝาก", v2568: -28145992989, v2567: -29006383549 },
    { name: "เงินสดจ่ายเงินปันผล", v2568: -673750868, v2567: -376303730 },
    { name: "เงินสดรับจากทุนเรือนหุ้น", v2568: 543018950, v2567: 527027870 },
    { name: "เงินสดจ่ายคืนทุนเรือนหุ้น", v2568: -297993640, v2567: -506574140 },
    { name: "เงินสดสุทธิจากกิจกรรมจัดหาเงิน", v2568: -4344724795, v2567: 1512374743, total: true },
    { name: "เงินสดสุทธิเพิ่มขึ้น (ลดลง)", v2568: 82225681, v2567: -45799536, grand: true },
    { name: "เงินสด ณ วันต้นปี", v2568: 179041017, v2567: 224840553 },
    { name: "เงินสด ณ วันสิ้นปี", v2568: 261266697, v2567: 179041017, grand: true },
  ],

  ratios: {
    C: [
      { label: "หนี้สินต่อทุน", v2568: "0.80 เท่า", v2567: "1.09 เท่า", pct: 80, dir: "good", up: false },
      { label: "ทุนสำรองต่อสินทรัพย์", v2568: "8.48%", v2567: "7.80%", pct: 85, dir: "good", up: true },
      { label: "ผลตอบแทนส่วนของทุน", v2568: "6.58%", v2567: "5.10%", pct: 66, dir: "good", up: true },
      { label: "อัตราการเติบโตของทุน", v2568: "10.15%", v2567: "0.80%", pct: 100, dir: "good", up: true },
    ],
    A: [
      { label: "อัตราผลตอบแทนต่อสินทรัพย์ (ROA)", v2568: "3.39%", v2567: "2.50%", pct: 56, dir: "good", up: true },
      { label: "อัตราการเติบโตของสินทรัพย์", v2568: "-5.06%", v2567: "6.08%", pct: 25, dir: "bad", up: false },
    ],
    M: [
      { label: "อัตราการเติบโตของธุรกิจ", v2568: "-26.28%", v2567: "-17.49%", pct: 20, dir: "bad", up: false },
    ],
    E: [
      { label: "กำไร(ขาดทุน)ต่อสมาชิก", v2568: "81,820 บ./คน", v2567: "59,815 บ./คน", pct: 82, dir: "good", up: true },
      { label: "เงินออมต่อสมาชิก", v2568: "1,978,797 บ./คน", v2567: "1,906,606 บ./คน", pct: 80, dir: "good", up: true },
      { label: "หนี้สินต่อสมาชิก", v2568: "347,690 บ./คน", v2567: "357,114 บ./คน", pct: 60, dir: "good", up: false },
      { label: "อัตราการเติบโตของกำไร", v2568: "36.18%", v2567: "81.76%", pct: 36, dir: "neutral", up: null },
      { label: "อัตรากำไรสุทธิ", v2568: "86.70%", v2567: "56.34%", pct: 87, dir: "good", up: true },
    ],
    L: [
      { label: "อัตราส่วนทุนหมุนเวียน", v2568: "0.76 เท่า", v2567: "0.62 เท่า", pct: 76, dir: "good", up: true },
    ]
  },

  investments: [
    { name: "หุ้นสามัญ-บมจ.ปตท.", fair: 4890405175, cost: 4279830400 },
    { name: "หุ้นสามัญ-บมจ.ท่าอากาศยานไทย", fair: 3070515475, cost: 2221669900 },
    { name: "หุ้นสามัญ-บมจ.การบินไทย", fair: 584496500, cost: 1596043759 },
    { name: "กองทุนรวมโครงสร้างพื้นฐานโรงไฟฟ้าฯ", fair: 58274545, cost: 61768600 },
    { name: "รวมตราสารทุน (ระยะสั้น)", fair: 8603691695, cost: 8159312659 },
  ],

  bizHistory: {
    years: ["ปี 2565", "ปี 2566", "ปี 2567", "ปี 2568"],
    loans: [6086, 10658, 29443, 9476],
    deposits: [7241, 9476, 28380, 28876],
    invest: [598, 720, 4750, 11934]
  },

  profitHistory: {
    years: ["ปี 2565", "ปี 2566", "ปี 2567", "ปี 2568"],
    values: [null, null, 921, 1255]
  }
};

// ============================================================
// GOOGLE APPS SCRIPT CODE
// ============================================================
const APPS_SCRIPT = `function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // สร้างหรืออัปเดตชีทแต่ละชีท
    writeSheet(ss, 'สรุปภาพรวม', data.summary);
    writeSheet(ss, 'งบฐานะการเงิน', data.balance);
    writeSheet(ss, 'งบกำไรขาดทุน', data.income);
    writeSheet(ss, 'กระแสเงินสด', data.cashflow);
    writeSheet(ss, 'อัตราส่วน CAMEL', data.ratios);
    writeSheet(ss, 'เงินลงทุน', data.investments);
    
    return ContentService
      .createTextOutput(JSON.stringify({status:'ok', message:'Synced successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({status:'error', message: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status:'ok', message:'Cooperative Finance API Ready'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function writeSheet(ss, name, rows) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  sheet.clearContents();
  if (rows && rows.length > 0) {
    sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
    // จัดรูปแบบ header
    sheet.getRange(1, 1, 1, rows[0].length)
      .setBackground('#1e3a5f')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, rows[0].length);
  }
}`;

// ============================================================
// UTILITIES
// ============================================================
function fmt(n) {
  if (n === null || n === undefined) return "-";
  return new Intl.NumberFormat("th-TH").format(Math.round(n));
}
function fmtM(n) { return (n / 1e6).toFixed(2); }
function pctChange(a, b) {
  if (!b || b === 0) return null;
  return ((a - b) / Math.abs(b) * 100).toFixed(2);
}
function changeBadge(v2568, v2567) {
  const p = pctChange(v2568, v2567);
  if (p === null) return `<span class="badge badge-purple">ใหม่</span>`;
  const up = parseFloat(p) >= 0;
  const cls = up ? "badge-green" : "badge-red";
  return `<span class="badge ${cls}">${up ? "▲" : "▼"} ${Math.abs(p)}%</span>`;
}
function showNotif(msg, type = "success") {
  const el = document.getElementById("notif");
  const icon = document.getElementById("notifIcon");
  const text = document.getElementById("notifText");
  el.className = `notif ${type}`;
  icon.textContent = type === "success" ? "✓" : "✕";
  text.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3500);
}

// ============================================================
// NAVIGATION
// ============================================================
function showPage(id, el) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  if (el) el.classList.add("active");
}

// ============================================================
// RENDER TABLES
// ============================================================
function renderBalanceTable(tbodyId, rows) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  tbody.innerHTML = rows.map(r => {
    if (r.type === "section") {
      return `<tr><td colspan="5" style="font-weight:600;font-size:11px;color:var(--text3);text-transform:uppercase;
        letter-spacing:0.06em;padding:12px 12px 4px;background:var(--bg2)">${r.name}</td></tr>`;
    }
    const cl = r.grand ? "style='background:rgba(79,142,247,0.1);font-weight:700'" :
               r.total ? "class='total'" : "";
    return `<tr ${cl}>
      <td>${r.name}</td>
      <td style="color:var(--text3);font-size:11px">${r.note || ""}</td>
      <td class="r">${fmt(r.v2568)}</td>
      <td class="r" style="color:var(--text2)">${fmt(r.v2567)}</td>
      <td class="r">${r.v2567 !== undefined ? changeBadge(r.v2568, r.v2567) : ""}</td>
    </tr>`;
  }).join("");
}

function renderIncomeTable() {
  const tbody = document.getElementById("incomeTable");
  if (!tbody) return;
  tbody.innerHTML = DATA.income.map(r => {
    if (r.type === "section") {
      return `<tr><td colspan="5" style="font-weight:600;font-size:11px;color:var(--text3);text-transform:uppercase;
        letter-spacing:0.06em;padding:12px 12px 4px;background:var(--bg2)">${r.name}</td></tr>`;
    }
    const cl = r.grand ? "style='background:rgba(52,199,123,0.08);font-weight:700'" :
               r.total ? "class='total'" : "";
    return `<tr ${cl}>
      <td>${r.name}</td>
      <td class="r">${fmt(r.v2568)}</td>
      <td class="pct">${r.p2568}%</td>
      <td class="r" style="color:var(--text2)">${fmt(r.v2567)}</td>
      <td class="pct">${r.p2567}%</td>
    </tr>`;
  }).join("");
}

function renderCashTable() {
  const tbody = document.getElementById("cashTable");
  if (!tbody) return;
  tbody.innerHTML = DATA.cashflow.map(r => {
    if (r.type === "section") {
      return `<tr><td colspan="3" style="font-weight:600;font-size:11px;color:var(--text3);text-transform:uppercase;
        letter-spacing:0.06em;padding:12px 12px 4px;background:var(--bg2)">${r.name}</td></tr>`;
    }
    const cl = r.grand ? "style='background:rgba(79,142,247,0.1);font-weight:700'" :
               r.total ? "class='total'" : "";
    const color2568 = r.v2568 >= 0 ? "var(--green)" : "var(--red)";
    return `<tr ${cl}>
      <td>${r.name}</td>
      <td class="r" style="color:${color2568}">${fmt(r.v2568)}</td>
      <td class="r" style="color:var(--text2)">${fmt(r.v2567)}</td>
    </tr>`;
  }).join("");
}

function renderRatioSection(elId, rows) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = rows.map(r => {
    const color = r.dir === "good" ? "var(--green)" : r.dir === "bad" ? "var(--red)" : "var(--amber)";
    const arrow = r.up === true ? "▲" : r.up === false ? "▼" : "—";
    const arrowColor = r.up === true ? "var(--green)" : r.up === false ? "var(--red)" : "var(--text2)";
    return `<div class="ratio-row">
      <span class="ratio-label">${r.label}</span>
      <div class="ratio-right">
        <div class="bar-bg"><div class="bar-fill" style="width:${r.pct}%;background:${color}"></div></div>
        <span class="ratio-val" style="color:${color}">${r.v2568}</span>
        <span style="font-size:11px;color:${arrowColor}">${arrow} ${r.v2567}</span>
      </div>
    </div>`;
  }).join("");
}

function renderInvestTable() {
  const tbody = document.getElementById("investTable");
  if (!tbody) return;
  tbody.innerHTML = DATA.investments.map(r => {
    const diff = r.fair - r.cost;
    const diffColor = diff >= 0 ? "var(--green)" : "var(--red)";
    return `<tr>
      <td>${r.name}</td>
      <td class="r">${fmt(r.fair)}</td>
      <td class="r" style="color:var(--text2)">${fmt(r.cost)}</td>
    </tr>`;
  }).join("");
}

// ============================================================
// CHARTS
// ============================================================
let charts = {};
function destroyChart(id) { if (charts[id]) { charts[id].destroy(); delete charts[id]; } }

function initCharts() {
  const gridC = "rgba(255,255,255,0.05)";
  const tickC = "#555e72";
  const defaults = { responsive: true, maintainAspectRatio: false };

  // DONUT 1 - แหล่งที่มา
  destroyChart("donut1");
  charts["donut1"] = new Chart(document.getElementById("donut1"), {
    type: "doughnut",
    data: {
      labels: ["เงินรับฝาก 41.68%", "ทุนเรือนหุ้น 42.56%", "เงินกู้ยืม 2.39%", "อื่นๆ 13.37%"],
      datasets: [{ data: [41.68, 42.56, 2.39, 13.37], backgroundColor: ["#4f8ef7", "#34c77b", "#f5a623", "#555e72"], borderWidth: 0, hoverOffset: 6 }]
    },
    options: { ...defaults, cutout: "62%", plugins: { legend: { display: false } } }
  });

  // DONUT 2 - การใช้ไป
  destroyChart("donut2");
  charts["donut2"] = new Chart(document.getElementById("donut2"), {
    type: "doughnut",
    data: {
      labels: ["เงินลงทุน 68.27%", "ลูกหนี้เงินกู้ 24.51%", "อื่นๆ 7.22%"],
      datasets: [{ data: [68.27, 24.51, 7.22], backgroundColor: ["#4f8ef7", "#f75252", "#555e72"], borderWidth: 0, hoverOffset: 6 }]
    },
    options: { ...defaults, cutout: "62%", plugins: { legend: { display: false } } }
  });

  // BAR - ปริมาณธุรกิจ 4 ปี
  destroyChart("bizBar");
  charts["bizBar"] = new Chart(document.getElementById("bizBar"), {
    type: "bar",
    data: {
      labels: DATA.bizHistory.years,
      datasets: [
        { label: "ปล่อยเงินกู้", data: DATA.bizHistory.loans, backgroundColor: "#4f8ef7" },
        { label: "รับฝากเงิน", data: DATA.bizHistory.deposits, backgroundColor: "#34c77b" },
        { label: "ลงทุน", data: DATA.bizHistory.invest, backgroundColor: "#f5a623" }
      ]
    },
    options: { ...defaults, plugins: { legend: { display: false } }, scales: {
      x: { grid: { color: gridC }, ticks: { color: tickC } },
      y: { grid: { color: gridC }, ticks: { color: tickC, callback: v => v.toLocaleString() + "M" } }
    }}
  });

  // LINE - กำไร 2 ปี
  destroyChart("profitLine");
  charts["profitLine"] = new Chart(document.getElementById("profitLine"), {
    type: "line",
    data: {
      labels: ["ปี 2567", "ปี 2568"],
      datasets: [{ label: "กำไรสุทธิ (ล้านบาท)", data: [921, 1255], borderColor: "#34c77b", backgroundColor: "rgba(52,199,123,0.08)", fill: true, tension: 0.4, pointBackgroundColor: "#34c77b", pointRadius: 6 }]
    },
    options: { ...defaults, plugins: { legend: { display: false } }, scales: {
      x: { grid: { color: gridC }, ticks: { color: tickC } },
      y: { grid: { color: gridC }, ticks: { color: tickC, callback: v => v + "M" }, min: 800 }
    }}
  });

  // BAR - income
  const incomeEl = document.getElementById("incomeBar");
  if (incomeEl) {
    destroyChart("incomeBar");
    charts["incomeBar"] = new Chart(incomeEl, {
      type: "bar",
      data: {
        labels: ["ดอกเบี้ยเงินกู้", "ผลตอบแทนลงทุน", "ค่าใช้จ่ายรวม", "กำไรสุทธิ"],
        datasets: [
          { label: "ปี 2568", data: [405, 1041, 109, 1255], backgroundColor: ["#4f8ef7", "#34c77b", "#f75252", "#22d3c8"] },
          { label: "ปี 2567", data: [602, 1033, 720, 921], backgroundColor: ["rgba(79,142,247,0.35)", "rgba(52,199,123,0.35)", "rgba(247,82,82,0.35)", "rgba(34,211,200,0.35)"] }
        ]
      },
      options: { ...defaults, plugins: { legend: { display: false } }, scales: {
        x: { grid: { color: gridC }, ticks: { color: tickC } },
        y: { grid: { color: gridC }, ticks: { color: tickC, callback: v => v + "M" } }
      }}
    });
  }

  // DONUT - income breakdown
  const inDountEl = document.getElementById("incomeDount");
  if (inDountEl) {
    destroyChart("incomeDount");
    charts["incomeDount"] = new Chart(inDountEl, {
      type: "doughnut",
      data: {
        labels: ["ดอกเบี้ยจากเงินกู้ 28%", "ดอกเบี้ยจากเงินฝาก 0.04%", "ผลตอบแทนลงทุน 71.95%"],
        datasets: [{ data: [28.01, 0.04, 71.95], backgroundColor: ["#4f8ef7", "#9b7ef7", "#34c77b"], borderWidth: 0, hoverOffset: 6 }]
      },
      options: { ...defaults, cutout: "60%", plugins: { legend: { display: false } } }
    });
  }

  // BAR - cashflow
  const cashEl = document.getElementById("cashBar");
  if (cashEl) {
    destroyChart("cashBar");
    charts["cashBar"] = new Chart(cashEl, {
      type: "bar",
      data: {
        labels: ["ดำเนินงาน", "ลงทุน", "จัดหาเงิน"],
        datasets: [
          { label: "ปี 2568", data: [3334, 1093, -4345], backgroundColor: ["#34c77b", "#4f8ef7", "#f75252"] },
          { label: "ปี 2567", data: [-328, -1230, 1512], backgroundColor: ["rgba(247,82,82,0.4)", "rgba(247,82,82,0.4)", "rgba(52,199,123,0.4)"] }
        ]
      },
      options: { ...defaults, plugins: { legend: { display: false } }, scales: {
        x: { grid: { color: gridC }, ticks: { color: tickC } },
        y: { grid: { color: gridC }, ticks: { color: tickC, callback: v => v.toLocaleString() + "M" } }
      }}
    });
  }

  // BAR - CAMEL ratios
  const ratioEl = document.getElementById("ratioBar");
  if (ratioEl) {
    destroyChart("ratioBar");
    charts["ratioBar"] = new Chart(ratioEl, {
      type: "bar",
      data: {
        labels: ["กำไรสุทธิ (%)", "ทุนสำรอง/สินทรัพย์ (%)", "ROA (%)", "ผลตอบแทนทุน (%)"],
        datasets: [
          { label: "ปี 2567", data: [56.34, 7.80, 2.50, 5.10], backgroundColor: "#555e72" },
          { label: "ปี 2568", data: [86.70, 8.48, 3.39, 6.58], backgroundColor: "#4f8ef7" }
        ]
      },
      options: { ...defaults, plugins: { legend: { display: false } }, scales: {
        x: { grid: { color: gridC }, ticks: { color: tickC, font: { size: 11 } } },
        y: { grid: { color: gridC }, ticks: { color: tickC, callback: v => v + "%" } }
      }}
    });
  }
}

// ============================================================
// GOOGLE SHEETS SYNC
// ============================================================
function buildSheetsPayload() {
  const summary = [
    ["ตัวชี้วัด", "ปี 2568", "ปี 2567", "เปลี่ยนแปลง"],
    ["รวมสินทรัพย์ (บาท)", 36016087575, 37933932143, "▼ 5.05%"],
    ["รวมทุนของสหกรณ์ (บาท)", 19990650316, 18148192975, "▲ 10.15%"],
    ["กำไรสุทธิ (บาท)", 1254625981, 921329938, "▲ 36.18%"],
    ["รวมรายได้ (บาท)", 1447106469, 1635402175, "▼ 11.50%"],
    ["จำนวนสมาชิก (คน)", 15334, 15403, "▼ 0.45%"],
    ["อัตรากำไรสุทธิ (%)", 86.70, 56.34, "▲ 30.36%"],
    ["ทุนเรือนหุ้น (บาท)", 15329977010, 15084951700, "▲ 1.62%"],
    ["เงินรับฝาก (บาท)", 15012898700, 14282492960, "▲ 5.11%"],
    ["ซิงค์วันที่", new Date().toLocaleString("th-TH"), "", ""]
  ];

  const balanceRows = [["รายการ", "หมายเหตุ", "ปี 2568 (บาท)", "ปี 2567 (บาท)", "เปลี่ยนแปลง (%)"]];
  DATA.balance.assets.forEach(r => {
    if (r.type === "section") balanceRows.push([`=== ${r.name} ===`, "", "", "", ""]);
    else balanceRows.push([r.name, r.note || "", r.v2568 || 0, r.v2567 || 0, r.v2567 ? pctChange(r.v2568, r.v2567) + "%" : ""]);
  });
  DATA.balance.liabilities.forEach(r => {
    if (r.type === "section") balanceRows.push([`=== ${r.name} ===`, "", "", "", ""]);
    else balanceRows.push([r.name, r.note || "", r.v2568 || 0, r.v2567 || 0, r.v2567 ? pctChange(r.v2568, r.v2567) + "%" : ""]);
  });

  const incomeRows = [["รายการ", "ปี 2568 (บาท)", "% (2568)", "ปี 2567 (บาท)", "% (2567)"]];
  DATA.income.forEach(r => {
    if (r.type === "section") incomeRows.push([`=== ${r.name} ===`, "", "", "", ""]);
    else incomeRows.push([r.name, r.v2568 || 0, r.p2568 || 0, r.v2567 || 0, r.p2567 || 0]);
  });

  const cashRows = [["รายการ", "ปี 2568 (บาท)", "ปี 2567 (บาท)"]];
  DATA.cashflow.forEach(r => {
    if (r.type === "section") cashRows.push([`=== ${r.name} ===`, "", ""]);
    else cashRows.push([r.name, r.v2568 || 0, r.v2567 || 0]);
  });

  const ratioRows = [["หมวด", "ตัวชี้วัด", "ปี 2568", "ปี 2567", "ทิศทาง"]];
  Object.entries(DATA.ratios).forEach(([cat, rows]) => {
    rows.forEach(r => ratioRows.push([cat, r.label, r.v2568, r.v2567, r.up === true ? "▲ ดีขึ้น" : r.up === false ? "▼ ลดลง" : "—"]));
  });

  const investRows = [["หลักทรัพย์", "มูลค่ายุติธรรม (บาท)", "ราคาทุน (บาท)", "กำไร/ขาดทุนที่ยังไม่เกิด"]];
  DATA.investments.forEach(r => investRows.push([r.name, r.fair, r.cost, r.fair - r.cost]));

  return { summary, balance: balanceRows, income: incomeRows, cashflow: cashRows, ratios: ratioRows, investments: investRows };
}

function syncToSheets() {
  const scriptUrl = document.getElementById("scriptUrl")?.value || localStorage.getItem("scriptUrl") || "";
  if (!scriptUrl) {
    showNotif("กรุณาตั้งค่า Google Apps Script URL ก่อน", "error");
    showPage("sheets", document.querySelector(".nav-item:nth-child(8)"));
    return;
  }
  showNotif("กำลังซิงค์ข้อมูลเข้า Google Sheets...", "success");
  const payload = buildSheetsPayload();
  fetch(scriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    const now = new Date().toLocaleTimeString("th-TH");
    document.getElementById("lastSync").textContent = now;
    localStorage.setItem("lastSync", now);
    showNotif("ซิงค์ข้อมูลเข้า Google Sheets เรียบร้อย ✓", "success");
  }).catch(err => {
    showNotif("เชื่อมต่อไม่สำเร็จ กรุณาตรวจสอบ URL", "error");
  });
}

function testConnection() {
  const scriptUrl = document.getElementById("scriptUrl")?.value || localStorage.getItem("scriptUrl") || "";
  if (!scriptUrl) { showNotif("กรุณาใส่ Script URL ก่อน", "error"); return; }
  showNotif("กำลังทดสอบการเชื่อมต่อ...", "success");
  fetch(scriptUrl + "?test=1", { mode: "no-cors" })
    .then(() => showNotif("เชื่อมต่อสำเร็จ ✓ พร้อม Sync", "success"))
    .catch(() => showNotif("เชื่อมต่อไม่สำเร็จ ตรวจสอบ URL อีกครั้ง", "error"));
}

function copyScript() {
  navigator.clipboard.writeText(APPS_SCRIPT).then(() => {
    showNotif("Copy Google Apps Script สำเร็จแล้ว", "success");
  }).catch(() => {
    showNotif("กรุณา copy code จากกล่องด้านล่างด้วยตนเอง", "error");
  });
}

function exportData() {
  const payload = buildSheetsPayload();
  const csv = payload.summary.map(r => r.join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = "coop_finance_2568.csv"; a.click();
  showNotif("Export CSV เรียบร้อย", "success");
}

function saveSheetConfig() {
  const id = document.getElementById("sheetId")?.value || "";
  const url = document.getElementById("scriptUrl")?.value || "";
  if (id) localStorage.setItem("sheetId", id);
  if (url) localStorage.setItem("scriptUrl", url);
}

function handleFile(input) {
  const file = input.files[0];
  if (!file) return;
  const chip = document.getElementById("fileChip");
  chip.innerHTML = `<div class="file-chip">📄 ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB) — <span style="color:var(--green)">พร้อมวิเคราะห์</span></div>`;
  showNotif(`นำเข้าไฟล์ ${file.name} เรียบร้อย`, "success");
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById("dropZone").classList.remove("drag");
  const files = e.dataTransfer.files;
  if (files.length > 0) { document.getElementById("fileInput").files = files; handleFile(document.getElementById("fileInput")); }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Restore config
  const savedId = localStorage.getItem("sheetId");
  const savedUrl = localStorage.getItem("scriptUrl");
  const savedSync = localStorage.getItem("lastSync");
  if (savedId && document.getElementById("sheetId")) document.getElementById("sheetId").value = savedId;
  if (savedUrl && document.getElementById("scriptUrl")) document.getElementById("scriptUrl").value = savedUrl;
  if (savedSync) document.getElementById("lastSync").textContent = savedSync;

  // Import date
  const importDate = document.getElementById("importDate");
  if (importDate) importDate.textContent = new Date().toLocaleDateString("th-TH");

  // Script code display
  const scriptEl = document.getElementById("scriptCode");
  if (scriptEl) scriptEl.textContent = APPS_SCRIPT;

  // Render tables
  renderBalanceTable("assetTable", DATA.balance.assets);
  renderBalanceTable("liabTable", DATA.balance.liabilities);
  renderIncomeTable();
  renderCashTable();
  renderRatioSection("ratioC", DATA.ratios.C);
  renderRatioSection("ratioA", DATA.ratios.A);
  renderRatioSection("ratioM", DATA.ratios.M);
  renderRatioSection("ratioE", DATA.ratios.E);
  renderRatioSection("ratioL", DATA.ratios.L);
  renderInvestTable();

  // Charts
  initCharts();
});
