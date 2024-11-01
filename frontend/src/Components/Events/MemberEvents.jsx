import React from 'react';
import EventCard from './EventCard';

const MemberEvents = ({eventsData, membersData}) => {
  return (
    <div className="p-8">
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      {eventsData
        .filter((event) => event.status === 'upcoming')
        .map((event) => (
          <EventCard key={event.id} event={event} isUpcoming={true} membersData= {membersData}/>
        ))}
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Past Events</h2>
      {eventsData
        .filter((event) => event.status === 'past')
        .map((event) => (
          <EventCard key={event.id} event={event} isUpcoming={false} membersData= {membersData}/>
        ))}
    </div>
  </div>
  );
};

export default MemberEvents;