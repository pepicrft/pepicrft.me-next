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
            letterSpacing: '-.02em',
            fontWeight: 700,
            background: 'white',
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              color: '',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                backgroundImage: 'linear-gradient(90deg, #08203e, #524175)',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              pepicrft.me
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px 50px',
              margin: '0 42px',
              fontSize: 40,
              width: 'auto',
              maxWidth: 550,
              textAlign: 'center',
              backgroundImage: 'linear-gradient(to right, #295270, #524175)',
              color: 'white',
              lineHeight: 1.4,
            }}
          >
            {hasTitle}
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
