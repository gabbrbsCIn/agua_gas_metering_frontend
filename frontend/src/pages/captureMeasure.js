import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import CameraCapture from "../components/cameraCapture"; 
import { addNewMeasure } from "../services/addNewMeascure"; 

const CapturaMeasure = () => {
  const { selectedType, customerCode } = useParams();
  const [imageBase64, setImageBase64] = useState(null);
  const [measureResult, setMeasureResult] = useState(null);
  const navigate = useNavigate();

  const handleCapture = (image) => {
    setImageBase64(image);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    const data = {
      image: imageBase64.split(",")[1], 
      customer_code: customerCode,
      measure_datetime: new Date().toISOString(),
      measure_type: selectedType.toUpperCase(),
    };

    try {
      const response = await addNewMeasure(data); 
      setMeasureResult(response.data);

    } catch (error) {
      console.error("Erro ao enviar a medição:", error);
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-3xl font-semibold text-white pt-12">
        Captura de Imagem para {selectedType.toUpperCase()} - Cliente {customerCode}
      </h2>

      <CameraCapture onCapture={handleCapture} />

      <p className="mt-4 text-white">Ou carregue uma imagem do dispositivo:</p>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="rounded-lg w-1/2 px-3 py-2 border border-gray-300 hover:border-gray-400 focus:outline-none"
      />

      <button
        className="rounded-lg bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-medium disabled:opacity-50"
        onClick={handleSubmit}
        disabled={!imageBase64}
      >
        Enviar Medição
      </button>

      {measureResult && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Resultado da Medição:</h3>
          <p>{measureResult.measure_value}</p>
          <button
            className="mt-4 rounded-lg bg-green-500 text-white px-4 py-2"
            onClick={() => navigate("/")}
          >
            Voltar para a Página Inicial
          </button>
        </div>
      )}
    </div>
  );
};

export default CapturaMeasure;
