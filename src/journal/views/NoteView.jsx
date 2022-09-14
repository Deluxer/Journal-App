import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useMemo } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hook/useForm';
import { ImageGallery } from '../components';
import { startDeleteNote, startSaveNote, startUploadingFiles, setActiveNote } from '../../store/journal'

export const NoteView = () => {
    
    const dispatch = useDispatch();
    const { active:note, messageSave, isSaving } = useSelector( state => state.journal);
    
    const { body, title, date, onInputChange, formState } = useForm(note);
    const fileInputRef = useRef();
    
    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));

    }, [formState]);

    useEffect(() => {
        if(messageSave.length > 0) {
            Swal.fire('Note updated', messageSave, 'success');
        }        
    }, [messageSave]);
    
    const onSaveNote = () => {
        dispatch(startSaveNote());
    }
    
    const onFileInputChange = ({ target }) => {
        if(target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch( startDeleteNote() )
    }

  return (
    <Grid
        container
        className='animate__animated animate__fadeIn animate__faster'
        direction='row'
        justifyContent='space-between'
        sx={{ mb: 1}}
    >
        <Grid item>
            <Typography fontSize={30} fontWeight='light'> { dateString }</Typography>
        </Grid>
        <Grid item>

            <input 
            type="file"
            multiple
            ref={ fileInputRef }
            onChange={ onFileInputChange }
            style={{ display: 'none' }}
            />

            <IconButton
                color="primary"
                disabled={ isSaving }
                onClick={ () => fileInputRef.current.click() } >
                <UploadOutlined />
                <Typography fontSize={12}>(.jpg, .png)</Typography>
            </IconButton>

            <Button
            disabled={ isSaving }
            onClick={ onSaveNote }
            color='primary'>
                <SaveOutlined sx={{fontSize: 30, mr:1}} />
            </Button>

            <Button
                onClick={ onDelete }
                color="error">
                    <DeleteOutline />
                    Delete
            </Button>

        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder="Ingrese titulo"
                label="Titulo"
                sx={{ border: 'none', mb:1}}
                name='title'
                value={title}
                onChange={ onInputChange }
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="Que sucedio hoy?"
                minRows={5}
                name='body'
                value={body}
                onChange={ onInputChange }
            />            
        </Grid>

        <ImageGallery images={ note.imageUrls } />

    </Grid>
  )
}
