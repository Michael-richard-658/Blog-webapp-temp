import { NextResponse,NextRequest } from "next/server";


    interface Blog {
        title:string,
        content:string
    }

    export async function POST(request:NextRequest) {
        const reqBody = await request.json()
        const Blog:Blog = {id:Date.now(),...reqBody}
        console.log(Blog)
      
        return NextResponse.json({message:"true",success:true})
    }