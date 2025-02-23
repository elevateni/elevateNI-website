import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, setOptions } from '@mobiscroll/react';
import { useEffect, useMemo, useState } from 'react';

setOptions({
  theme: 'ios',
  themeVariant: 'dark',
  scrollLock: true, 
});

const initialDate = '2025-03-06'; 

const events = [
  {
    start: `${initialDate}T09:00:00.000+01:00`,
    end: `${initialDate}T09:45:00.000+01:00`,
    title: 'Breakfast',
    resource: 1,
  },
  {
    start: `${initialDate}T10:00:00.000+01:00`,
    end: `${initialDate}T10:45:00.000+01:00`,
    title: 'Opening Talk',
    resource: 1,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T11:30:00.000+01:00`,
    title: 'Talk2',
    resource: 20,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: 'Dragon Slayers',
    resource: 4,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: 'Dragon Slayers',
    resource: 4,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T11:30:00.000+01:00`,
    title: 'Main Track 1',
    resource: 1,
  },
  {
    start: `${initialDate}T11:45:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: 'Main Track 2',
    resource: 1,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T13:30:00.000+01:00`,
    title: 'Main Track 3',
    resource: 1,
  },
  {
    start: `${initialDate}T13:45:00.000+01:00`,
    end: `${initialDate}T14:15:00.000+01:00`,
    title: 'Main Track 4',
    resource: 1,
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title: 'Main Track 5',
    resource: 1,
  },
  {
    start: `${initialDate}T15:30:00.000+01:00`,
    end: `${initialDate}T16:00:00.000+01:00`,
    title: 'Main Track 6',
    resource: 1,
  },
  {
    start: `${initialDate}T16:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: 'Main Track 7',
    resource: 1,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T11:30:00.000+01:00`,
    title: 'Diversity Panel',
    resource: 2,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: 'Extended workshop',
    resource: 3,
  },
  {
    start: `${initialDate}T11:45:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: 'Workshop 1',
    resource: 2,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T14:00:00.000+01:00`,
    title: 'Workshop 2',
    resource: 2,
  },
  {
    start: `${initialDate}T14:15:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title: 'Disability and Inclusion Panel',
    resource: 2,
  },
  {
    start: `${initialDate}T15:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: 'Lightning talks',
    resource: 2,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T13:30:00.000+01:00`,
    title: 'Workshop 1',
    resource: 3,
  },
  {
    start: `${initialDate}T13:45:00.000+01:00`,
    end: `${initialDate}T14:15:00.000+01:00`,
    title: 'Workshop 2',
    resource: 3,
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title: 'Workshop 3',
    resource: 3,
  },
  {
    start: `${initialDate}T15:30:00.000+01:00`,
    end: `${initialDate}T16:00:00.000+01:00`,
    title: 'Workshop 4',
    resource: 3,
  },
  {
    start: `${initialDate}T16:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: 'Workshop 5',
    resource: 3,
  },
  {
    start: `${initialDate}T14:00:00.000+01:00`,
    end: `${initialDate}T17:00:00.000+01:00`,
    title: 'Nightline',
    resource: 1,
  },
  {
    start: `${initialDate}T12:15:00.000+01:00`,
    end: `${initialDate}T13:00:00.000+01:00`,
    title: 'Lunch',
    resource: 1,
  },
];



export function Schedule() {
  const [myEvents, setEvents] = useState([]);

  const calView = useMemo(
    () => ({
      schedule: {
        type: 'day',  
        startTime: '09:00',
        endTime: '18:00',
        timeCellStep: 30,
        currentTimeIndicator: false,
      },
    }),
    [],
  );
  
  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: 'Mandela Hall',
        color: '#FF6B6B', 
      },
      {
        id: 2,
        name: 'The Cube',
        color: '#4ECDC4',
      },
      {
        id: 3,
        name: 'Blue Sky Room',
        color: '#5567CC', 
      },
      {
        id: 4,
        name: 'Sunset Room',
        color: '#FFA07A', 
      },
    ],
    [],
  );

  useEffect(() => {
    setEvents(events);  
  }, []);

  return (
    <div style={{ height: '80vh', overflowY: 'auto' }}> 
    <Eventcalendar
    view={calView}
    data={myEvents}
    resources={myResources}
    renderHeader={() => (
      <div >
      </div>
    )}
    selectedDate={initialDate}
  />
  </div>
  );
}
