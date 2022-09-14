import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  
  const { isSaving, active } = useSelector( state => state.journal );

  const dispatch = useDispatch();
  const onClickNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <>
    <JournalLayout>
      
      {
        (active)
        ? <NoteView />
        : <NothingSelectedView />
      }
      
      <IconButton
        disabled={ isSaving }
        onClick={ onClickNote }
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacy: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }} >
        <AddOutlined sx={{ contSize: 30 }} />
      </IconButton>

    </JournalLayout>
    </>
  )
}