import axios from 'axios';
import { getSession } from 'next-auth/react';

// import { env } from '../env.mjs';

// const NEXT_PUBLIC_BACKEND_API_URL='http://localhost:5000/api/v1'
const NEXT_PUBLIC_BACKEND_API_URL='https://api.admaze.ca/api/v1'

const httpClient = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_API_URL,

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

httpClient.interceptors.request.use(async (request) => {
    const session:any = await getSession();

    if (session) {
        request.headers.Authorization = `Bearer ${session?.user?.accessToken}`;
    }
    return request;
});

export default httpClient;

export const BASE_URL = NEXT_PUBLIC_BACKEND_API_URL;
