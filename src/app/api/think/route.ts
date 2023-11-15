export async function GET(request: Request) {
    console.log('GET');
    console.log(request);
    return Response.json({url:request.url})
  }


export async function POST(request: Request) {
    console.log('POST');
    console.log(request);
    let data = await request.text()
    return Response.json({"text":data})
}