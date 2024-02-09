import React, { useState } from "react";
import Note from "../../components/Note/Note";
import "./Home.css"
import NoteModal from "../../components/NoteModal";
import { Modal } from "@mui/material";

const _notes = [
    {
        id: 1,
        title: "Note one",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat mi mi, id vulputate justo egestas accumsan. Curabitur dapibus justo eget massa feugiat, at fringilla nulla ultricies. Etiam dignissim, nibh quis maximus rhoncus, nunc nisl congue dui, a congue sapien risus sit amet nisl. Quisque vestibulum, nibh sit amet laoreet vestibulum, risus magna pulvinar justo, vel lacinia massa diam ac urna. Nunc nec ipsum in quam consequat interdum. In feugiat eros ac augue porttitor scelerisque. Aenean laoreet sit amet urna at sodales. Morbi nec nunc hendrerit, congue ipsum a, sodales elit. Quisque eu turpis in diam luctus placerat. In hac habitasse platea dictumst. Morbi elementum lorem est. Nam aliquet nisl quis vehicula vehicula. Proin at sollicitudin dolor."
    },
    {
        id: 2,
        title: "Note two",
        description: "Description of note two"
    },
    {
        id: 3,
        title: "Note three",
        description: "Description of note three"
    },
    {
        id: 4,
        title: "Note four",
        description: "Description of note four"
    },
    {
        id: 5,
        title: "Note five",
        description: "Description of note five"
    },
    {
        id: 6,
        title: "Nota six",
        description: "Description of note six"
    },
    {
        id: 7,
        title: "Note seven",
        description: "Description of note seven"
    },
    {
        id: 8,
        title: "Note eight",
        description: "Description of note eight"
    },
    {
        id: 9,
        title: "Note nine",
        description: "Description of note nine"
    }
];

function Home() {
    const [viewNote, setViewNote] = useState();
    const [notes, setNotes] = useState(_notes);

    function HandleClick(note) {
        setViewNote(note);
    }

    function handleClose() {
        setViewNote();
    }

    function handleSave(note) {
        const newNotes = [...notes];

        let i = 0;
        for (i; i < notes.length; i++)
            if(notes[i].id === note.id)
                break;

        newNotes[i] = note;
        setNotes(newNotes);
    }

    return (
        <>
            <div className="noteContainer">
                {notes.map(note => (
                    <Note key={note.id} note={note} onClick={HandleClick} />
                ))}
            </div>
            <Modal className="modalStyle" onClose={handleClose} open={viewNote}>
                <NoteModal note={viewNote} onClose={handleClose} onSave={handleSave}/>
            </Modal>
        </>     
    );
}

export default Home;