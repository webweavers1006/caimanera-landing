import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/config";

export const alt = "Caimanera — tu próximo partido está cerca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_SRC = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/img/caimanera_icon.png")
).toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d1110",
          padding: "68px 76px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(94, 234, 178, 0.22), rgba(13, 17, 16, 0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(124, 93, 250, 0.18), rgba(13, 17, 16, 0))",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img
            src={LOGO_SRC}
            alt=""
            width={64}
            height={64}
            style={{ borderRadius: 18 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f6f8f5", fontSize: 32, fontWeight: 700, letterSpacing: -1.4 }}>
              caimanera<span style={{ color: "#76f7c4" }}>.</span>
            </span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, letterSpacing: 2.6 }}>
              JUEGA CERCA
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              color: "#76f7c4",
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 9, height: 9, borderRadius: 9999, background: "#76f7c4" }} />
            Fútbol 5 · Fútbol 7 · Pádel
          </div>
          <div
            style={{
              display: "flex",
              color: "#f6f8f5",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 0.98,
            }}
          >
            Tu próximo partido
          </div>
          <div
            style={{
              display: "flex",
              color: "#76f7c4",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 0.98,
            }}
          >
            está a la vuelta.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "rgba(255,255,255,0.58)",
              fontSize: 24,
              lineHeight: 1.4,
            }}
          >
            Encuentra canchas, reserva cupos y juega más con un solo pase.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["Hiperlocal", "Cupos reales", "Pago local"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: 17,
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.38)", fontSize: 17 }}>
            {SITE_URL.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
