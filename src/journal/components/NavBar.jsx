import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'

export const NavBar = ({ drawedWidth = 240 }) => {
    
    const disptach = useDispatch();
    const onLogout = () => {
        disptach(startLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width:{ sm: `calc(100% - ${ drawedWidth }px)`},
                ml:{ sm:`${ drawedWidth }px` }
            }} >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr:2, display: { sm: 'none'}}} >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between' >
                    <Typography variant='h6' noWrap component='div' >Journal App</Typography>

                    <IconButton
                        color='error'
                        onClick={ onLogout } >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
