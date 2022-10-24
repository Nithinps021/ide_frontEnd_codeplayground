import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
    return (
        <Box sx={{flexGrow:1 }}>
            <AppBar position="static" sx={{bgcolor:"primary.main"}}> 
                <Toolbar variant="dense" component="div" sx={{alignSelf:"center"}}>
                    <Typography variant="h6" color="inherit">
                        my playground
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar