import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

const Title = styled("h1")`
  color: #333;
  font-size: 2rem;
`;

export default function Page1() {
  return (
    <main style={{ padding: "2rem", "font-family": "sans-serif" }}>
      <h1>Page 1 — Hello World</h1>
      <Title>Page 1 — Hello World</Title>
      <p>
        <A href="/page2">Aller vers la page 2</A>
      </p>
    </main>
  );
}