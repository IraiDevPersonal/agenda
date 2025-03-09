import { ExternalToast, toast } from "sonner";

export default class Notify {
  private static defaultOptions: ExternalToast = {
    duration: 2000,
    position: "bottom-center",
  };

  static message(msg: string, options?: ExternalToast) {
    toast(msg, { ...this.defaultOptions, ...options });
  }

  static error(msg: string, options?: ExternalToast) {
    toast.error(msg, { ...this.defaultOptions, ...options });
  }

  static warning(msg: string, options?: ExternalToast) {
    toast.warning(msg, { ...this.defaultOptions, ...options });
  }

  static info(msg: string, options?: ExternalToast) {
    toast.info(msg, { ...this.defaultOptions, ...options });
  }

  static success(msg: string, options?: ExternalToast) {
    toast.success(msg, { ...this.defaultOptions, ...options });
  }
}
