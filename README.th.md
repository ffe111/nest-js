# NestJS REST API Playground

[English](README.md) | ภาษาไทย

Backend ขนาดเล็กที่ใช้ NestJS 10 สำหรับเรียนรู้ว่า controller, service และ module ทำงานร่วมกันอย่างไร ลองสำรวจ `/users`, `/todo` และ `/beers` เพื่อเปรียบเทียบ route และการจัดการข้อมูลของแต่ละโมดูล

## เริ่มต้นใช้งาน

เปิด MongoDB **สำหรับพัฒนาบนเครื่อง** ที่ `mongodb://localhost:27017/test` ตามค่าที่ระบุใน [`app.module.ts`](src/app.module.ts) แล้วรัน:

```bash
npm ci
npm run start:dev
```

แอปฟังที่ [localhost:3000](http://localhost:3000) ลอง `GET /` ก่อน แล้วดู route ใน [`src/users/`](src/users/), [`src/todo/`](src/todo/) และ [`src/beers/`](src/beers/)

| คำสั่ง | หน้าที่ |
| --- | --- |
| `npm run build` | คอมไพล์ TypeScript |
| `npm test` | รัน unit tests |
| `npm run test:e2e` | รัน end-to-end tests |

โปรเจกต์นี้ใช้เพื่อการเรียนรู้ ให้ใช้ข้อมูลตัวอย่างและฐานข้อมูลบนเครื่องที่ทิ้งได้
