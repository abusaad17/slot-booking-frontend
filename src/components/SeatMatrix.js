import React from "react";
import Seat from "./Seat";
import "./styles/Seat.css";

const SeatMatrix = ({ bookedSeats }) => {
  const GenerateSeats = (seatNumbers) => {
    return (
      <div className="row">
        {seatNumbers.map((seatNumber) => {
          return (
            <Seat
              seatno={seatNumber}
              bookedSeats={bookedSeats}
              key={seatNumber}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="movie-complex">
      <p>Slot booking application</p>
      <div className="container row movie-layout">
        <div className="movie-column-1">
          {GenerateSeats([1, 2, 3, 4])}
          {GenerateSeats([5, 6, 7, 8])}
          {GenerateSeats([9, 10, 11, 12])}
          {GenerateSeats([13, 14, 15, 16])}
          {GenerateSeats([17, 18, 19, 20])}
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
