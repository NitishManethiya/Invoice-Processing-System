
import { AppBar, Toolbar } from '@mui/material';
const logoimage = require('../images/logoimg.jpg');

const Header = () => {
    
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
            <img src={logoimage} alt='logo' style={{width : 164}} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;