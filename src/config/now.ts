type IntlFormatOptions = Intl.DateTimeFormatOptions;
type Format = keyof typeof DATE_FORMATS;

export default class Now {
  public currentDate: Date;

  constructor(date?: Date) {
    this.currentDate = date ?? new Date();
  }

  public format(date: Date, format: Format = "dd-mm-yyyy") {
    if (format === "yyyy-mm-dd") return date.toISOString().split("T")[0];

    const output = this.config("es-CL", {
      ...(DATE_FORMATS[format] as any),
    }).format(date);

    return output;
  }

  public valueOf(): Date {
    return this.currentDate;
  }

  private config(locale: string, options?: IntlFormatOptions) {
    return new Intl.DateTimeFormat(locale, options);
  }
}

const DATE_FORMATS = {
  "yyyy-mm-dd": { year: "numeric", month: "2-digit", day: "2-digit" },
  day_complete: { weekday: "short", day: "numeric" },
  month_year: { month: "long", year: "numeric" },
  "dd-of-mmmm-of-yyyy": { dateStyle: "long" },
  month_name: { month: "long" },
  "dd-mm-yyyy": {},
};
