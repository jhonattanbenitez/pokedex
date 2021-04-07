import React from "react";

const Type = ({ type }) => {
  console.log(type);
  switch (type) {
    case "fire":
      return (
        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );

    case "electric":
      return (
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "normal":
      return (
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "flying":
      return (
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "poison":
      return (
        <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );

    case "ground":
      return (
        <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "rock":
      return (
        <span className="inline-block bg-yellow-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "bug":
      return (
        <span className="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "ghost":
      return (
        <span className="inline-block bg-indigo-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "steel":
      return (
        <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "water":
      return (
        <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "grass":
      return (
        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "psychic":
      return (
        <span className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "ice":
      return (
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "dragon":
      return (
        <span className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );

    case "dark":
      return (
        <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "fairy":
      return (
        <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "unknown":
      return (
        <span className="inline-block bg-pink-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );
    case "shadow":
      return (
        <span className="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {type.toUpperCase()}
        </span>
      );

    default:
      break;
  }
};

export default Type;
