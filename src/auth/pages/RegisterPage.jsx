import { CastConnectedSharp, Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hook'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

const formData = {
  email: '',
  password: '',
  displayName: ''
}
export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const formValidations = {
    email: [(value) => value.includes('@'), 'Please enter valid email'],
    password: [(value) => value.length >= 6, 'The Password must have more than 6 letters'],
    displayName: [(value) => value.length >= 1, 'Name is required'],
  }

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  
  const {
    displayName ,email, password, onInputChange, formState,
    isFormValid ,displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setformSubmitted(true);
    if( !isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
      <AuthLayout title='Sing up'>

        <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Full name"
                type="text"
                placeholder="Juanito Peres"
                name="displayName"
                fullWidth
                value={displayName}
                onChange={ onInputChange }
                error={!!displayNameValid && formSubmitted}
                helperText={ displayNameValid}
              />
            </Grid>
            <Grid item xs={ 12 } sx={{mt:2}}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={ onInputChange }
                placeholder="example@email.com"
                fullWidth
                error={!!emailValid && formSubmitted}
                helperText={ emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="******"
                onChange={ onInputChange }
                name="password"
                value={password}
                fullWidth
                error={!!passwordValid && formSubmitted}
                helperText={ passwordValid }
              />
            </Grid>
          </Grid>

          <Grid container spacing={ 2 } sx={{mb:2, mt:1}}>
            <Grid
            item
            xs={12}
            display={ !!errorMessage ? '' : 'none' }
          >
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>

            <Grid item xs={12} sx={{mb:2}}>
              <Button
              disabled={ isCheckingAuthentication }
              type='submit'
              variant="contained"
              fullWidth
            >
                Create
              </Button>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={ RouterLink } color="inherit" to="/auth/login">
                Already have account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>

  )
}
