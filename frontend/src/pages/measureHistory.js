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
        setMeasures(result.data);
      } catch (error) {
        console.error("Error fetching history:", error);
        
      } finally {
        setIsLoading(false); 
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Histórico de Leituras</h2>

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
        <ul className="w-full">
            {measures.map((measure) => (
                <li key={measure.measure_uuid} className="border-b py-2">
                <p>
                    Data: {new Date(measure.measure_datetime).toLocaleDateString()}
                </p>
                <p>Tipo: {measure.measure_type}</p>
                <p>Valor: {measure.measure_value}</p>
                </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MeasureHistory;