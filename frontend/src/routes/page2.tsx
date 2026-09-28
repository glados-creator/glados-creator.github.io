// src/routes/page2.tsx
import { A } from "@solidjs/router";

export default function Page2() {
  return (
    <main style={{ padding: "2rem", "font-family": "sans-serif" }}>
      <h1>Page 2 — Hello World</h1>
      <p>
        <A href="/">Retour à la page 1</A>
      </p>
    </main>
  );
}