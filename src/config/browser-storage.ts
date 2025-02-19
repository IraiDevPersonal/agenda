export type StorageType = "local-storage" | "session-storage";

export default class BrowserStorage {
  constructor(
    public readonly key: string,
    private readonly storageType: StorageType = "local-storage",
  ) {}

  private storage =
    this.storageType === "local-storage" ? window.localStorage : window.sessionStorage;

  public save<T>(value: T) {
    const parseValue = typeof value === "string" ? value : JSON.stringify(value);
    this.storage.setItem(this.key, parseValue);
  }

  public get<T>(defaultValue?: T) {
    const value = this.getAsString();
    if (!value) return defaultValue ?? null;
    try {
      return JSON.parse(value) as T;
    } catch (_) {
      return value as T;
    }
  }

  public getAsString() {
    const value = this.storage.getItem(this.key) ?? "";
    return value;
  }

  public remove() {
    this.storage.removeItem(this.key);
  }

  public hasValue() {
    return !!this.getAsString();
  }
}
