export type Token = string;

export class TokenController {
  localStorageKey: string;

  constructor(localStorageKey: string) {
    this.localStorageKey = localStorageKey;
  }

  get(): Token | null {
    const storageData = localStorage.getItem(this.localStorageKey);
    if (storageData) {
      const parsedStorageData = JSON.parse(storageData) as Token;
      return parsedStorageData;
    } else {
      return null;
    }
  }

  set(token: Token): void {
    const preparedData = JSON.stringify(token);
    localStorage.setItem(this.localStorageKey, preparedData);
  }
}

const AUTH_STORAGE_KEY = 'AUTH_DATA';
export const authToken = new TokenController(AUTH_STORAGE_KEY);
