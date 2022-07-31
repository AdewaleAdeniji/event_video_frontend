import Anchor from "../components/Anchor";
import BodyText from "../components/text/BodyText";
import styled from "styled-components";
import theme from "../theme";

const InCallSupportMessage = () => (
  <>
  <HelpText>
    Created with {" "}
    <Anchor
      href="https://ordaley.netlify.app"
      color={theme.colors.orange}
    >
      Ordaley</Anchor>
  </HelpText>
  <HelpText>
    Having trouble connecting?{" "}
    <Anchor
      href="https://help.daily.co/en/articles/2303117-top-troubleshooting-5-tips-that-solve-99-of-issues"
      color={theme.colors.orange}
    >
      Try these fast tips
    </Anchor>
    , or{" "}
    <Anchor
      href="mailto:info.ordaley@gmail.com"
      color={theme.colors.orange}
    >
      contact our support {" "}
    </Anchor>
     via email.
  </HelpText>
  </>
);

const HelpText = styled(BodyText)`
  margin: .2rem;
  margin-left: 1rem;
  padding:2px;
`;

export default InCallSupportMessage;
