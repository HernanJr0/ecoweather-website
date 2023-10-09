import { AuthGoogleContext } from "../../contexts/authGoogle"
import { useContext } from "react"
import "./User.css"
function User() {

    const { user, signOut } = useContext(AuthGoogleContext)

    var userLOG
    var userLOGname = "User"

    if (user != null) {
        userLOG = JSON.parse(user)
        userLOGname = userLOG.displayName

        console.log(userLOG)
    }

    return (
        <div>
            <div id="usercard">
                <img id="userbg" src="https://lh3.googleusercontent.com/pw/ADCreHfCUMRUw77YieQnEKIdYoto8xq1Ll6jzGUsf9MZ_yy3ekllMrcYx2g5gvbaq3kJ0UPTinhlLs5LfvrZNS9W5nhgPShQsDjysyPbIZEYWGLwWbajpkeF2LKYcuZsU3U_FYwKT1dW--bUXZXi7aO8gZ_Oy36dGQGEWXI0BVqiuFW6rNa0f8U2PasqdJ8nQqctwFRRIocMCgFDp7u2BypyqVVNlzRZFyKi0nUwD5at8IBlwTJX800dYkWVCr3j-569WI8vccuYmoqRd2oDMHthBK_p53GnEDDHCG6QwAyrubNq3ENa-IYCtHhiqAaIAjz9LWQbaRuclzhy12Aqxp4MyZCErUd95CPecx9e9jU98wcE5UBP9RM8xfj0bEWYjDhh_V4q6HAQdkrGf8SMstvjA7lKQaD_CYsoTw_FZs_0Q40pkV9xrCibZ3d9QVQ20cFPZl4vIpqjqUibaqZFv0ykvlhAqx35yA3gtB4-b4mX78_oUHiyVkkfuzI3zbHfi9LMw0vjGUrVV5-v52UuZQLfUuMg_wwLzaLa7ObYIPQ-JYECZrAohaE7Q3ZIBzS4PmnnOhdai2twL0SPQdo0642iiBvwlG_DTF6y3888TgDUttvvrdAD6SEsw7h-qfl-vm38yocOfm9L37pEHdnBgVCZAXZF8SIzBcYNnan37z6dcmthQCDsJCAwFx8yDylZ_GJVR1dwQtAhmG45kdDxm3hiDRW3jRW6kKsGUyTutR3TY9nRveSNOoTpIx6WPkMLhCEWcEaU0X0bT2zmQIufaBJxNk94c8mt8X-RMWEojXIjt3bWAC0BqJ179U2gvHeBNiISTNig10aXiWE1bJ8xz3yzPee7LWu5mkZLb5UixnFq2kjFW3h0F_QoVqvWa3fbL-dCC9ZjT4JruQy1xVoeA3bv4ADhLacyZFhqsQegk9WoMI6ZT6Vknxm7BiZIC_oDWQ=w797-h1062-s-no?authuser=0" />
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