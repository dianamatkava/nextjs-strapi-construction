import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
          JSON.stringify({ error: 'All fields are required' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
    const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
    const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
    const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
    const DEBUG = process.env.DEBUG;

    const transporter = nodemailer.createTransport({
      host: SMTP_SERVER_HOST,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
      debug: DEBUG,
      logger: true,
      port: Number(SMTP_SERVER_PORT),
      secure: false,
      tls: {
          ciphers: 'SSLv3'
      }
    });

    const mailOptionsRequest = {
      from: SMTP_SERVER_USERNAME,
      to: SMTP_SERVER_USERNAME,
      subject: `Request Form from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };


    const mailOptionsResponse = {
      from: SMTP_SERVER_USERNAME,
      to: email,
      subject: `Thank you for contacting AMESC GROUP`,
      html: `
        <p>Dear ${name},</p>

        <p>Thank you for reaching out to us.</p>
        <p>We have received your message and will process it shortly. Our team is dedicated to responding promptly to all inquiries during our working hours:</p>
        <p><strong>Working Hours:</strong><br>
          Monday to Friday: 9:00 AM - 6:00 PM
        </p>
        <p>Thank you for choosing AMESC GROUP. We appreciate your patience and look forward to assisting you.</p>
        <p>Kind regards,<br>
          The AMESC GROUP Team<br>
          <a href="mailto:info@time4construction.com">info@time4construction.com</a><br>
          <a href="www.timeforconstruction.com" target="_blank">www.timeforconstruction.com</a>
        </p>
      `,
    };

  const responseStatus = sendMail(mailOptionsResponse, transporter)
  const status = sendMail(mailOptionsRequest, transporter)

    if (!responseStatus || !status) {
      return new Response(
          JSON.stringify({ error: 'Internal Server Error' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
      )} else {
        return new Response(
          JSON.stringify({ message: 'Email sent successfully!' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
}


async function sendMail(sendOptions, transporter) {
  try {
      await transporter.sendMail(sendOptions);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
}