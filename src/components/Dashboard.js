import React, { useEffect, useState } from "react";
import SeatMatrix from "./SeatMatrix";
import SeatAvailability from "./SeatAvailability";
import { API_HOST } from "../API_HOST";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({ bookedSeats: [], status: false });
  const [loading, setLoading] = useState(true);
  const getBookedIds = async () => {
    try {
      const token = localStorage.getItem("loginToken");

      const response = await axios.get(
        API_HOST + "/api/accounts/booked-slot-ids",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setState({
        ...state,
        bookedSeats: response.data.bookedIds,
        status: response.data.status,
      });
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong!");
    }
  };
  useEffect(() => {
    getBookedIds();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    navigate("/");
  };

  return (
    <section className="mx-5">
      <div className="d-flex flex-row-reverse">
        <button
          onClick={handleLogout}
          type="submit"
          className="mt-4 btn btn-md btn-danger"
        >
          Logout
        </button>
      </div>
      <p>Seats Available : {20 - state.bookedSeats.length}</p>
      {state.status && "You have already booked a seat"}
      <div className="main container">
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          <SeatMatrix bookedSeats={state.bookedSeats} />
        )}
        <SeatAvailability />
      </div>
    </section>
  );
};

export default Dashboard;
