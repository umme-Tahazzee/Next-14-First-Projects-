import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) =>{
    const {slug} = params
 
    try {
        connectToDb();
        const post = await Post.findOne({slug})
        return NextResponse.json(post)
        
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fatch post!')
    }
}

export const DELETE = async (request, {params}) =>{
    const {slug} = params
 
    try {
        connectToDb();
        await Post.deleteOne({slug})
        return NextResponse.json('post delete')
        
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fatch post!')
    }
}