import { AuthGoogleContext } from "../../contexts/authGoogle"
import { useContext } from "react"
import "./User.css"

function User() {

    const { /* user, */ signOut } = useContext(AuthGoogleContext)

    var userLOGname = "User"

    var userLOG = JSON.parse(localStorage.getItem("@AuthFirebase:user"))
    userLOGname = userLOG.displayName

    var x = null

    return (
        <div>
            <div id="usercard">
                <img id="userbg" src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827" />
                <div>
                    <h2>{userLOGname}</h2>
                    <img src={userLOG.photoURL} id="pfp" />
                </div>
            </div>
            <button onClick={signOut}>Sair</button>
        </div>
    )
}
export default User