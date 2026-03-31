import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Among Web – Professional Website Design in Malaysia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: '#020817',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 50%)',
          }}
        />
        {/* Tag */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgba(37,99,235,0.2)',
            border: '1px solid rgba(37,99,235,0.4)',
            borderRadius: '999px',
            padding: '6px 16px',
            marginBottom: '24px',
            color: '#93c5fd',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Professional Web Design · Malaysia
        </div>
        {/* Heading */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '28px',
            maxWidth: '800px',
          }}
        >
          Among Web
        </div>
        {/* Subheading */}
        <div
          style={{
            fontSize: '26px',
            color: '#94a3b8',
            lineHeight: 1.4,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Fast, modern websites for Malaysian businesses. Landing pages, company sites, e-commerce &amp; more.
        </div>
        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#60a5fa', fontSize: '20px', fontWeight: 700 }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            From RM 599
          </div>
          <div style={{ color: '#475569', fontSize: '20px' }}>·</div>
          <div style={{ color: '#94a3b8', fontSize: '20px' }}>3-Day Delivery</div>
          <div style={{ color: '#475569', fontSize: '20px' }}>·</div>
          <div style={{ color: '#94a3b8', fontSize: '20px' }}>SEO on Every Build</div>
        </div>
        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            top: '72px',
            right: '72px',
            color: '#475569',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          amongweb.net
        </div>
      </div>
    ),
    size,
  )
}
