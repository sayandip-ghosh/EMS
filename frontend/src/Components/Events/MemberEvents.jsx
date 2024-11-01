import React from 'react';
import EventCard from './EventCard';
import Sidebar from '../SideBar/SideBar';
import { eventsData } from '../../Data/eventsData';

const MemberEvents = () => {
  return (
    <div className="p-8">
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      {eventsData
        .filter((event) => event.status === 'upcoming')
        .map((event) => (
          <EventCard key={event.id} event={event} isUpcoming={true} />
        ))}
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Past Events</h2>
      {eventsData
        .filter((event) => event.status === 'past')
        .map((event) => (
          <EventCard key={event.id} event={event} isUpcoming={false} />
        ))}
    </div>
  </div>
  );
};

export default MemberEvents;