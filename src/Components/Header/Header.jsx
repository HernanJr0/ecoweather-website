
import "./Header.css";
import logo from "../../assets/ecoLogoWhite.svg";

import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
// import Account from '@mui/icons-material/AccountCircle'
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext } from "react"

function Header() {

    const { user, signed } = useContext(AuthGoogleContext)

    // function useri() {
    //     if (signed) {
    //         while (user != undefined && user != "[object Object]") {
    //             userLOG = JSON.parse(user)
    //             console.log(userLOG)

    //             return (
    //                 <Link to="/home/user">
    //                     <IconButton id="account">
    //                         {/* <Account /> */}
    //                         <img src={userLOG.photoURL} />
    //                     </IconButton>
    //                 </Link>
    //             )
    //         }
    //     }

    // }

    function useri() {
        if (signed) {
            
            const userImage = user.photoURL || 'https://tinyurl.com/5kub7nce';

            return (
                < img id="usrIcon" src={userImage} />
            )

        }
    }

    return (
        <nav>
            <div id="topbar">
                <Link to="/" id="c_logo">
                    <img id="logo" src={logo} alt="logo" />
                </Link>

                {/* <TextField
                    id='search'
                    label="Buscar"
                    variant="outlined"
                    size='small'
                    InputProps={{
                        endAdornment: (
                            <IconButton edge="end">
                                <Search />
                            </IconButton>
                        ),
                    }}
                /> */}

                <Link to="/home/user">
                    <IconButton id="account">
                        {useri()}
                    </IconButton>
                </Link>
            </div>
        </nav>
    );
}
export default Header;
