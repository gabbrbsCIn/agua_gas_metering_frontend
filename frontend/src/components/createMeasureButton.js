import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMeasureButton = ({ selectedType }) => {
  const [customerCode, setCustomerCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (customerCode) {
      navigate(`/${selectedType}/${customerCode}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <input
        className="rounded-lg w-full px-3 py-2 border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        type="text"
        value={customerCode}
        placeholder="Digite o Customer Code"
        onChange={(e) => setCustomerCode(e.target.value)}
      />
      <button
        className="rounded-lg bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-medium"
        onClick={handleSubmit}
        disabled={!customerCode}
      >
        Continuar para a captura de imagem
      </button>
      <button
          className="rounded-lg bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 font-medium"
          onClick={() => navigate(`/measures/${customerCode}`)}
          disabled={!customerCode}
        >
          Histórico de Leituras
        </button>
    </div>
  );
};

export default CreateMeasureButton;
