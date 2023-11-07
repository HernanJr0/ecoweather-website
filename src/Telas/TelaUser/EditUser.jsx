import { AuthGoogleContext } from "../../contexts/authGoogle"
import { useContext } from 'react';
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";

import "./EditUser.css"

function EditUser() {
    const { user, xgPfp, xgUser } = useContext(AuthGoogleContext)

    const [pfp, setPfp] = useState('')
    const [username, setUsername] = useState('')

    const save = () => {

        if (username == '' && pfp == '') {
            alert('coloca alguma coisa ne krl')
            return 0
        }

        if (pfp != '') {
            xgPfp(pfp);
        }
        if (username != '') {
            xgUser(username)
        }
    }

    const handleIMG = (e) => {
        var reader = new FileReader();
        var imgtag = document.getElementById("pfp");

        var selectedFile = e.target.files[0];
        setPfp(e.target.files[0])

        reader.readAsDataURL(selectedFile);

        reader.onload = (e) => {
            imgtag.src = e.target.result;
        };
    }

    return (
        <div id="EditUser" >
            <div id="EditUserCont" >
                <input id="pfpFile" type="file" accept=".png, .jpg, .gif" onChange={handleIMG} />

                <label htmlFor="pfpFile" id="pfplabel">
                    <img src={user.photoURL} id="pfp" />
                </label>

                <TextField
                    id="editUserField"
                    variant="outlined"
                    label="User"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => { if (e.key == 'Enter') { save() } }}
                />

                <Button id="save" onClick={save} variant="contained" >
                    Salvar
                </Button>
            </div>
        </div>
    )
}

export default EditUser;