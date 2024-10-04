import  { useState } from 'react';

function Questions() {
  const [showPurpose, setShowPurpose] = useState(false);
  const [showUnique, setShowUnique] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:gap-12">
      <div className="w-full md:w-1/2 bg-green-100 p-8 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
          <img src="https://cdn-icons-png.flaticon.com/512/108/108222.png" alt="arrow" className="w-10 h-10" />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl font-bold text-center mb-4">ASK SOMETHING</h1>
        <h2 className="text-3xl font-bold text-center mb-4">
          Keep the scene green by taking the lead
        </h2>
        <h2 className="text-3xl font-bold text-center mb-4">
          Keep the scene green by taking the lead
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Ecology is the study of the relationship between living organisms and
          their environment, including interactions between different organisms
          and species.
        </p>

        <button
          onClick={() => setShowPurpose(!showPurpose)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {showPurpose ? (
            <span className="flex items-center justify-between">
              <span>
                <span className="text-black">-</span> What is the purpose of your
                company?
              </span>
              <span className="text-black">-</span>
            </span>
          ) : (
            <span className="flex items-center justify-between">
              <span>
                <span className="text-black">+</span> What is the purpose of your
                company?
              </span>
              <span className="text-black">+</span>
            </span>
          )}
        </button>

        {showPurpose && (
          <p className="text-gray-600 text-sm mb-4">
            Ecology is the study of the relationships between living organisms and
            their environment, including the interactions between different
            species
          </p>
        )}

        <button
          onClick={() => setShowUnique(!showUnique)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {showUnique ? (
            <span className="flex items-center justify-between">
              <span>
                <span className="text-black">-</span> What makes your company
                unique?
              </span>
              <span className="text-black">-</span>
            </span>
          ) : (
            <span className="flex items-center justify-between">
              <span>
                <span className="text-black">+</span> What makes your company
                unique?
              </span>
              <span className="text-black">+</span>
            </span>
          )}
        </button>

        {showUnique && (
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            asperiores fugit, aspernatur magni ullam omnis dignissimos
            consequuntur aut, velit doloribus recusandae tempora vero.
          </p>
        )}

        <button
          onClick={() => setShowVolunteer(!showVolunteer)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {showVolunteer ? (
            <span className="flex items-center justify-between">
              <span>
                <span className="text-black">-</span> How much time do I need to
                volunteer?
              </span>
              <span className="text-black">-</span>
            </span>
          ) : (
            <span className="flex items-center justify-between">
              <span>
                <span className="text-black">+</span> How much time do I need to
                volunteer?
              </span>
              <span className="text-black">+</span>
            </span>
          )}
        </button>

        {showVolunteer && (
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            asperiores fugit, aspernatur magni ullam omnis dignissimos
            consequuntur aut, velit doloribus recusandae tempora vero.
          </p>
        )}
      </div>
    </div>
  );
}

export default Questions;