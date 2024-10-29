import "./HomeComponents.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "/images/2-1.jpg";
import Image2 from "/images/2-1.jpg";
import Image3 from "/images/2-1.jpg";
import Image4 from "/images/2-1.jpg";

const Testimonials = () => {
  const tests = [
    {
      name: "Vincent Mugondora",
      image: Image,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation.",
    },
    {
      name: "Vincent Mugondora",
      image: Image2,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation.",
    },
    {
      name: "Vincent Mugondora",
      image: Image3,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation.",
    },
    {
      name: "Vincent Mugondora",
      image: Image4,
      position: "Founder",
      text: "Ecofine has been a game-changer for our business. Their commitment to sustainable practices and eco-friendly solutions has not only improved our environmental footprint but also enhanced our brand's reputation.",
    },
  ];

  const chunkedTests = [];
  for (let i = 0; i < tests.length; i += 2) {
    chunkedTests.push(tests.slice(i, i + 2));
  }

  return (
    <div className="container mx-auto flex flex-col gap-10 p-4">
      <div>
        <h4 className="text-[#00b150] text-center">CLIENT TESTIMONIAL</h4>
        <h2 className="text-center">Leading the way to a greener tomorrow</h2>
      </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="w-full"
      >
        {chunkedTests.map((chunk, index) => (
          <div key={index} className="carousel-item flex justify-center p-4">
            {chunk.map((test, subIndex) => (
              <div
                key={subIndex}
                className="card rounded bg-[#F8F7F1] flex flex-col gap-4 p-4 max-w-xs mx-2"
              >
                <div className="flex w-full justify-between gap-6">
                  <div className="p-1 rounded-full w-32 h-32 border-2 border-green-800">
                    <img
                      className="h-full rounded-full object-cover object-center"
                      src={test.image}
                      alt={test.name}
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <box-icon
                          key={starIndex}
                          name="star"
                          type="solid"
                          color="#ffc743"
                        ></box-icon>
                      ))}
                    </div>
                    <h5>{test.name}</h5>
                    <p>{test.position}</p>
                  </div>
                  <div>
                    <box-icon
                      name="quote-alt-right"
                      type="solid"
                      color="#00b150"
                      size="72px"
                    ></box-icon>
                  </div>
                </div>
                <p className="text-left">{test.text}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
