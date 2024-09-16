import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { confirmMeasure } from "../services/confirmMeasure";

const EditMeasure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { measure_uuid, confirmedValue } = location.state;
  const [value, setValue] = useState(confirmedValue);
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    const data = {
      measure_uuid,
      confirmed_value: parseInt(value, 10),
    };

    try {
      const result = await confirmMeasure(data);
      setResponse(result.data);
    } catch (error) {
      console.error("Erro ao confirmar a medição:", error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl text-white pt-12 font-semibold">Confirme ou Edite o Valor da Leitura</h2>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-lg w-1/2 px-3 py-2 border border-gray-300 hover:border-gray-400 focus:outline-none"
      />

      <button
        className="rounded-lg bg-blue-500 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Confirmar
      </button>

      {response && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <p>{response.message}</p>
          <button
            className="mt-2 rounded-lg bg-green-500 text-white px-4 py-2"
            onClick={() => navigate("/")}
          >
            Voltar para Página Inicial
          </button>
        </div>
      )}
    </div>
  );
};

export default EditMeasure;
