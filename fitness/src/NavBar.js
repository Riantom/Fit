import Avatar from '@mui/material/Avatar';

const NavBar = () => {
    
    return ( 
        <nav>
            <div>
            <h2>Fitness Tracker</h2>
            <a href ="/about">About</a>
            <a href="/profile">
            <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
            </a>
            </div>
        </nav>
     );
}
 
export default NavBar;
