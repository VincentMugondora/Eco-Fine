import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Questions() {
  const [showPurpose, setShowPurpose] = useState(false);
  const [showUnique, setShowUnique] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 bg-success text-white p-4 position-relative">
          <div className="d-flex flex-column align-items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/108/108222.png"
              alt="arrow"
              className="w-25"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/108/108222.png"
              alt="arrow"
              className="w-25"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/108/108222.png"
              alt="arrow"
              className="w-25"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/108/108222.png"
              alt="arrow"
              className="w-25"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/108/108222.png"
              alt="arrow"
              className="w-25"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/108/108222.png"
              alt="arrow"
              className="w-25"
            />
          </div>
        </div>
        <div className="col-md-6 p-4">
          <h1 className="text-center mb-4">ASK SOMETHING</h1>
          <h2 className="text-center mb-4">
            Keep the scene green by taking the lead
          </h2>
          <p className="text-secondary mb-4">
            Ecology is the study of the relationship between living organisms
            and their environment, including interactions between different
            organisms and species.
          </p>

          <button
            onClick={() => setShowPurpose(!showPurpose)}
            className="btn btn-success btn-block mb-3"
          >
            {showPurpose ? (
              <span>- What is the purpose of your company?</span>
            ) : (
              <span>+ What is the purpose of your company?</span>
            )}
          </button>
          {showPurpose && (
            <p className="text-secondary mb-4">
              Ecology is the study of the relationships between living organisms
              and their environment, including the interactions between
              different species.
            </p>
          )}

          <button
            onClick={() => setShowUnique(!showUnique)}
            className="btn btn-success btn-block mb-3"
          >
            {showUnique ? (
              <span>- What makes your company unique?</span>
            ) : (
              <span>+ What makes your company unique?</span>
            )}
          </button>
          {showUnique && (
            <p className="text-secondary mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              asperiores fugit, aspernatur magni ullam omnis dignissimos
              consequuntur aut.
            </p>
          )}

          <button
            onClick={() => setShowVolunteer(!showVolunteer)}
            className="btn btn-success btn-block mb-3"
          >
            {showVolunteer ? (
              <span>- How much time do I need to volunteer?</span>
            ) : (
              <span>+ How much time do I need to volunteer?</span>
            )}
          </button>
          {showVolunteer && (
            <p className="text-secondary mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              asperiores fugit, aspernatur magni ullam omnis dignissimos
              consequuntur aut.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questions;
