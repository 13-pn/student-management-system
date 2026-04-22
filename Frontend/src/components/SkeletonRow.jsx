import React from "react";

const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">


      <td className="p-2 md:p-3">
        <div className="h-3 md:h-4 bg-gray-300 rounded w-16 sm:w-24 md:w-28 mx-auto"></div>
      </td>


      <td className="p-2 md:p-3">
        <div className="h-3 md:h-4 bg-gray-300 rounded w-14 sm:w-20 mx-auto"></div>
      </td>


      <td className="p-2 md:p-3">
        <div className="h-3 md:h-4 bg-gray-300 rounded w-16 sm:w-24 mx-auto"></div>
      </td>

      <td className="p-2 md:p-3">
        <div className="h-5 md:h-6 bg-gray-300 rounded w-20 sm:w-28 md:w-32 mx-auto"></div>
      </td>

    </tr>
  );
};

export default SkeletonRow;