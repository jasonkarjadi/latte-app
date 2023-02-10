import { NextMiddleware, NextResponse } from "next/server";

/** @type {NextMiddleware} */

export const middleware = (request, _event) => {
    const { nextUrl, cookies, headers } = request;
    if (nextUrl.pathname.startsWith("/dashboard")) {
      if (cookies.has("refreshToken")) {
        const accessToken = getAccessToken();
        if (accessToken) {
          headers.set("authorization", `Bearer ${accessToken}`);
        }
      } else {
        return NextResponse.redirect("http://localhost:3000");
      }
    }

};
