export async function GET() {
  try {
    const response = await fetch('https://bosko-back.abag.tech/health', {
      next: { revalidate: 30 },
    })

    if (!response.ok) {
      return Response.json({ status: 'error' }, { status: 200 })
    }

    const data = await response.json()
    return Response.json(data, { status: 200 })
  } catch (error) {
    return Response.json({ status: 'error' }, { status: 200 })
  }
}
