import moment from "moment";
export function FormatDate(date) {
  return moment(date).format("YYYY-MM-DD");
}
export function FormatTime(time) {
  let hour = `${parseInt(time / 60)}`.padStart(2, 0);
  let minute = `${time % 60}`.padStart(2, 0);
  let result = `${hour}:${minute}`;
  return result;
}
export function FormatDateAttendance(data) {
  return moment(data).format("DD.MM");
}
