import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, budget, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Among Web Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${name} – Among Web`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #2563eb; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Website Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Submitted via AmongWeb.net contact form</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 14px; color: #64748b; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 14px; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 14px; color: #64748b; vertical-align: top;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${phone}</td>
              </tr>` : ''}
              ${service ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 14px; color: #64748b; vertical-align: top;">Service</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${service}</td>
              </tr>` : ''}
              ${budget ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 14px; color: #64748b; vertical-align: top;">Budget</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${budget}</td>
              </tr>` : ''}
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 14px; color: #64748b; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #0f172a; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${email}" style="display: inline-block; background: #2563eb; color: white; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 8px;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
