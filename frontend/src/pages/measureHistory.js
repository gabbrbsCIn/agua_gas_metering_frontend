import { useState, useEffect } from "react";
import { getMeasureHistory } from "../services/getMeasureHistory";
import { useParams } from "react-router-dom";

const MeasureHistory = () => {
  const { customerCode } = useParams();
  const [measures, setMeasures] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      try {
        const result = await getMeasureHistory(customerCode, filter);
        setMeasures(result.data.measures);
      } catch (error) {
        console.error("Error fetching history:", error);
        setMeasures([]); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [customerCode, filter]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl pt-10 text-white font-semibold mb-4">Histórico de Leituras</h2>

      <select
        className="rounded-lg px-4 py-2 mb-4"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Todas</option>
        <option value="WATER">Água</option>
        <option value="GAS">Gás</option>
      </select>

      {isLoading ? (
        <div className="loading-container">
          <p>Carregando dados...</p>
        </div>
      ) : (
        <ul className="w-full max-w-2xl mx-auto flex flex-col items-center space-y-4">
          {measures.length > 0 ? (
            measures.map((measure) => (
              <li
                key={measure.measure_uuid}
                className="w-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out rounded-lg shadow-lg p-6 text-white"
              >
                <div className="flex justify-between mb-4">
                  <p className="text-sm text-gray-400">
                    Data: {new Date(measure.measure_datetime).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-400">Tipo: {measure.measure_type}</p>
                </div>
                <div className="text-2xl font-semibold text-center">
                  Valor: {measure.measure_value}
                </div>
                {measure.image_url && (
                  <div className="text-center mt-4">
                    <img src={measure.image_url} alt="Imagem da medida" className="rounded-md" />
                  </div>
                )}
              </li>
            ))
          ) : (
            <p className="text-white">Nenhuma medida encontrada.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default MeasureHistory;
