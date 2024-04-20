import Dashboard from "@/components/dashboard";
import { cookies } from "next/headers";
import { MESSAGE } from "../types";

export default async function Page() {
  const token = cookies().get("access-token")?.value
  const isLogedIn = !!token
  let messages: MESSAGE[] = []
  if (isLogedIn) {
    try{
      const response = await fetch(`${process.env.API_HOST}/check-user`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        next: {
          tags: ['messages']
        }
      })
      if (response.ok) (
        messages = await response.json()
      )
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  return (
    <div className=" text-white flex lg:flex-row max-sm:flex-col px-4 pt-6 border-t border-solid border-[#494949] justify-between">
      <Dashboard accessToken={token} messages={messages} />
    </div>
  )
}