import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FixItFirst — DIY Guides for People Nobody Taught'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '24px',
            padding: '60px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '88px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            FixItFirst
          </div>
          <div
            style={{
              fontSize: '34px',
              color: 'rgba(255,255,255,0.88)',
              marginTop: '20px',
              fontWeight: 500,
              maxWidth: '700px',
              lineHeight: 1.3,
            }}
          >
            DIY Guides for People Nobody Taught
          </div>
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.65)',
              marginTop: '16px',
              fontWeight: 400,
            }}
          >
            fixit-first.co.uk
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
