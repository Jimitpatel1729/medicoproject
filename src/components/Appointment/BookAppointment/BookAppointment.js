import React from 'react';
import '../../../App.css';
import BookingAppointmentCard from './BookingAppointmentCard';
const bookingData = [
  {
      _id: '5e8df50be6e8231764dc23de',
      id: 1,
      subject: 'Dentist',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: 9
  },
  {
      _id: '5e8df578e6e8231764dc23df',
      id: 2,
      subject: 'Cardiologist',
      visitingHour: '10:50 AM - 11:30 AM',
      totalSpace: 5
  },
  {
      _id: '5e8df5aee6e8231764dc23e0',
      id: 3,
      subject: 'Neurologist',
      visitingHour: '5:00 PM - 6:00 PM',
      totalSpace: 2
  },
  {
      _id: '5e8df63be6e8231764dc23e1',
      id: 4,
      subject: 'Psychologist',
      visitingHour: '7:00 AM - 8:30 AM',
      totalSpace: 10
  },
  {
      _id: '5e8df68de6e8231764dc23e2',
      id: 5,
      subject: 'Gynaecologist',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: 4
  },
  {
      _id: '5e8df6a0e6e8231764dc23e3',
      id: 6,
      subject: 'Dermatologist',
      visitingHour: '8:00 AM - 9:00 AM',
      totalSpace: 1
  }
]
const BookAppointment = ({date}) => {
  return (
    <section>
      <h2 className=" text-center  text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
      <div className="row ">
        {
          bookingData.map((booking=><BookingAppointmentCard key={booking.id} booking={booking} date={date}></BookingAppointmentCard>))
        }
      </div>
    </section>
  );
};

export default BookAppointment;