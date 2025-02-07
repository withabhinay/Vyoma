import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #0E0C15, #1A123E)" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "6rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}>Create Account</h1>
          <p style={{ marginTop: "0.5rem", color: "#A0A0A0" }}>Join Brainwave to explore AI possibilities</p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            style={{
              width: "100%",
              backgroundColor: "#1C1C2E",
              border: "1px solid #2A2A3C",
              color: "white",
              padding: "0.75rem",
              borderRadius: "5px",
            }}
          />

          <Input
            name="email"
            type="email"
            required
            placeholder="Email address"
            style={{
              width: "100%",
              backgroundColor: "#1C1C2E",
              border: "1px solid #2A2A3C",
              color: "white",
              padding: "0.75rem",
              borderRadius: "5px",
            }}
          />

          <Input
            name="password"
            type="password"
            required
            placeholder="Password"
            style={{
              width: "100%",
              backgroundColor: "#1C1C2E",
              border: "1px solid #2A2A3C",
              color: "white",
              padding: "0.75rem",
              borderRadius: "5px",
            }}
          />

          <Button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(to right, #9333ea, #4f46e5)",
              color: "white",
              padding: "0.75rem",
              fontWeight: "bold",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Create Account
          </Button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#A0A0A0" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#9333ea", textDecoration: "none" }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}