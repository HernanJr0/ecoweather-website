import { AuthGoogleContext } from "../../contexts/authGoogle"
import { useContext } from "react"
import "./User.css"
import { Button } from "@mui/material";

function User() {

    const { /* user, */ signOut } = useContext(AuthGoogleContext)

    var userLOGname = "User"

    var userLOG = JSON.parse(localStorage.getItem("@AuthFirebase:user"))
    userLOGname = userLOG.displayName

    return (
        <div>
            <div id="usercard">
                <img id="userbg" src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827" />
                <div>
                    <h2>{userLOGname}</h2>
                    <img src={userLOG.photoURL} id="pfp" />
                </div>
            </div>
            <Button onClick={signOut} variant="outlined" color="error">Sair</Button>
        </div>
    )
}
export default User