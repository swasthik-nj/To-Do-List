import { Title } from "@mui/icons-material";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function InsetForm({notes,setNotes}) {
  const [notetitle, setNotetitle] = useState("");
  const [notetitleError, setnotetitleError] = useState(null);
  const handleChange = (e) => {
    setnotetitleError(null)
    setNotetitle(e.target.value);
    
  };

  const handleSubmit = () => {
    if (notetitle==="") {
      setnotetitleError("Please enter  the value")
    }else{
      // console.log(notes);
      let noteId=notes.length===0?1:notes[notes.length-1].id+1
      let fullObject={id:noteId,title:notetitle,completed:false}
      let updatedNoteData=[...notes,fullObject]
      console.log(updatedNoteData);
      localStorage.setItem("notes",JSON.stringify(updatedNoteData))
      setNotes(updatedNoteData)
      setNotetitle("")
    }
    
  }
  return (
    <Box>
      <Grid2 container spacing={2}> 
        <Grid2 size={{ xs: 10 }}>
          <TextField
          value={notetitle}
            onChange={handleChange}
            fullWidth
            label="Enter the title"
            placeholder="Enter note title"
            helperText={notetitleError && notetitleError}
            error={!!notetitleError}
          />
        </Grid2>
        <Grid2 size={{ xs: 2 }}>
          <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ p: 2 }} color="secondary">
            ADD
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}
