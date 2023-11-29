import { useState } from "react";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { CityButton } from "../../Components/Clima/Clima";
import { useEffect } from "react";



export function MyCities() {
    const { cities/* cities */, pega } = useContext(AuthGoogleContext);
    const [c] = useState(cities);

    useEffect(() => {
        pega("cities", true)
    }, [])

    function oi() {
        if (!!c) {

            if (c.length > 0) {
                return c.map((city) => {
                    return (
                        <CityButton city={city.nome} key={Math.random()} />
                    )
                })

            } else {
                return <p id="nenhumaNoticia">Nenhuma cidade encontrada!</p>
            }

        }
        else
            return <p id="nenhumaNoticia">Nenhuma cidade encontrada!</p>
    }

    return (
        <div>
            <div className="s-header">
                <h2>Cidades Favoritas</h2>
            </div>

            <div id="cities">
                {oi()}
            </div>
        </div >
    )
}

export default MyCities