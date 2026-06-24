import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAF8F3",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 10,
            top: 16,
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: "3px solid #6F8159",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 32,
            top: 6,
            width: 21,
            height: 21,
            borderRadius: "50%",
            border: "3px solid #6F8159",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 21,
            top: 31,
            width: 23,
            height: 23,
            borderRadius: "50%",
            background: "#6F8159",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 42,
            top: 30,
            width: 15,
            height: 15,
            borderRadius: "50%",
            border: "3px solid #6F8159",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
