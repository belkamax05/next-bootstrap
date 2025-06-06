/** customerIp */
export async function GET(req: Request) {
  const requestHeaderIp = req.headers.get('x-forwarded-for');
  const ip =
    typeof requestHeaderIp === 'string'
      ? requestHeaderIp.split(',')[0].trim()
      : Array.isArray(requestHeaderIp) && requestHeaderIp[0];

  if (ip)
    return new Response(JSON.stringify({ ip }), {
      status: 200,
    });
  return new Response(JSON.stringify({ error: 'IP not found' }), {
    status: 404,
  });
}
