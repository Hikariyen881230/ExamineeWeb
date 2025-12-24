import { DateTime, Settings } from 'luxon';

// 台灣的 IANA 時區名稱
const TAIWAN_TIMEZONE = 'Asia/Taipei';
// 台灣的語言環境，確保格式化輸出符合台灣習慣
const TAIWAN_LOCALE = 'zh-TW';
const PRECISION = {
  day: 1,
  hour: 2,
  minute: 3,
  second: 4,
};

/** 將 key 轉成截斷精度 */
function truncate(dt, key) {
  switch (key) {
    case 1: // 天
      return dt.set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).ts;
    case 2: // 小時
      return dt.set({ minute: 0, second: 0, millisecond: 0 }).ts;
    case 3: // 分鐘
    case false: // 預設也可以用 false 表示到分鐘
      return dt.set({ second: 0, millisecond: 0 }).ts;
    case 4: // 秒
      return dt.set({ millisecond: 0 }).ts;
    default: // 不截斷
      return dt.ts;
  }
}

export function GetTime(){
    return DateTime.now().setZone(TAIWAN_TIMEZONE);
}

export function FormatDateTime(datetime,formatStr="yyyy-LL-dd HH:mm:ss"){
    return datetime.toFormat(formatStr);
}

export function AddTime(datetime,value){
    return datetime.plus(value);
}

export function SubtractTime(datetime,value){
    return datetime.minus(value);
}

export function IsAfter(dt1,dt2,type){
   const t1 = truncate(dt1, type);
   const t2 = truncate(dt2, type);
   return t1 > t2;
}

export function IsBefore(dt1,dt2,type){
   const t1 = truncate(dt1, type);
   const t2 = truncate(dt2, type);
   return t1 < t2;
}

export function DiffTime(dt1,dt2,type=3){
      let luxonUnit;

  switch (type) {
    case 1: luxonUnit = "days"; break;
    case 2: luxonUnit = "hours"; break;
    case 3: luxonUnit = "minutes"; break;
    case 4: luxonUnit = "seconds"; break;
    default: luxonUnit = "minutes";
  }
   return Math.floor(dt2.diff(dt1, luxonUnit)[luxonUnit]);
}