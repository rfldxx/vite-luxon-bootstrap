import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { DateTime } from "luxon";
import "./styles.css";

const clockElement = document.querySelector<HTMLDivElement>("#clock");
const dateElement = document.querySelector<HTMLParagraphElement>("#date");
const zoneElement = document.querySelector<HTMLSpanElement>("#zone");

if (!clockElement || !dateElement || !zoneElement) {
  throw new Error("Не найдены элементы часов в HTML");
}

const renderClock = (): void => {
  const now = DateTime.local().setLocale("ru");

  clockElement.textContent = now.toFormat("dd.LL.y HH:mm:ss");
  dateElement.textContent = now.toFormat("cccc, d MMMM yyyy");
  zoneElement.textContent = now.zoneName;
};

renderClock();
window.setInterval(renderClock, 1000);
