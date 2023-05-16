import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'pepicrft.me'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #87f4b5, #93cbf1)',
            fontSize: 60,
            letterSpacing: -2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundImage: 'linear-gradient(90deg, #08203e, #524175)',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
