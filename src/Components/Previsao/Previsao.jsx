import "./Previsao.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Previsao = () => {
  var imgClimaManha = "https://cdn-icons-png.flaticon.com/512/362/362406.png";
  var imgClimaTarde = "https://cdn-icons-png.flaticon.com/512/362/362374.png";
  var imgClimaNoite = "https://cdn-icons-png.flaticon.com/512/362/362392.png";

  return (
    <>
      <div id="Previsao">
        <div id="previsaoCont">
          <h2 id="previsaoTitulo">Previsao do tempo</h2>
          <hr />
          <div id="previsaoDesc">
            <p>Manaus</p>
            <div id="previsaoHorarios">
              <div>
                <img src={imgClimaManha} className="previsaoTempo" />
                <div>Manhã</div>
              </div>
              <div>
                <img src={imgClimaTarde} className="previsaoTempo" />
                <div>Tarde</div>
              </div>
              <div>
                <img src={imgClimaNoite} className="previsaoTempo" />
                <div>Noite</div>
              </div>
            </div>
          </div>
          <Link id="previsaoLink" to="">
            <Button variant="outlined" size="small">Ver mais...</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Previsao;
