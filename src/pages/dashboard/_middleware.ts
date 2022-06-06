import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = "http://localhost:3003/";

  if (!request.cookies["token"]) return NextResponse.redirect(url);

  const cookieToken = JSON.parse(request.cookies["token"]).token;
  const tokenDB =
    "NA.WjMp2CgdItpMUfvHm2T78ycbFOn6ByGpXGVZrRou9AZ3Faf-JJdHbfxxBFYj";

  if (cookieToken === tokenDB) return NextResponse.next();
  else return NextResponse.redirect(url);
}
