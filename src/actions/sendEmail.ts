"use server";

import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name) {
    return { error: "name is required" };
  }
  if (!email) {
    return { error: "email is required" };
  }
  if (!subject) {
    return { error: "subject is required" };
  }
  if (!message) {
    return { error: "message is required" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: `gtfol <contact@gtfol.dev>`,
      to: ["team@gtfol.dev"],
      subject: subject,
      html: `
        <body>
          <h1>new contact form submission</h1>
          <p><strong>name:</strong> ${name}</p>
          <p><strong>email:</strong> ${email}</p>
          <p>${message}</p>
        </body>
      `,
    });

    console.log(data);
    return { success: "message sent successfully" };
  } catch (error) {
    console.error("error sending email:", error);
    return { error: "failed to send message" };
  }
}
