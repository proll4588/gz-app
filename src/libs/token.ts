import isJwtTokenExpired from 'jwt-check-expiry';
import { authUpdateToken } from '../api/auth/fetch';

export type Token = string;
export interface Tokens {
  accessToken: Token;
  refreshToken: Token;
}

export class TokenController {
  localStorageKey: string;

  constructor(localStorageKey: string) {
    this.localStorageKey = localStorageKey;
  }

  private getFromStorage(): Tokens | null {
    const storageData = localStorage.getItem(this.localStorageKey);
    if (!storageData) return null;

    try {
      const parsedData = JSON.parse(storageData);
      if (
        parsedData.accessToken !== undefined &&
        parsedData.refreshToken !== undefined
      ) {
        return parsedData as Tokens;
      } else {
        this.clear();
        return null;
      }
    } catch (error) {
      this.clear();
      return null;
    }
  }

  async get(): Promise<Token | null> {
    const storeTokens = this.getFromStorage();
    if (!storeTokens) return null;
    const { accessToken, refreshToken } = storeTokens;

    if (!isJwtTokenExpired(accessToken)) return accessToken;

    const newToken = await authUpdateToken({ refreshToken });
    if (newToken.status !== 200) {
      this.clear();
      return null;
    }

    this.set({
      accessToken: newToken.data.accessToken,
      refreshToken: refreshToken,
    });

    return newToken.data.accessToken;
  }

  set(tokens: Tokens): void {
    const preparedData = JSON.stringify(tokens);
    localStorage.setItem(this.localStorageKey, preparedData);
  }

  clear(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}

const AUTH_STORAGE_KEY = 'AUTH_DATA';
export const authToken = new TokenController(AUTH_STORAGE_KEY);
