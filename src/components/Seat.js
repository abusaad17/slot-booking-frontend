import React, { useEffect, useState } from "react";

import "./styles/Seat.css";
import { toast } from "react-toastify";
import axios from "axios";
import { API_HOST } from "../API_HOST";

const Seat = (props) => {
  const seatNumber = props.seatno;
  const seatStatus = props.seatColor ? props.seatColor : "seat-grey";
  const [status, setStatus] = useState(false);

  const seatClickHandler = async (event, seatNumber) => {
    try {
      if (status) {
        toast.error("This is already booked please select another slot");
        return;
      }
      const response = await axios.post(
        API_HOST + "/api/accounts/slot-book",
        { slotId: seatNumber },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("loginToken")}`,
          },
        }
      );
      if (response.status === 200) {
        setStatus(true);
        toast.success("seat booked");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data || "Something went wrong");
    }
  };
  const getSeatStatus = () => {
    if (props.bookedSeats) {
      for (let i = 0; i < props.bookedSeats.length; i++) {
        if (parseInt(props.bookedSeats[i]) === seatNumber) {
          setStatus(true);
          break;
        }
      }
    }
  };

  useEffect(() => {
    getSeatStatus();
  }, [props.bookedSeats]);

  return (
    <div className="col-2 col-md-2">
      <div
        className={`seat ${props.seatColor} seat-${seatNumber} ${
          status ? "seat-black" : "seat-grey"
        }`}
        onClick={(e) => seatClickHandler(e, props.seatno)}
      />
    </div>
  );
};

export default Seat;
