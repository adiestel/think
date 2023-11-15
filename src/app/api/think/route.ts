export async function GET(request: Request) {
    return Response.json({url:request.url})
  }


export async function POST(request: Request) {
    let data = await request.text()
    return Response.json({"text":data})
}