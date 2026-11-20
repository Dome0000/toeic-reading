# TOEIC Reading Mastery

เว็บเตรียมสอบ **TOEIC Reading Section (Part 5–7)** สำหรับผู้เรียนชาวไทย — บทเรียนภาษาไทยที่อ่านเข้าใจได้เอง พร้อม Mock Exam 2 ชุด (ชุดละ 100 ข้อ) เฉลยละเอียด และวิเคราะห์จุดอ่อนรายหัวข้อ

🌐 **ใช้งานออนไลน์:** [dome0000.github.io/toeic-reading](https://dome0000.github.io/toeic-reading/)

> เป็นเว็บ static (HTML/CSS/Vanilla JS) ไม่มี build step ไม่พึ่ง npm package

## เปิดเว็บ

**ออนไลน์** — เปิด [dome0000.github.io/toeic-reading](https://dome0000.github.io/toeic-reading/) ได้เลย (GitHub Pages)

**ในเครื่อง** — เปิดไฟล์ `index.html` ด้วยการดับเบิลคลิก (ใช้ `file://`) ได้ทันที ไม่ต้องเปิดเซิร์ฟเวอร์

> **สำคัญ:** ห้ามใช้ `fetch()` หรือ `<script type="module">` เพราะ Chrome บล็อกบน `file://` — โหลดทุกไฟล์ด้วย `<script src>` แบบ classic

รองรับ Chrome, Edge, Firefox, Safari · มือถือ (375px) · dark mode · ปรับขนาดตัวอักษร · พิมพ์บทเรียน/Save as PDF ได้

## โครงสร้างข้อสอบ

| Part | ชื่อ | จำนวน | เลขข้อ |
|---|---|---|---|
| 5 | Incomplete Sentences | 30 | 101–130 |
| 6 | Text Completion (4 ชุด × 4 ข้อ) | 16 | 131–146 |
| 7 | Reading Comprehension — Single 10 ชุด (2-2-2-2-3-3-3-4-4-4) + Double 2 ชุด + Triple 3 ชุด | 54 | 147–200 |

เวลา 75 นาที · คะแนน Reading โดยประมาณ 5–495 (แสดงเป็นช่วง + disclaimer)

## โหมดการทำ

- **Full Test** — 100 ข้อ 75 นาที ซ่อนเฉลยจนกดส่ง / ส่งอัตโนมัติเมื่อหมดเวลา
- **Part Practice** — เลือก Part 5/6/7, จับเวลาหรือไม่จับ, เปิด/ปิดเฉลยทันที
- **Topic Drill** — สุ่ม 10/20 ข้อตาม tag จากทุกชุดและควิซท้ายบท
- **ฝึกซ้ำข้อที่ผิด** — จากหน้าผลสอบ
- **สมุดข้อผิด** — เก็บข้อที่ตอบผิดอัตโนมัติ ตอบถูกติดกัน 2 ครั้งจึงนำออก

## เพิ่ม Mock ชุดใหม่

1. สร้างโฟลเดอร์ `data/exams/mock-0X/` พร้อมไฟล์: `meta.js`, `part5.js`, `part6.js`, `part7-single.js`, `part7-multi.js`
2. เขียน blueprint ก่อน (`blueprints/mock-0X.md`) ล็อกเลขข้อ · tag · ความยาก · ตัวอักษรเฉลย ให้ผ่านกฎ §4 ของ `CLAUDE.md` (เฉลย 25/25/25/25 · ติดกัน ≤ 3 · ยาก 30/45/25)
3. เขียนเนื้อหาตาม schema ตัวอย่างใน `CLAUDE.md` หัวข้อ 5 (ตอบเป็น `"A"`–`"D"` ไม่ใช้ index)
4. เพิ่ม `<script src>` ทั้ง 5 ไฟล์ใน `index.html` ย้ายบล็อก `<!-- mock-0X -->` ไปก่อน `<!-- core -->`
5. รัน `node scripts/validate.js --exam mock-0X` แล้วแก้จนผ่าน
6. (แนะนำ) QA แบบไม่เห็นเฉลย: `node scripts/validate.js --blind mock-0X` แล้วให้โจทย์+ตัวเลือกโดยไม่มีเฉลย เอาข้อที่ตอบไม่ตรงหรือกำกวมกลับมาแก้

## ตรวจสอบข้อมูล

```bash
node scripts/validate.js                  # ตรวจทั้งหมด (lessons + vocab + ทุกชุด)
node scripts/validate.js --exam mock-01   # ตรวจเฉพาะชุด
node scripts/validate.js --lessons        # ตรวจเฉพาะบทเรียน
node scripts/validate.js --vocab          # ตรวจเฉพาะคลังคำศัพท์
node scripts/validate.js --blind mock-01  # พิมพ์โจทย์/ตัวเลือกแบบไม่มีเฉลย (สำหรับ QA)
```

ใช้เฉพาะ Node built-in (fs, path, vm) — ไม่ต้องติดตั้งอะไรเพิ่ม

สิ่งที่ตรวจ: จำนวน/เลขข้อ/ขนาดชุด · 4 ตัวเลือกไม่ซ้ำ · เฉลย A–D · `explain.why` + `explain.wrong` ครบ 3 ตัว · tag อยู่ใน `data/tags.js` · evidence quote ตรงตัวกับบทความ · blank/`[1]–[4]` ครบ · การกระจายเฉลยและความยาก · ไม่มี placeholder

## Deploy ขึ้น GitHub Pages

หน้าเว็บ deploy อัตโนมัติจาก branch `main` (โฟลเดอร์ราก) ผ่าน GitHub Pages

1. push ไป `main` ตามปกติ — GitHub Actions ของ Pages จะ build ให้เอง
2. ตั้งค่า: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`**
3. รอ 1–2 นาที แล้วเปิด `https://<username>.github.io/toeic-reading/`

ไม่มี build step เพราะเป็นไฟล์ static ล้วน — เปลี่ยนไฟล์แล้ว push ก็ขึ้นใหม่ทันที

## โครงสร้างไฟล์

```text
toeic-reading/
├── index.html
├── css/          base · components · exam · print
├── js/
│   ├── core/       utils · store · router · timer
│   ├── components/ question · passage · navigator · quiz
│   ├── views/      home · lessons · lesson · vocab · exams · exam · result · history · mistakes · plan
│   └── app.js
├── data/
│   ├── _init.js · tags.js
│   ├── lessons/    33 บท (1 ไฟล์/บท)
│   ├── vocab/      13 หมวด (1 ไฟล์/หมวด)
│   └── exams/      mock-01/ · mock-02/ (meta + 4 ไฟล์)
├── scripts/      validate.js
└── blueprints/   mock-01.md · mock-02.md
```

## ข้อมูลผู้ใช้

ความคืบหน้า คะแนนที่จำได้ คำศัพท์ที่จำได้ ข้อสอบที่ทำค้าง ประวัติ และสมุดข้อผิด เก็บใน `localStorage` (prefix `toeicR:`) — มี Export/Import/Reset ที่ท้ายเว็บ

---

TOEIC is a registered trademark of ETS. This site is not affiliated with or endorsed by ETS. เนื้อหาทั้งหมดแต่งขึ้นใหม่เพื่อการศึกษา