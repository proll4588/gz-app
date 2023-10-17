export interface LoginResponse {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface UpdateResponse {
  accessToken: string;
}

export interface UpdateRequest {
  refreshToken: string;
}
