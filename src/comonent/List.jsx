import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react'

export default function List({note,deleteNote,updaNote}) {
  return (
    <div>
        <Paper elevation={2} sx={{p:2,display:"flex",justifyContent:"space-between",mt:1}}>
            <Box sx={{display:"flex" ,gap:2,alignItems:'center'}}>
                <Checkbox checked={note.completed?true:false}
                 onChange={()=>updaNote(note)}/>
                <Typography color="text.secondary"
                 sx={{fontWeight:"600",textTransform:"capitalize",textDecoration:note.completed?"line-through":"none"}}>
                    {note.title}
                </Typography>
            </Box>
            <IconButton onClick={()=>deleteNote(note.id)} color="error">
                <DeleteOutlineIcon />
            </IconButton>
            
        </Paper>
    </div>
  )
}
