import { NextResponse } from "next/server";


console.log(process.env.API_KEY);



export async function GET() {
  //Extract data
  //query databe
  //comminite with other services

  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await data.json();
  return NextResponse.json(res)

//   return NextResponse.json({
//     message: "Obteniendo Data",
//   });
}

export function POST(request) {
  
    const data = request.json()
  console.log(data);
  
    return NextResponse.json({
    message: "Creando Data",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando Daata",
  });
}
export function DELETE() {
  return NextResponse.json({
    message: "Eliminando Data",
  });
}
