import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

const Notification = (text, type) => {
  createToast(text, {
    position: "top-right",
    type: type,
    timeout: 2000,
    transition: "bounce",
  });
};

export const setNotification = (message, type) => {
  localStorage.setItem(
    "notification",
    JSON.stringify({
      message: message,
      type: type,
    })
  );
};

export const displayNotification = () => {
  const notification = JSON.parse(localStorage.getItem("notification"));
  if (notification) {
    Notification(notification.message, notification.type);
    localStorage.removeItem("notification");
  }
};
