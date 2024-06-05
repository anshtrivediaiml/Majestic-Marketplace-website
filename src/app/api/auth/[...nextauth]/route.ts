//Usage of the next Auth feature is done in this file and all the other files use the function authOptions to check if the user is an authenticated user or not while creating a session using getServerSession using next/auth.
//The handler function is exported to be used in the other files.

import NextAuth from "next-auth/next";   
import { authOptions } from "../../../../utils/authOptions";
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}