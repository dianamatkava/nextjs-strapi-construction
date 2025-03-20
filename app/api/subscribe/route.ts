import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
  const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
  const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
  const DEBUG = process.env.DEBUG;

  const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: Number(SMTP_SERVER_PORT),
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
    debug: DEBUG === "true",
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  });

  let adminEmailSent = false;
  let customerEmailSent = false;

  // Send notification to admin
  try {
    console.log("Starting notification email to admin");
    await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: SMTP_SERVER_USERNAME,
      subject: `[APP] Subscribe request.`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
      `,
    });
    console.log("Admin notification sent successfully");
    adminEmailSent = true;
  } catch (error) {
    console.error("Error sending admin notification:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "Failed to send admin notification",
        step: "admin_notification",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Emails sent successfully!",
      adminEmailSent,
      customerEmailSent,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
