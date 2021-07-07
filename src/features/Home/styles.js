import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 20px;
`;

const Header = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const NotesWrapper = styled.div`
  overflow: scroll;
  max-height: 78vh;
`;

const NoContentWrapper = styled.div``;

const NoContent = styled.p`
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  margin-top: 20px;
  width: 100% !important;
`;

const _ = { Header, MainWrapper, NotesWrapper, NoContentWrapper, NoContent };

export default _;
