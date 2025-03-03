import { format as dateFormat, setDefaultOptions, DateArg } from "date-fns";
import { es } from "date-fns/locale";

setDefaultOptions({ locale: es });

type Format = keyof typeof DATE_FORMATS;

export default class DateHelper {
  public static format(date: DateArg<Date> | null, format: Format = "dd-mm-yyyy") {
    return dateFormat(date ?? new Date(), DATE_FORMATS[format]);
  }

  public static getFullDate(value: string) {
    if (!this.isValidDateFormat(value)) {
      throw new Error(
        "EL formato proporcionado no es el esperado, formato debe ser: yyyy-mm-dd",
      );
    }
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  private static isValidDateFormat(
    value: string,
  ): value is `${number}-${number}-${number}` {
    return /^\d{4}-\d{1,2}-\d{1,2}$/.test(value);
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
