import styled from "styled-components";

import Styles from "../../shared/globalStyles";

const MainWrapper = styled.div``;

const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NoteInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NoteInput = styled.textarea`
  width: 75%;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  ${Styles.ActionWrapper}
`;

const Button = styled.button`
  ${Styles.Button}
`;

const _ = {
  MainWrapper,
  AddButtonWrapper,
  NoteInputWrapper,
  NoteInput,
  ActionWrapper,
  Button,
};

export default _;
