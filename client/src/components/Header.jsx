import {AppBar, Toolbar} from '@mui/material';
const logoimage = require('../images/logoimg.jpg');
const Header = () =>{
    return (
        <AppBar color='secondary' position='static'>
            <Toolbar>
                <img src={logoimage} alt='logo' style={{width : 150}} />
            </Toolbar>
        </AppBar>
    )
}
export default Header;