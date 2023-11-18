import { getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

import { decoderFunction } from '@/lib/decode';

interface UserDetails {
  email: string;
  exp: number;
  iat: number;
  role: string; 
  userDetails: string;
  fname: string;
  lname: string;
}

const useUserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "string",
    exp: 1,
    iat: 1,
    role: 'string', 
    userDetails: 'string',
    fname: 'string',
    lname: 'string',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session: any = await getSession();
        const decodedToken = decoderFunction(session?.user?.accessToken);
        setUserDetails(decodedToken);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userDetails, loading };
};

export default useUserDetails;
