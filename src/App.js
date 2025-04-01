import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/info")
      .then(response => setInfo(response.data))
      .catch(error => console.error("Erro ao buscar info:", error));
  }, []);

  return (
    <div>
      <h1>Informações da API</h1>
      {info ? (
        <div>
          <p>Status: {info.status}</p>
          <img src={info.message} alt="Imagem aleatória" style={{ width: "300px" }} />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
