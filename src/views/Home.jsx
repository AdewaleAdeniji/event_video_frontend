import React from "react";
import {
  HintList,
  HintListItem,
  Icon,
  SubContainer,
  InstructionText,
  FormHeader,
  HintListItemText,
} from "../components/List";
import styled from "styled-components";
import { FlexContainer, RightPanel } from "../components/Layout";
import HeaderText from "../components/text/HeaderText";
import checkmark from "../components/images/checkmark.svg";
import theme from "../theme";
import Anchor from "../components/Anchor";

const Home = () => {
  const [key, setKey] = React.useState('');
  const liveStream = (e) => {
    setKey(e.target.value);
  }
  const submit = () => {
    // console.log(key);
      if(key.length < 5){
        alert("Invalid livestream key");
        return;
      }
      window.location.href = `/heyeyeu`;
  } 
  return (
    <FlexContainer>
      <SubContainer>
        <HeaderText>Welcome to Ordaley!</HeaderText>
        <InstructionText>
          Host events, live stream, create outlines and have fun!
        </InstructionText>
        <HintList>
          <HintListItem>
            <Icon src={checkmark} />
            <HintListItemText>
              Create Events
            </HintListItemText>
          </HintListItem>
          <HintListItem>
            <Icon src={checkmark} />
            <HintListItemText>
              Collect Forms from Participants
            </HintListItemText>
          </HintListItem>
          <HintListItem>
            <Icon src={checkmark} />
            <HintListItemText>
             Livesream your event for free
            </HintListItemText>
          </HintListItem>
        </HintList>
      </SubContainer>
      <RightPanel>
        <Form>
        <FormHeader>Enter livestream id to continue!</FormHeader>
        <Label htmlFor="username">Livestream ID</Label>
        <Input id="username" type="text" required onChange={liveStream}/>
        <SubmitButton type="submit" value="Join Livestream!" onClick={submit}/>
          <FormHeader>
            
            Get Started on,{" "}
            <Anchor
              href="https://ordaley.netlify.app"
              color={theme.colors.orange}
            >
             Ordaley!
            </Anchor>
          </FormHeader>
          </Form>
      </RightPanel>
    </FlexContainer>
  );
};
const Label = styled.label`
  font-size: ${theme.fontSize.base};
  color: ${theme.colors.greyDark};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${theme.colors.grey};
  font-family: ${theme.fontFamily.regular};
`;
const SubmitButton = styled.input`
  padding: 0.4rem 1rem 0.5rem;
  border-radius: 6px;
  background-color: ${theme.colors.turquoise};
  border: 1px solid ${theme.colors.turquoise};
  color: ${theme.colors.blueDark};
  margin-top: 2rem;
  margin-left: auto;
  cursor: pointer;
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.base};

  &:hover {
    border: 1px solid ${theme.colors.teal};
  }
  &:disabled {
    opacity: 0.5;
  }
`;
const Form = styled.form`
  margin-top: 4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  background-color: ${theme.colors.white};
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.06),
    0 16px 32px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;

  @media (max-width: 996px) {
    margin-left: 0rem;
  }
`;
export default Home;
