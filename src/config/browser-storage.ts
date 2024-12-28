type StorageType = "local-storage" | "session-storage";

export class BrowserStorage {
  constructor(
    public readonly key: string,
    private readonly storageType: StorageType = "local-storage"
  ) {}

  private storage =
    this.storageType === "local-storage"
      ? window.localStorage
      : window.sessionStorage;

  public save<T>(value: T) {
    const parseValue =
      typeof value === "string" ? value : JSON.stringify(value);
    this.storage.setItem(this.key, parseValue);
  }

  public get<T>(defaultValue?: T) {
    const result = this.storage.getItem(this.key) ?? "";
    if (!result) return defaultValue ?? null;
    return JSON.parse(result) as T;
  }

  public remove() {
    this.storage.removeItem(this.key);
  }

  public has() {
    return !!this.get();
  }
}
