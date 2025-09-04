import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const company = formData.get('company') as string
    const projectType = formData.get('projectType') as string
    const projectSize = formData.get('projectSize') as string
    const timeline = formData.get('timeline') as string
    const budget = formData.get('budget') as string
    const description = formData.get('description') as string
    
    // Get uploaded files
    const files = formData.getAll('files') as File[]

    // Validate required fields
    if (!name || !email || !phone || !projectType || !description) {
      return NextResponse.json(
        { error: 'Name, email, phone, project type, and description are required' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Prepare email attachments
    const attachments = await Promise.all(files.map(async file => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer())
    })))

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request: ${projectType} Project`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ec3237;">New Quote Request</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Client Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Details:</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Project Size:</strong> ${projectSize || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Project Description:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ec3237;">
              ${description.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          ${files.length > 0 ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Attached Files:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ec3237;">
              ${files.map(file => `
                <div style="margin-bottom: 8px;">
                  <strong>📎 ${file.name}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              `).join('')}
            </div>
            <p style="margin-top: 10px; font-size: 12px; color: #666;">
              Files are attached to this email and can be downloaded directly.
            </p>
          </div>
          ` : ''}
          
          <div style="background-color: #ec3237; color: white; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">This quote request was submitted from the Peridot Services website</p>
          </div>
        </div>
      `,
      attachments: attachments
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Quote request submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Quote form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    )
  }
}
