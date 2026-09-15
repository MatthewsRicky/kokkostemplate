import type { ReactNode } from "react";

type ContactEmailProps = {
  name: string;
  email: string;
  phone?: string;
  enquiry: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  phone,
  enquiry,
  message,
}: ContactEmailProps): ReactNode {
  return (
    <div
      style={{
        margin: 0,
        padding: "40px 20px",
        backgroundColor: "#f5f1e8",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#1c1c19",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          backgroundColor: "#fbf9f4",
          border: "1px solid #ded9ce",
        }}
      >
        <div
          style={{
            padding: "32px 36px",
            backgroundColor: "#1c1c19",
            color: "#f5f1e8",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            KOKKOS
          </div>

          <div
            style={{
              marginTop: "8px",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#d6c4a7",
            }}
          >
            Website enquiry
          </div>
        </div>

        <div style={{ padding: "36px" }}>
          <h1
            style={{
              margin: "0 0 24px",
              fontSize: "30px",
              lineHeight: 1.1,
              fontWeight: 500,
            }}
          >
            New enquiry from {name}
          </h1>

          <div
            style={{
              marginBottom: "28px",
              padding: "20px",
              backgroundColor: "#f5f1e8",
              borderLeft: "3px solid #59654f",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#59654f",
              }}
            >
              Enquiry type
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
              }}
            >
              {enquiry}
            </p>
          </div>

          <div style={{ marginBottom: "28px" }}>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#59654f",
              }}
            >
              Contact details
            </p>

            <p style={{ margin: "0 0 6px", fontSize: "15px" }}>
              <strong>Name:</strong> {name}
            </p>

            <p style={{ margin: "0 0 6px", fontSize: "15px" }}>
              <strong>Email:</strong> {email}
            </p>

            {phone && (
              <p style={{ margin: 0, fontSize: "15px" }}>
                <strong>Phone:</strong> {phone}
              </p>
            )}
          </div>

          <div>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#59654f",
              }}
            >
              Message
            </p>

            <div
              style={{
                padding: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #ded9ce",
                fontSize: "15px",
                lineHeight: 1.7,
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "22px 36px",
            borderTop: "1px solid #ded9ce",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "#77736a",
          }}
        >
          This enquiry was submitted through the Kokkos Café & Bistro website.
          <br />
          Diani Beach Road · Diani Beach, Kenya
        </div>
      </div>
    </div>
  );
}
