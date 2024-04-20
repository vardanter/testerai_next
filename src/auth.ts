import NextAuth from "next-auth";
import { authConfig } from "./configs/auth";


export const {handlers, signIn, signOut, auth} = NextAuth(authConfig)