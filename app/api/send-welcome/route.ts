import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const FIRST_GUIDE_URL = 'https://fixitfirst.co.uk/guides/fix-a-dripping-tap'
const FROM = 'FixItFirst <hello@fixitfirst.co.uk>'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to FixItFirst</title>
</head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#111827;padding:32px 40px;text-align:center;">
              <span style="font-size:28px;font-weight:800;color:#f97316;letter-spacing:-0.5px;">FixItFirst</span>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:48px 40px 32px;text-align:center;">
              <p style="margin:0 0 16px;font-size:14px;font-weight:600;color:#f97316;text-transform:uppercase;letter-spacing:1px;">Welcome aboard</p>
              <h1 style="margin:0 0 16px;font-size:32px;font-weight:800;color:#111827;line-height:1.2;">
                Nobody taught you.<br/>We will.
              </h1>
              <p style="margin:0;font-size:16px;color:#6b7280;line-height:1.6;">
                Every Monday you'll get one fix — a skill that saves you money, time, and the embarrassment of waiting three weeks for a plumber.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:#f3f4f6;"></div>
            </td>
          </tr>

          <!-- First guide CTA -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Your first fix</p>
              <h2 style="margin:0 0 8px;font-size:20px;font-weight:700;color:#111827;">How to fix a dripping tap</h2>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.6;">
                A dripping tap wastes up to 5,500 litres of water a year and costs £30–£60 more on your bill. Takes 45 minutes, costs under £5 in parts. This is the one to start with.
              </p>
              <a href="${FIRST_GUIDE_URL}"
                 style="display:inline-block;background:#f97316;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:10px;">
                Read the guide &rarr;
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:#f3f4f6;"></div>
            </td>
          </tr>

          <!-- What's coming -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 16px;font-size:13px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">What to expect</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding:8px 0;font-size:15px;color:#374151;">🔧 &nbsp;<strong>Fix of the week</strong> — one seasonal job, fully explained</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:15px;color:#374151;">💰 &nbsp;<strong>Money-saving tips</strong> — when to DIY, when to call a pro</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-size:15px;color:#374151;">📚 &nbsp;<strong>New guides</strong> — first to know when new skills land</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:24px 40px;text-align:center;border-top:1px solid #f3f4f6;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                You signed up at <a href="https://fixitfirst.co.uk" style="color:#f97316;text-decoration:none;">fixitfirst.co.uk</a>.<br/>
                Free forever. <a href="#" style="color:#9ca3af;">Unsubscribe</a> any time with one click.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

  const { error } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Welcome to FixItFirst — nobody taught you. We will.',
    html,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
