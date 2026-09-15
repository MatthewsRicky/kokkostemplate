import { Resend } from "resend";
import ContactEmail from "@/components/email/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedEnquiries = [
  "General enquiry",
  "Reservations",
  "Cakes & special occasions",
  "Catering",
  "Private event",
  "Other",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const enquiry = String(body.enquiry ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Honeypot field.
    if (website) {
      return Response.json({ success: true });
    }

    if (!name || !email || !enquiry || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!allowedEnquiries.includes(enquiry)) {
      return Response.json({ error: "Invalid enquiry type." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `New website enquiry — ${enquiry}`,
      react: ContactEmail({
        name,
        email,
        phone,
        enquiry,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Unable to send your message right now." },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
