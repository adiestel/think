export async function POST(request: Request) {
    let data = await request.json()
    return Response.json(data)
}