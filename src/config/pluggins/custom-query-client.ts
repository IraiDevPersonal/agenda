import { DefaultOptions, QueryClient } from "@tanstack/react-query";
import Notify from "./notify";
import HttpHelper from "./http-helper";

export class CustomQueryClient extends QueryClient {
  constructor() {
    super({
      defaultOptions: CustomQueryClient.getDefaultOptions(),
    });
  }

  private static getDefaultOptions(): DefaultOptions {
    return {
      queries: {
        retry: 1,
        throwOnError(error) {
          const errorMessage = HttpHelper.getErrorMessage(error);
          Notify.error(errorMessage, { duration: 4000 });

          // TODO: return false para que la aplicacion no caiga despues del error
          return false;
        },
      },
    };
  }
}
