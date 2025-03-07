import {
  format as dateFormat,
  isEqual,
  isBefore,
  set,
  isWithinInterval,
  setDefaultOptions,
  DateArg,
} from "date-fns";
import { es } from "date-fns/locale";

setDefaultOptions({ locale: es });

type Format = keyof typeof DATE_FORMATS;

export default class DateHelper {
  static format(date: DateArg<Date> | null, format: Format = "dd-mm-yyyy") {
    return dateFormat(date ?? new Date(), DATE_FORMATS[format]);
  }

  static isEqual(a: Date, b: Date) {
    return isEqual(a, b);
  }

  static isWithinInterval(start: string, end: string) {
    if (!this.isValidHoursFormat(start)) {
      throw new Error("El formato proporcionado para 'start' no es el esperado: hh:mm");
    }
    if (!this.isValidHoursFormat(end)) {
      throw new Error("El formato proporcionado para 'end' no es el esperado: hh:mm");
    }

    const now = new Date();

    return isWithinInterval(now, {
      start: this.getHoursAndMins(start, now),
      end: this.getHoursAndMins(end, now),
    });
  }

  static isBefore(end: string) {
    if (!this.isValidHoursFormat(end)) {
      throw new Error("El formato proporcionado para 'end' no es el esperado: hh:mm");
    }

    const now = new Date();

    return isBefore(this.getHoursAndMins(end, now), now);
  }

  static getFullDate(value: string) {
    if (!this.isValidFullDateFormat(value)) {
      throw new Error(
        "EL formato proporcionado no es el esperado, formato debe ser: yyyy-mm-dd",
      );
    }
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  private static getHoursAndMins(value: string, now: Date) {
    const [hours, minutes] = value.split(":").map(Number);
    const currentValue = set(now, { hours, minutes, seconds: 0 });

    return currentValue;
  }

  private static isValidFullDateFormat(
    value: string,
  ): value is `${number}-${number}-${number}` {
    return /^\d{4}-\d{1,2}-\d{1,2}$/.test(value);
  }

  private static isValidHoursFormat(value: string): value is `${number}:${number}` {
    return /^\d{2}:\d{2}$/.test(value);
  }
}

const DATE_FORMATS = {
  "dd-of-mmmm-of-yyyy": "dd 'de' MMMM 'de' yyyy",
  "dd-mm-yyyy": "dd-MM-yyyy",
  "yyyy-mm-dd": "yyyy-MM-dd",
  full_month_year: "MMMM yyyy",
  year_month: "yyyy-MM",
  month_name: "MMMM",
  month_number: "MM",
  day_number: "dd",
  year_number: "yyyy",
};
