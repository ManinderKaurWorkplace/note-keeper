import React, { useCallback, useState } from "react";

import ComponentStyles from "./styles";
import { AddNoteView, NoteDetailView, TileView } from "../../components";

const { Header, MainWrapper, NotesWrapper, NoContentWrapper, NoContent } =
  ComponentStyles;

const VIEW_MODE = {
  ADD_NOTE: "ADD_NOTE",
  EDIT: "EDIT",
  HOME: "HOME",
  VIEW_NOTE: "VIEW_NOTE",
};

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [viewMode, setViewMode] = useState(VIEW_MODE.HOME);

  const handleToggleAddMode = useCallback(() => {
    setViewMode(
      viewMode === VIEW_MODE.ADD_NOTE ? VIEW_MODE.HOME : VIEW_MODE.ADD_NOTE
    );
  }, [viewMode]);

  const handleToggleViewNotelMode = useCallback(
    (note) => {
      if (note) {
        setNote(note);
      }

      setViewMode(
        viewMode === VIEW_MODE.VIEW_NOTE ? VIEW_MODE.HOME : VIEW_MODE.VIEW_NOTE
      );
    },
    [viewMode]
  );

  const handleAddNote = useCallback((note) => {
    setNotes((notes) => [...notes, note]);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleUpdateNote = useCallback(
    (updatedNote) => {
      const selectedNoteIndex = notes.findIndex(
        (note) => note.id === updatedNote.id
      );
      if (selectedNoteIndex !== -1) {
        const updatedNotes = notes.slice();
        updatedNotes[selectedNoteIndex] = updatedNote;
        setNotes(updatedNotes);
      }
    },
    [notes]
  );

  // eslint-disable-next-line no-unused-vars
  const handleDeleteNote = useCallback((noteId) => {
    setNotes((notes) => notes.filter((note) => note.id !== noteId));
  }, []);

  const isViewFullNote = viewMode === VIEW_MODE.VIEW_NOTE;
  return (
    <MainWrapper>
      <Header>Notes Keeper</Header>
      <NoteDetailView
        isViewMode={isViewFullNote}
        note={note}
        onBack={handleToggleViewNotelMode}
      />
      {!isViewFullNote && (
        <>
          <AddNoteView
            isAddMode={viewMode === VIEW_MODE.ADD_NOTE}
            onAdd={handleAddNote}
            onToggleAddMode={handleToggleAddMode}
          />
          <NotesWrapper>
            {notes.map((note) => (
              <TileView
                key={note.id}
                note={note}
                onShowFullView={handleToggleViewNotelMode}
              />
            ))}
          </NotesWrapper>
        </>
      )}
      {!notes.length && (
        <NoContentWrapper>
          <NoContent>Your notes will display here...</NoContent>
        </NoContentWrapper>
      )}
    </MainWrapper>
  );
};

export default Home;
