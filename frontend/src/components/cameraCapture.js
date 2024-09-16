import { useState, useRef } from "react";

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png"); 
    setCapturedImage(dataUrl);
    onCapture(dataUrl); 
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!capturedImage ? (
        <>
          <video ref={videoRef} className="w-full h-auto" />
          <button
            className="rounded-lg bg-blue-500 text-white px-4 py-2"
            onClick={startCamera}
          >
            Iniciar Câmera
          </button>
          <button
            className="rounded-lg bg-green-500 text-white px-4 py-2"
            onClick={captureImage}
          >
            Capturar Imagem
          </button>
        </>
      ) : (
        <>
          <img src={capturedImage} alt="captured" className="w-full h-auto" />
          <button
            className="rounded-lg bg-red-500 text-white px-4 py-2"
            onClick={() => setCapturedImage(null)}
          >
            Capturar Novamente
          </button>
        </>
      )}
    </div>
  );
};

export default CameraCapture;
