import styled from "styled-components";

import Styles from "../../shared/globalStyles";

const MainWrapper = styled.div`
  padding: 0 40px;
  margin-bottom: 10px;
`;

const NoteTextWrapper = styled.div`
  border: solid 1px white;
  margin-top: 20px;
  min-height: 200px;
  background: white;
`;

const NoteText = styled.p`
  padding-left: 10px;
`;

const ActionWrapper = styled.div`
  flex: inherit;
  ${Styles.ActionWrapper}
`;

const Button = styled.button`
  ${Styles.Button}
`;

const _ = { MainWrapper, NoteTextWrapper, NoteText, ActionWrapper, Button };

export default _;
