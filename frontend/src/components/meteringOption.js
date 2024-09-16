import MeteringBoxOption from "./meteringBoxOption";
import { useState } from "react";
import gasMeterImage from "../assets/gas_example.jpg";
import waterMeterImage from "../assets/water_meter_example.png";
import CreateMeasureButton from "./createMeasureButton";

const MeteringOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 p-8">
        <MeteringBoxOption
          title="Gás"
          imageSrc={gasMeterImage}
          selected={selectedOption === "gas"}
          onClick={() => handleSelect("gas")}
        />
        <MeteringBoxOption
          title="Água"
          imageSrc={waterMeterImage}
          selected={selectedOption === "water"}
          onClick={() => handleSelect("water")}
        />
      </div>
      <CreateMeasureButton selectedType={selectedOption}/>
    </div>
  );
};

export default MeteringOptions;
