'use server'

import { cookies } from "next/headers"
import { revalidatePath, revalidateTag } from "next/cache"

export async function checkMessage(formData: FormData) {
    const accessToken = cookies().get("access-token")?.value
    const data = Object.fromEntries(formData)
    
    try {
        const response = await fetch(`${process.env.API_HOST}/messages`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({text: data.message})
        })
        
        if (response.ok) {
            revalidateTag("messages")
            // return responseData
        }
    } catch (error) {
        console.log("error", error)
    }
}

export async function serverSignOut () {
    cookies().delete("access-token")
    revalidateTag("messages")
}


export async function updateChatData() {
    revalidateTag('messages')
}


export async function uploadFile(formData: FormData) {
    try {
        const accessToken = cookies().get("access-token")?.value
        if (accessToken) {
            const data = Object.fromEntries(formData)
            console.log("formdata", data)
            const response = await fetch(`${process.env.API_HOST}/file/upload`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            })
            const responseData = await response.json()
            console.log(responseData)
            if (response.ok) {
                revalidateTag("messages")
            } 
        }
      } catch (error) {
        console.error("Error:", error);
      }
}