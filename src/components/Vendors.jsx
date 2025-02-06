import { FaFilter, FaTh, FaList } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
// import blog1 from "..assets/vendor1.webp";
// import vendor2 from "..assets/vendor2.webp";
// import vendor3 from "..assets/vendor3.webp";

const stores = [
  {
    name: "John Doe's Store",
    image: "vendor1.webp",
    location: "Central Park, New York, United States (US)",
    rating: 5,
   
  },
  {
    name: "Jessica's Store",
    image: "vendor2.webp",
    location: "Central Park, New York, United States (US)",
    rating: 4,
    
  },
  {
    name: "Santa Monica's Store",
    image: "vendor3.webp",
    location: "Central Park, New York, United States (US)",
    rating: 4.5,
   
  },
];

 function Vendors() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Store List</h1>

    
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg mt-6">
        <p className="text-lg font-semibold">Total stores showing: {stores.length}</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <button className="bg-purple-600 text-white px-4 py-2 flex items-center gap-2 rounded">
            <FaFilter /> Filter
          </button>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Sort by:</span>
            <select className="border px-3 py-1 rounded">
              <option>Most Recent</option>
              <option>Highest Rated</option>
              <option>Nearest</option>
            </select>
          </div>
          <FaTh className="cursor-pointer text-lg" />
          <FaList className="cursor-pointer text-lg" />
        </div>
      </div>

      {/* Store Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {stores.map((store, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={store.image} alt={store.name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-semibold">{store.name}</h2>
              <div className="flex items-center">
                {"★".repeat(Math.floor(store.rating))}
                {store.rating % 1 !== 0 && "½"}
              </div>
              <p>{store.location}</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <img src={store.profileImage} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-purple-600 text-white p-2 rounded-full">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Vendors