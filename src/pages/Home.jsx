
import React from 'react';

const places = [
  { id: 1, name: "Paris", image: "/images/paris.jpg" },
  { id: 2, name: "New York", image: "/images/newyork.jpg" },
  { id: 3, name: "Tokyo", image: "/images/tokyo.jpg" },
  { id: 4, name: "Sydney", image: "/images/sydney.jpg" },
  { id: 5, name: "Rome", image: "/images/rome.jpg" },
];

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Top Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {places.map((place) => (
          <div
            key={place.id}
            className="rounded overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4 bg-white">
              <h2 className="text-xl font-semibold text-center">{place.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
