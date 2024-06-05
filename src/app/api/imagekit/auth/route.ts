//This file uses the next/auth function created by us to create a user sessionn and checking that the user is authenticated or not.
//This file is created as a api route for storage of images of different qualities and dimensions in the imagekit server.


import { getServerSession } from "next-auth"
import {authOptions} from '../../../../utils/authOptions';
import ImageKit from "imagekit"

export const GET = async ()=>{
    const session = await getServerSession(authOptions)
    if(!session){
        return Response.json(false)
    }
    const ik = new ImageKit({
        urlEndpoint:process.env.NEXT_PUBLIC_IK_URL_ENDPOINT as string,
        publicKey:process.env.NEXT_PUBLIC_IK_PUBLIC_KEY as string,
        privateKey:process.env.NEXT_PUBLIC_IK_PRIVATE_KEY as string 
    })
    return Response.json(ik.getAuthenticationParameters())
}