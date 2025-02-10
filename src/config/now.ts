type IntlFormatOptions = Intl.DateTimeFormatOptions;
type Format = keyof typeof DATE_FORMATS;

export default class Now {
  public currentDate: Date;

  constructor(date?: Date) {
    this.currentDate = date ?? new Date();
  }

  public format(date: Date, format: Format = "dd-mm-yyyy") {
    return this.config("es", {
      ...(DATE_FORMATS[format] as any),
    }).format(date);
  }

  public valueOf(): Date {
    return this.currentDate;
  }

  private config(locale: string, options?: IntlFormatOptions) {
    return new Intl.DateTimeFormat(locale, options);
  }
}

const DATE_FORMATS = {
  day_complete: { weekday: "short", day: "numeric" },
  month_year: { month: "long", year: "numeric" },
  "dd-of-mmmm-of-yyyy": { dateStyle: "long" },
  month_name: { month: "long" },
  "dd-mm-yyyy": {},
};
