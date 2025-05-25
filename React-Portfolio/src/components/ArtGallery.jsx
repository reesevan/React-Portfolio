import React, { useState } from "react";

const artPieces = [
  {
    id: 1,
    title: "The Weight of the World",
    description: "Atlas holding up the world, mixed media on canvas.",
    imageUrl: "public/art/6B90F048-43DE-412D-A5BD-F7102FD19F53 (1).jpg"
  },
  {
    id: 2,
    title: "My Tears Dry On Their Own",
    description: "A graffiti-style portrait of Amy Winehouse",
    imageUrl: "/public/art/18A188CE-AA7B-424B-98FE-6B9D252D5A7C (1).jpg"
  },
  {
    id: 3,
    title: "Mother Nature",
    description: "A 3D abstract style sculpture out of clay, resin, and spray paint, of Mother Nature protecting the Earth.",
    imageUrl: "public/art/IMG_0009 (1) (1).jpg"
  },
  {
    id: 4,
    title: "Fire and Ice", 
    description: "Nighttime cityscape with glowing neon lights.",
    imageUrl: "public/art/IMG_6621 (1) (1).jpg"
  }
];

// Remove the stray comment and extra ]; here

const ArtGallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">Art Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {artPieces.map(({ id, title, description, imageUrl }) => (
          <div
            key={id}
            onClick={() => setSelectedArt({ title, description, imageUrl })}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedArt.imageUrl}
              alt={selectedArt.title}
              className="w-full object-contain max-h-[80vh]"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedArt.title}</h3>
              <p className="text-gray-700">{selectedArt.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtGallery;
