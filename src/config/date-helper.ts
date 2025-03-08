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

  static isBefore(endTime: string, endDate?: string) {
    if (!this.isValidHoursFormat(endTime)) {
      throw new Error("El formato de 'endTime' no es válido. Se espera hh:mm.");
    }
    if (endDate && !this.isValidFullDateFormat(endDate)) {
      throw new Error("El formato de 'endDate' no es válido. Se espera yyyy-mm-dd.");
    }

    const referenceDate = endDate ? this.getFullDate(endDate) : new Date();
    const endDateTime = this.getHoursAndMins(endTime, referenceDate);

    return isBefore(endDateTime, new Date());
  }

  static isWithinInterval(
    startTime: string,
    endTime: string,
    startDate?: string,
    endDate?: string,
  ) {
    if (!this.isValidHoursFormat(startTime)) {
      throw new Error("El formato de 'startTime' no es válido. Se espera hh:mm.");
    }
    if (!this.isValidHoursFormat(endTime)) {
      throw new Error("El formato de 'endTime' no es válido. Se espera hh:mm.");
    }
    if (startDate && !this.isValidFullDateFormat(startDate)) {
      throw new Error("El formato de 'startDate' no es válido. Se espera yyyy-mm-dd.");
    }
    if (endDate && !this.isValidFullDateFormat(endDate)) {
      throw new Error("El formato de 'endDate' no es válido. Se espera yyyy-mm-dd.");
    }

    const now = new Date();
    const referenceStartDate = startDate ? this.getFullDate(startDate) : now;
    const referenceEndDate = endDate ? this.getFullDate(endDate) : now;

    return isWithinInterval(now, {
      start: this.getHoursAndMins(startTime, referenceStartDate),
      end: this.getHoursAndMins(endTime, referenceEndDate),
    });
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

// static isBefore(endTime: string, endDate?: string) {
//   if (!this.isValidHoursFormat(endTime)) {
//     throw new Error("El formato de 'endTime' no es válido. Se espera hh:mm.");
//   }
//   if (endDate && !this.isValidFullDateFormat(endDate)) {
//     throw new Error("El formato de 'endDate' no es válido. Se espera yyyy-mm-dd.");
//   }

//   const referenceDate = endDate ? this.getFullDate(endDate) : new Date();
//   const endDateTime = this.getHoursAndMins(endTime, referenceDate);

//   return isBefore(endDateTime, new Date());
// }

// static isAfter(startTime: string, startDate?: string) {
//   if (!this.isValidHoursFormat(startTime)) {
//     throw new Error("El formato de 'startTime' no es válido. Se espera hh:mm.");
//   }
//   if (startDate && !this.isValidFullDateFormat(startDate)) {
//     throw new Error("El formato de 'startDate' no es válido. Se espera yyyy-mm-dd.");
//   }

//   const referenceDate = startDate ? this.getFullDate(startDate) : new Date();
//   const startDateTime = this.getHoursAndMins(startTime, referenceDate);

//   return isAfter(startDateTime, new Date());
// }

// static isFutureDateTime(date: string, time: string): boolean {
//   if (!this.isValidFullDateFormat(date)) {
//     throw new Error("El formato de 'date' no es válido. Se espera yyyy-mm-dd.");
//   }
//   if (!this.isValidHoursFormat(time)) {
//     throw new Error("El formato de 'time' no es válido. Se espera hh:mm.");
//   }

//   const providedDateTime = this.getHoursAndMins(time, this.getFullDate(date));
//   return isAfter(providedDateTime, new Date());
// }

// static isPastDateTime(date: string, time: string): boolean {
//   if (!this.isValidFullDateFormat(date)) {
//     throw new Error("El formato de 'date' no es válido. Se espera yyyy-mm-dd.");
//   }
//   if (!this.isValidHoursFormat(time)) {
//     throw new Error("El formato de 'time' no es válido. Se espera hh:mm.");
//   }

//   const providedDateTime = this.getHoursAndMins(time, this.getFullDate(date));
//   return isBefore(providedDateTime, new Date());
// }
