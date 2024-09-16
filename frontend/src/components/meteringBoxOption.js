

const MeteringBoxOption = ({title, imageSrc, selected, onClick}) => {
  return (
    <div
      className={`flex flex-col bg-white items-center justify-center w-64 h-64 p-4 border-2 cursor-pointer 
        ${selected ? "border-blue-300" : "border-gray-300"}`}
      onClick={onClick}
    >
      <img className="max-w-60 max-h-44 mb-4" src={imageSrc} alt="Imagem de exemplo de medidor"/>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div
        className={`w-4 h-4 rounded-full pt-2 
          ${selected ? "bg-blue-300" : "bg-gray-300"}`}
      />
    </div>
  );
};

export default MeteringBoxOption;
