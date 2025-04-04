import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get("https://springmarciosite.onrender.com/info") 
      .then(response => setInfo(response.data))
      .catch(error => console.error("Erro ao buscar info:", error));
  }, []);

  return (
    <div>
      <h1>Informações da API</h1>
      {info ? (
        <div>
          <p>Status: {info.status}</p>
          {info.message ? (
            <img src={info.message} alt="Imagem aleatória" style={{ width: "300px" }} />
          ) : (
            <p>Imagem não encontrada</p>
          )}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
