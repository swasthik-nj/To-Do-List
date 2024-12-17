import { Box, Grid2, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import InsetForm from "./InsetForm";
import List from "./List";

export default function Home() {
  let initialValue;
  if (localStorage.getItem("notes") == null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem("notes"));
  }
  const [notes, senotes] = useState(initialValue);
  const deleteNote = (id) => {
    console.log(id);
    let remainingNotes = notes.filter((item) => item.id !== id);
    localStorage.setItem("notes", JSON.stringify(remainingNotes));
    senotes(remainingNotes);
  };
  const updaNote = (note) => {
    console.log(note);
    let status;
    if (note.completed) {
      status=false
    } else {
      status = true
    }
    let modifiedNote={...note, completed: status}
    console.log(modifiedNote);
    let noteIndex=notes.findIndex((item)=>item.id===note.id);
    console.log(noteIndex);
    let modifiedCompleteNote=[...notes]
    modifiedCompleteNote.splice(noteIndex, 1, modifiedNote);
    localStorage.setItem("notes",JSON.stringify(modifiedCompleteNote));
    senotes(modifiedCompleteNote)
  };
  return (
    // <div style={{height:"100vh",backgroundColor:"#171d5d",display:"flex",justifyContent:"center",alignItems:"center"}}>
    //     <div style={{height:"",backgroundColor:"#b7ffed",width:"500px",borderRadius:"20px"}}>

    //     </div>
    // </div>
    <Box 
      sx={{
        backgroundImage:"linear-gradient(#000000,#c5f0ec)",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"#3e5315fc"
      }}
    >
      <Paper sx={{ p: 3, display: "flex", justifyContent: "center",backgroundColor:"#f4e4df",   borderRadius:"20px"  }}>
        <Box>
          <Grid2 container spacing={5}>
            <Grid2 size={{ xs: 12 }}>
              <Typography
                sx={{
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "purple",
                }}
              >
                To Do list
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <InsetForm notes={notes} setNotes={senotes} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Box sx={{ maxHeight: "40vh", overflow: "auto" }}>
                {notes.length > 0 ? (
                  notes.map((note, i) => (
                    <List
                      updaNote={updaNote}
                      deleteNote={deleteNote}
                      key={i}
                      note={note}
                    />
                  ))
                ) : (
                  <Box>
                    <Typography
                      sx={{ color: "text.secondary", textAlign: "center" }}
                    >
                      No Notes Found
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Paper>
    </Box>
  );
}
