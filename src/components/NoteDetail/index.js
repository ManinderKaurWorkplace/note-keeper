import React from "react";

import ComponentStyles from "./styles";

const { MainWrapper, NoteTextWrapper, NoteText, ActionWrapper, Button } =
  ComponentStyles;

const NoteDetail = ({ isViewMode = false, note = {}, onBack = () => {} }) => {
  if (!isViewMode) {
    return null;
  }

  return (
    <MainWrapper>
      <ActionWrapper>
        <Button onClick={onBack}>Back</Button>
      </ActionWrapper>
      <NoteTextWrapper>
        <NoteText>{note.content}</NoteText>
      </NoteTextWrapper>
    </MainWrapper>
  );
};

export default NoteDetail;
