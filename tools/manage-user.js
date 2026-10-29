#!/usr/bin/env node
/**
 * ابزار مدیریت مهلت و اعتبار یوزرها در satellite-channels
 * 
 * دستورها:
 *   node tools/manage-user.js                 نمایش وضعیت همه یوزرها
 *   node tools/manage-user.js extend user-01  تمدید ۹۰ روزه
 *   node tools/manage-user.js extend user-01 30 تمدید ۳۰ روزه
 *   node tools/manage-user.js close user-01   بستن و غیرفعال‌سازی فوری
 *   node tools/manage-user.js activate user-01 فعال‌سازی مجدد
 *   node tools/manage-user.js set user-01 2027-04-01 تنظیم تاریخ دقیق
 */

const fs = require('fs');
const path = require('path');

const accessFile = path.join(__dirname, '..', 'access.json');
if (!fs.existsSync(accessFile)) {
  console.error('فایل access.json پیدا نشد:', accessFile);
  process.exit(1);
}

const access = JSON.parse(fs.readFileSync(accessFile, 'utf8'));
if (!access.users) access.users = {};

const args = process.argv.slice(2);
const cmd = (args[0] || 'list').toLowerCase();
const userId = args[1];

function formatShamsi(dateStr) {
  try {
    return new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

function calcDays(expStr) {
  const exp = new Date(expStr).getTime();
  const now = Date.now();
  return Math.ceil((exp - now) / (1000 * 60 * 60 * 24));
}

function save() {
  access.updatedAt = new Date().toISOString();
  fs.writeFileSync(accessFile, JSON.stringify(access, null, 2) + '\n', 'utf8');
  console.log('فایل access.json به‌روز شد.');
}

if (cmd === 'list') {
  console.log('\n--- فهرست کاربران و وضعیت اعتبار ---');
  console.log('یوزر\tوضعیت\tروز مانده\tتاریخ انقضا\tشمسی\tتوضیح');
  console.log('------------------------------------------------------------------------');
  for (const [id, u] of Object.entries(access.users)) {
    const days = calcDays(u.expires);
    const st = u.active === false ? 'بسته (غیرفعال)' : (days <= 0 ? 'منقضی' : (days <= 10 ? 'نزدیک انقضا' : 'فعال'));
    console.log(`${id}\t${st}\t${days} روز\t${u.expires}\t${formatShamsi(u.expires)}\t${u.note || ''}`);
  }
  console.log('------------------------------------------------------------------------\n');
  process.exit(0);
}

if (!userId) {
  console.error('لطفاً شناسه‌ی کاربر را وارد کنید. مثال: user-01');
  process.exit(1);
}

if (!access.users[userId]) {
  access.users[userId] = { expires: new Date().toISOString().slice(0, 10), active: true, note: '' };
}

const user = access.users[userId];

if (cmd === 'extend') {
  const addDays = parseInt(args[2], 10) || 90;
  const curExp = new Date(user.expires).getTime();
  const base = curExp > Date.now() ? curExp : Date.now();
  const newExp = new Date(base + addDays * 24 * 60 * 60 * 1000);
  user.expires = newExp.toISOString().slice(0, 10);
  user.active = true;
  save();
  console.log(`کاربر ${userId} به مدت ${addDays} روز تمدید شد. انقضای جدید: ${user.expires} (${formatShamsi(user.expires)})`);
} else if (cmd === 'close') {
  user.active = false;
  save();
  console.log(`کاربر ${userId} غیرفعال شد.`);
} else if (cmd === 'activate') {
  user.active = true;
  save();
  console.log(`کاربر ${userId} فعال شد.`);
} else if (cmd === 'set') {
  const targetDate = args[2];
  if (!targetDate || !/^\d{4}-\d{2}-\d{2}$/.test(targetDate)) {
    console.error('تاریخ نامعتبر است. فرمت صحیح: YYYY-MM-DD');
    process.exit(1);
  }
  user.expires = targetDate;
  user.active = true;
  save();
  console.log(`تاریخ انقضای کاربر ${userId} به ${targetDate} (${formatShamsi(targetDate)}) تنظیم شد.`);
} else {
  console.error('دستور ناشناخته:', cmd);
  process.exit(1);
}
