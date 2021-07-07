import styled from "styled-components";

import Styles from "../../shared/globalStyles";

const MainWrapper = styled.div`
  display: flex;
  padding: 0 40px;
  margin-bottom: 10px;
`;

const NoteTextWrapper = styled.div`
  background: #00801d1a;
  flex: 1;
  cursor: pointer;
`;

const NoteText = styled.p`
  color: #fff;
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
