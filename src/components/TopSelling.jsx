import topsellPic from "../assets/topsellPic.png";
import { FaStar } from "react-icons/fa6";
function TopSelling() {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <div className="text-3xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold mb-8">TOP SELLING</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={topsellPic}
              alt={`tshirt-${index}`}
              className="w-75 h-auto"
            />
            <div className="flex flex-col items-start text-left mt-4">
              <div className="font-bold">Gradient Graphic T-shirt</div>
              <div className="flex items-center text-yellow-500 text-sm mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 ml-2">4.5/5</span>
              </div>
              <div className="mt-1 text-2xl">₹30</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSelling;
