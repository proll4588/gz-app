import axios from 'axios';
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
  UpdateRequest,
  UpdateResponse,
} from './type';

const instanse = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

// instanse.interceptors.request.use(async (req) => {
//   const token = await getAccessToken();
//   req.headers.Authorization = `Bearer ${token}`;

//   return req;
// });

export const authLogin = async (data: LoginRequest) => {
  return await instanse.post<LoginResponse>('/login', data);
};

export const authSignUp = async (data: SignUpRequest) => {
  return await instanse.post<SignUpResponse>('/signUp', data);
};

export const authUpdateToken = async (data: UpdateRequest) => {
  return await instanse.post<UpdateResponse>('/update', data);
};
