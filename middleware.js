import { NextMiddleware, NextResponse } from "next/server";

/** @type {NextMiddleware} */

export const middleware = (request, _event) => {
  const { nextUrl, cookies } = request;

  if (nextUrl.pathname.startsWith("/dashboard") && !cookies.has("token")) {
    return NextResponse.redirect("http://localhost:3000");
  }
};
