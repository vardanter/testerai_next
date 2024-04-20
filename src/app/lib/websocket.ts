import { revalidatePath, revalidateTag } from "next/cache";

export function openWebSocket(token: string | undefined) {
    if (token) {
        return new WebSocket(`ws://127.0.0.1:8000/ws/${token}`);
    }
    return null
}