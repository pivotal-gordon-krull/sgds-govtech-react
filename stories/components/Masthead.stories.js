import React from "react";
import SyntaxHighlighter from "../lib/SyntaxHighlighter";
import { formatCode } from "../lib/utils";
import { Masthead as ComposableMasthead } from "../../src/components/standard";
import { Page, Title, Divider } from "../shared-styles";

const MastheadStories = () => {
  return (
    <Page>
      <Title>
        <h2>Masthead</h2>
      </Title>
      <section className="sgds-section">
        <h3>
          The Masthead informs users that the website they are visiting
          represents the Singapore Government.
        </h3>
        <p>
          It is a DSS component that has to be present in all pages of '.gov.sg'
          websites.
        </p>

        <Divider />

        <h4>Default Masthead</h4>
        <ComposableMasthead />
        <SyntaxHighlighter>
          {formatCode(
            `import { Masthead } from "sgds-govtech-react/dist/standard";

            export default function App() {
              return <Masthead />
            }`
          )}
        </SyntaxHighlighter>

        <Divider />

        <p>
          Use <code>isFluid</code> to remove max-width restrictions on masthead
          contents
        </p>
        <ComposableMasthead isFluid></ComposableMasthead>
        <SyntaxHighlighter>
          {formatCode(`<Masthead isFluid />`)}
        </SyntaxHighlighter>

        <Divider />

        <p>
          Use <code>noLink</code> to remove the default masthead link.
        </p>
        <ComposableMasthead noLink />
        <SyntaxHighlighter>
          {formatCode(`<Masthead noLink />`)}
        </SyntaxHighlighter>
      </section>
    </Page>
  );
};

export default MastheadStories;
