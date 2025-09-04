# Email Setup Instructions

## Setting up Email for Contact and Quote Forms

To enable email functionality for the contact and quote forms, follow these steps:

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 2. Gmail App Password Setup

For Gmail, you need to use an App Password instead of your regular password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable **2-Step Verification** if not already enabled
3. Go to **Security** > **App passwords**
4. Select "Mail" as the app and "Other" as the device
5. Generate the app password
6. Copy the generated password and use it in `EMAIL_PASS`

### 3. Alternative Email Services

You can also use other email services by modifying the transporter configuration in the API routes:

#### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

#### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

### 4. Testing

After setup:
1. Start your development server: `npm run dev`
2. Fill out and submit the contact form at `/contact`
3. Fill out and submit the quote form at `/quote`
4. Check your email for the form submissions

### 5. Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use environment variables for all sensitive information
- Consider using a dedicated email service like SendGrid for production

### 6. Production Deployment

For production deployment:
- Set the environment variables in your hosting platform (Vercel, Netlify, etc.)
- Consider using a transactional email service like SendGrid or Mailgun
- Implement rate limiting to prevent spam
- Add CAPTCHA or other anti-spam measures
