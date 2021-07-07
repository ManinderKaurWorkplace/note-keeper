import React from "react";

import ComponentStyles from "./styles";

const { MainWrapper, NoteTextWrapper, NoteText, ActionWrapper, Button } =
  ComponentStyles;

const Tile = ({
  note = {},
  onDelete = () => {},
  onEdit = () => {},
  onShowFullView = (note) => {},
}) => {
  return (
    <MainWrapper>
      <NoteTextWrapper
        title={"Click to check full detail"}
        onClick={() => onShowFullView(note)}
      >
        <NoteText>{note.content}</NoteText>
      </NoteTextWrapper>
      <ActionWrapper>
        <Button onClick={() => onShowFullView(note)}>View</Button>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete}>Delete</Button>
      </ActionWrapper>
    </MainWrapper>
  );
};

export default Tile;
