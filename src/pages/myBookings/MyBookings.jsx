import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Skeleton from "../../components/common/skeleton/Skeleton";
import BookingCard from "../../components/Booking/bookingCard/BookingCard";
import EmptyBooking from "./EmptyBookin";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://travel-ease-server-navy.vercel.app/bookings?email=${user.email}`
      )
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching bookings:", err.message);
      });
  }, [axios, user.email]);

  if (bookings.length === 0) {
    return <EmptyBooking></EmptyBooking>;
  }

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-10 min-h-screen">
      {loading
        ? bookings.map((booking) => <Skeleton key={booking._id}></Skeleton>)
        : bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking}></BookingCard>
          ))}
    </div>
  );
};

export default MyBookings;
