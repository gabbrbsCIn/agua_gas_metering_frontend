import MeteringOptions from "../components/meteringOption";

const Home = () => {
  return (
    <>
      <h1 className="flex justify-center text-white text-3xl font-semibold pt-20">
        Qual tipo de medição você deseja fazer?
      </h1>
      <div className="flex justify-center">
        <MeteringOptions />
      </div>

    </>
  );
};

export default Home;
