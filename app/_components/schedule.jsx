import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, setOptions, Toast } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './schedule.css';

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
    title: 'Michael Loughran AI Supervision in Drug Dispensing',
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
    start: `${initialDate}T11:45:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: 'Yuan Zhang From Classroom to Conference Stage How Extracurricular Can Launch Your Tech Career',
    resource: 1,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T13:30:00.000+01:00`,
    title:"'Megan D'Arcy & Saffron Baker Beyond Big Brother: The Corporate Takeover",
    resource: 1,
  },
  {
    start: `${initialDate}T13:45:00.000+01:00`,
    end: `${initialDate}T14:15:00.000+01:00`,
    title: 'Matthew Taylor What We Get Wrong About Mental Health: As a former Inpatient at a Psych Ward',
    resource: 1,
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title: 'Anna McDermott Playground Curiosity Philosophy As a Tool for Children',
    resource: 1,
  },
  {
    start: `${initialDate}T15:30:00.000+01:00`,
    end: `${initialDate}T16:00:00.000+01:00`,
    title: 'Celine Ostermeyer Women Shaping the Future of Tech',
    resource: 1,
  },
  {
    start: `${initialDate}T16:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: 'Alexander Baine Study Smarter Not Harder: The AI Toolkit for Students',
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
    title: "Queen's Computing Society Binary Bracelets: Crafting Secret Computer Codes!",
    resource: 3,
  },
  {
    start: `${initialDate}T11:45:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: 'Project Choice Why do Reproductive Rights Still Matter and How can I get Involved in Protecting Them',
    resource: 2,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T14:00:00.000+01:00`,
    title: 'Arts Society Water & Wonder: A Journey into Watercolours',
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
    title: 'Women in STEM Vision Boards:  Kickstarting your Journey',
    resource: 3,
  },
  {
    start: `${initialDate}T13:45:00.000+01:00`,
    end: `${initialDate}T14:15:00.000+01:00`,
    title: 'Country Western Society Snake in my Boots',
    resource: 3,
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title: 'Legs and Kegs Society',
    resource: 3,
  },
  {
    start: `${initialDate}T15:30:00.000+01:00`,
    end: `${initialDate}T16:00:00.000+01:00`,
    title: 'Game Developers Society Works in Progress',
    resource: 3,
  },
  {
    start: `${initialDate}T16:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: 'Chess Club Chess for Complete Beginners',
    resource: 3,
  },
  {
    start: `${initialDate}T12:15:00.000+01:00`,
    end: `${initialDate}T13:00:00.000+01:00`,
    title: 'Lunch',
    resource: 1,
  },
  {
    start: `${initialDate}T17:00:00.000+01:00`,
    end: `${initialDate}T18:00:00.000+01:00`,
    title: 'Charity Raffle',
    resource: 1,
  },
  {
    start: `${initialDate}T19:30:00.000+01:00`,
    end: `${initialDate}T21:00:00.000+01:00`,
    title: 'After Party & Quiz',
    resource: 1,
  },
];



export function Schedule() {
  // const [toastText, setToastText] = useState();
  // const [isToastOpen, setToastOpen] = useState(false);
  const [myEvents, setEvents] = useState([]);

  const calView = useMemo(
    () => ({
      schedule: {
        type: 'day',  
        startTime: '09:00',
        endTime: '18:00',
        timeCellStep: 30,
        currentTimeIndicator: true,
      },
    }),
    [],
  );

  // const handleToastClose = useCallback(() => {
  //   setToastOpen(false);
  // }, []);

  // const handleEventClick = useCallback((args) => {
  //   text = ""
  //   setToastText(args.event.title);
  //   setToastOpen(true);
  // }, []);
  
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
    <section className="py-24 relative">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
          Schedule
        </h2>
    <div className={styles['schedule-container']}>
    <Eventcalendar
    view={calView}
    data={myEvents}
    resources={myResources}
    renderHeader={() => (
      <div >
      </div>
    )}
    selectedDate={initialDate}
    // onEventClick={handleEventClick}
  />
  </div>
  {/* <Toast message={toastText} isOpen={isToastOpen} onClose={handleToastClose} /> */}
  </section>
  );
}
