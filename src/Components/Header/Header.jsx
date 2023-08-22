import { useState } from 'react'
import "./Header.css";
import logo from "../../assets/ecoLogoWhite.svg";
import search_black from "../../assets/search_black.svg";

import { Link } from "react-router-dom";
import { IconButton, TextField } from '@mui/material';
import Search from '@mui/icons-material/Search'

function Header() {

    return (
        <nav>
            <div id="topbar">
                <Link to="/" id="c_logo">
                    <img id="logo" src={logo} alt="logo" />
                </Link>

                <TextField
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
                />
            </div>
        </nav>
    );
}
export default Header;
