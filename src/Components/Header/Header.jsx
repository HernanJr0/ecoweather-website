import { useState } from 'react'
import "./Header.css";
import logo from "../../assets/ecoLogoWhite.svg";

import { Link } from "react-router-dom";
import { IconButton, TextField } from '@mui/material';
import Search from '@mui/icons-material/Search'
import Account from '@mui/icons-material/AccountCircle'

function Header() {

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

                <Link to="/Auth">
                    <IconButton>
                        <Account />
                    </IconButton>
                </Link>
            </div>
        </nav>
    );
}
export default Header;
