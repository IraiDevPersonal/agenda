import { format as dateFormat, FormatOptions } from "date-fns";
import { es } from "date-fns/locale";

type CurrentDate = Date;

type DateFormatOptions = {
  format?: keyof typeof DATE_FORMATS;
  options?: FormatOptions;
  date?: CurrentDate;
};

export default class DateFns {
  public currentDate: CurrentDate;

  constructor(date?: CurrentDate) {
    this.currentDate = date ?? new Date();
  }

  public format({
    format = "day_month_year",
    options,
    date,
  }: DateFormatOptions) {
    return dateFormat(date ?? this.currentDate, DATE_FORMATS[format], {
      ...options,
      locale: es,
    });
  }

  public valueOf(): Date {
    return this.currentDate;
  }
}

const DATE_FORMATS = {
  year: "yyyy",
  month: "MMMM",
  day: "d",
  day_month_year: "d-MM-yyyy",
  year_month_day: "yyyy-MM-d",
  month_year: "MMMM yyyy",
  full_date_es: "d 'de' MMMM 'de' yyyy",
};
