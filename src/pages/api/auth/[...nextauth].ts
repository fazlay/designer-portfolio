
import { AuthOptions, DefaultUser } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { decoderFunction } from '@/lib/decode';
import httpClient from '@/lib/http-client';

// const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

// type UserCredential = {
//     email: string;
//     password: string;
// };

declare module 'next-auth' {
    interface Session {
        accessToken: string;
    }
    interface User extends DefaultUser {
        // refreshToken: string;
        accessToken: string;
        // user: object;
        needsPasswordChange: boolean;
    }
}

// async function refreshAccessToken(tokenObject: any) {
//     try {
//         const response = await httpClient.post('/api/v1/auth/refresh/', { refresh: tokenObject.refreshToken });

//         tokenObject.accessToken = response.data.access;
//         tokenObject.refreshToken = response.data.refresh;

//         return tokenObject;
//     } catch (error) {
//         return tokenObject;
//     }
// }

export const authOptions: AuthOptions = {
    // session: {
    //     strategy: 'jwt',
    //     // maxAge: 30 * 24 * 60 * 60, // 30 days
    // },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                id: { label: 'email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
        
                const _credential = credentials as any;
                const credentialDetails = {
                    email: _credential.email,
                    password: _credential.password,
                };
            
                // const resp = await httpClient.post('api/v1/auth/login', {"id":'ere',"password":"dfd"})
                let resp
                try {
                   resp = await httpClient.post('/auth/login',credentialDetails );
                  
                   
                  // Code to handle a successful response
                } catch (error) {
                  // Code to handle an error
                  console.error('Error:', error);
                }
                const user = resp?.data;
             
                if (user && user.statusCode == 200) {
               
                    const usersData = user.data;
                    console.log('usersData',usersData)
                    return usersData;
                } else {
                    return null;
                }
            },
        }),
    ],
   

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        jwt: async ({ token, user }) => {
            //  console.log("FROM jwt-->",user,'|',token)
            const jwtKen = user?.accessToken;
            const decodedToken = decoderFunction(jwtKen);
            // const textAtom = atom('hello')
            // const [text, setText] = useAtom(textAtom)
            // setText(decodedToken)
            if (user) {
                //  token.refreshToken = user.data.refresh;
                token.accessToken = user?.accessToken;
            }
           
          //  implement refresh here

            // if (isDateExpired(decodedToken && decodedToken.exp) && token) {
            //     token = await refreshAccessToken(token);
            // }

            token.details = decodedToken;
            return token;
        },

        session: ({ session, token }:any) => {
        
            if (token) {
                 session.user.accessToken = token.accessToken;
                // session.user.username = token.details.user.username;
                // session.user.user_id = token.details.user_id;
                // session.user.branch = token.details.user.branch;
                // session.user.role = token.details.user.role;
              
             
            }
            return session;
        },
    },

    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },

    pages: {
        signIn: '/login',
    },
};

export default NextAuth(authOptions);
