import React, { useCallback, useState } from "react";

import ComponentStyles from "./styles";
import { getUniqueId } from "../../utils";

const {
  MainWrapper,
  AddButtonWrapper,
  NoteInputWrapper,
  NoteInput,
  ActionWrapper,
  Button,
} = ComponentStyles;

const AddNote = ({
  isAddMode = false,
  onAdd = () => {},
  onToggleAddMode = () => {},
}) => {
  const [note, setNote] = useState("");

  const handleChangeNote = useCallback((event) => {
    setNote(event.target.value);
  }, []);

  const handleCancel = useCallback(() => {
    setNote("");
    onToggleAddMode();
  }, [onToggleAddMode]);

  const handleAddNote = useCallback(() => {
    if (!note.trim().length) {
      return;
    }
    onAdd({ id: getUniqueId(), content: note, createAt: Date.now() });
    handleCancel();
  }, [note, onAdd, handleCancel]);

  if (!isAddMode) {
    return (
      <MainWrapper>
        <AddButtonWrapper>
          <Button onClick={onToggleAddMode}>+ Add Note</Button>
        </AddButtonWrapper>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <NoteInputWrapper>
        <NoteInput value={note}
        placeholder="Write what's on your mind to keep it ..."
        onChange={handleChangeNote} />
      </NoteInputWrapper>
      <ActionWrapper>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleAddNote}>Save</Button>
      </ActionWrapper>
    </MainWrapper>
  );
};

export default AddNote;
