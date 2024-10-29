import ToggleTextDiv from "./QeustionsDiv"

const Team = () => {
  return (
    <div className="container-fluid bg-[#F8F7F0]">
      <div className="row">
        <div className="col-md-6">
          <img
            className="lg:rounded-none lg:-ml-3"
            src="/images/globe.jpg"
            alt="Globe"
          />
        </div>
        <div className="col-md-6 p-12">
          <h5 className="text-[#00B150] poppins-regular">ASK SOMETHING</h5>
          <h3 className="poppins-bold">
            Keep the scene green by taking the lead
          </h3>
          <p className="text-gray-500">
            Ecology is the study of the relationship between living organisms
            and their environment, including interactions between different
            organisms and species.
          </p>
          <div>
           <ToggleTextDiv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
