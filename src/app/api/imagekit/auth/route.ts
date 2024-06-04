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