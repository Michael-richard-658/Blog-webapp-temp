import { NextResponse,NextRequest } from "next/server";


    interface Blog {
        title:string,
        content:string
    }
    let blogs:Blog[] = [];

    export async function POST(request:NextRequest) {
        const reqBody = await request.json()
        const Blog:Blog = {id:Date.now(),...reqBody}
        blogs.push(Blog)
        console.log(blogs)
      
        return NextResponse.json({message:"true",success:true})
    }
    export async function GET(request:NextRequest) {
        return NextResponse.json(blogs)
    }