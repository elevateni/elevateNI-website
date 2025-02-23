import React from "react"
import { format, addMinutes, isBefore, differenceInMinutes } from "date-fns"

const tracks = ["Mandela Hall", "The Cube", "Blue Sky Room", "Sunset Room"]

const startTime = new Date(2025, 2, 6, 9, 0)
const endTime = new Date(2025, 2, 6, 19, 15)

const eventTypes = {
  MAIN: "bg-emerald-100/20",
  SOCIETY: "bg-sky-100/20",
  WORKSHOP: "bg-purple-100/20",
  EXHIBITION: "bg-amber-100/20",
  SPECIAL: "bg-pink-100/20",
}

const events = [
    {
    id: 1,
    title: "Breakfast",
    start: new Date(2025, 2, 6, 9, 0),
    end: new Date(2025, 2, 6, 9, 45),
    type: "SPECIAL",
    fullWidth: true,
    },
    
  {
    id: 2,
    title: "Opening Talk",
    start: new Date(2025, 2, 6, 10, 0),
    end: new Date(2025, 2, 6, 10, 45),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 4,
    title: "Diversity and Inclusion Panel",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 11, 30),
    track: "The Cube",
    type: "SOCIETY",
  },
  {
    id: 5,
    title: "Society Workshop 1",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 11, 30),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },
  {
    id: 6,
    title: "Esports + Dragon Slayers",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 16, 45),
    track: "Sunset Room",
    type: "EXHIBITION",
  },
  {
    id: 99,
    title: "Esports + Dragon Slayers",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 16, 45),
    track: "Sunset Room",
    type: "EXHIBITION",
  },
  {
    id: 7,
    title: "Main Track 1",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 11, 30),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 8,
    title: "Main Track 2",
    start: new Date(2025, 2, 6, 11, 45),
    end: new Date(2025, 2, 6, 12, 15),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 9,
    title: "Main Track 3",
    start: new Date(2025, 2, 6, 1, 0),
    end: new Date(2025, 2, 6, 1, 30),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 10,
    title: "Main Track 4",
    start: new Date(2025, 2, 6, 1, 45),
    end: new Date(2025, 2, 6, 2, 15),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 11,
    title: "Main Track 5",
    start: new Date(2025, 2, 6, 2, 30),
    end: new Date(2025, 2, 6, 3, 0),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 12,
    title: "Main Track 6",
    start: new Date(2025, 2, 6, 3, 30),
    end: new Date(2025, 2, 6, 4, 0),
    track: "Mandela Hall",
    type: "MAIN",
  },
  {
    id: 13,
    title: "Main Track 7",
    start: new Date(2025, 2, 6, 4, 15),
    end: new Date(2025, 2, 6, 4, 45),
    track: "Mandela Hall",
    type: "MAIN",
  },

  {
    id: 14,
    title: "Diversity and Inclusion Panel",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 11, 30),
    track: "The Cube",
    type: "SOCIETY",
  },

  {
    id: 21,
    title: "Extended workshop",
    start: new Date(2025, 2, 6, 11, 0),
    end: new Date(2025, 2, 6, 12, 15),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },

  {
    id: 15,
    title: "Workshop 1",
    start: new Date(2025, 2, 6, 11, 45),
    end: new Date(2025, 2, 6, 12, 15),
    track: "The Cube",
    type: "SOCIETY",
  },
  {
    id: 16,
    title: "Workshop 2",
    start: new Date(2025, 2, 6, 1, 0),
    end: new Date(2025, 2, 6, 2, 0),
    track: "The Cube",
    type: "SOCIETY",
  },
  {
    id: 17,
    title: "Disability and Inclusion Panel",
    start: new Date(2025, 2, 6, 2, 15),
    end: new Date(2025, 2, 6, 3, 0),
    track: "The Cube",
    type: "SOCIETY",
  },
  {
    id: 18,
    title: "Lightning talks",
    start: new Date(2025, 2, 6, 3, 15),
    end: new Date(2025, 2, 6, 4, 45),
    track: "The Cube",
    type: "SOCIETY",
  },

  {
    id: 22,
    title: "workshop 1",
    start: new Date(2025, 2, 6, 1, 0),
    end: new Date(2025, 2, 6, 1, 30),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },

  {
    id: 23,
    title: "workshop 2",
    start: new Date(2025, 2, 6, 1, 45),
    end: new Date(2025, 2, 6, 2, 15),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },
  {
    id: 24,
    title: "workshop 3",
    start: new Date(2025, 2, 6, 2, 30),
    end: new Date(2025, 2, 6, 3, 0),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },
  {
    id: 25,
    title: "workshop 4",
    start: new Date(2025, 2, 6, 3, 30),
    end: new Date(2025, 2, 6, 4, 0),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },
  {
    id: 26,
    title: "workshop 5",
    start: new Date(2025, 2, 6, 4, 15),
    end: new Date(2025, 2, 6, 4, 45),
    track: "Blue Sky Room",
    type: "WORKSHOP",
  },
]


export function Schedule() {
  const timeSlots = []
  let currentTime = startTime

  while (isBefore(currentTime, endTime)) {
    timeSlots.push(currentTime)
    currentTime = addMinutes(currentTime, 15)
  }

  const getEventStyle = (event) => {
    const startDiff = differenceInMinutes(event.start, startTime);  
    const duration = differenceInMinutes(event.end, event.start);  
  
    const rowHeight = 2;  

    const startRow = Math.floor(startDiff / 15) + 3; 
    
    const numberOfRows = Math.ceil(duration / 15); 
    
    if (event.fullWidth) {
      return {
        gridRow: `${startRow} / span ${numberOfRows}`,
        gridColumn: "1 / -1", 
        height: `${numberOfRows * rowHeight}rem`,  
      }
    }
  
    const column = tracks.indexOf(event.track) + 1;  
    return {
      gridRow: `${startRow} / span ${numberOfRows}`,
      gridColumn: `${column}`,  
      height: `${numberOfRows * rowHeight}rem`,  
    };
  }
  

  return (
    <div className="max-w-full p-4 overflow-x-auto">
      <div className="flex">
        {/* Time column */}
        <div className="pr-4 min-w-[80px]">
          <div className="h-[4rem] font-bold flex items-end pb-2">Time</div>
          {timeSlots.map((slot) => (
            <div key={slot.toISOString()} className="h-[2rem] flex items-center">
              {format(slot, "HH:mm")}
            </div>
          ))}
        </div>

        <div
          className="grid flex-grow min-w-[800px]"
          style={{
            gridTemplateColumns: `repeat(${tracks.length}, 1fr)`,
            gridTemplateRows: `auto repeat(${timeSlots.length}, 2rem)`, 
            gap: "0.5rem"
          }}
        >
          {tracks.map((track) => (
            <div key={track} className="pb-2">
              <div className="font-bold text-center">{track}</div>
            </div>
          ))}

          {timeSlots.map((slot) => (
            <React.Fragment key={slot.toISOString()}>
              {tracks.map((track, index) => (
                <div
                  key={`${slot}-${track}`}
                  className="border-t border-gray-700/30"
                />
              ))}
            </React.Fragment>
          ))}

          {events.map((event) => (
            <div
              key={event.id}
              className={`${eventTypes[event.type]} p-2 text-xs overflow-hidden border border-gray-700/30 rounded-sm`}
              style={{
                ...getEventStyle(event),
                left: undefined, 
                width: undefined, 
              }}
            >
              <div className="font-semibold">{event.title}</div>
              <div className="text-gray-400">
                {format(event.start, "HH:mm")} - {format(event.end, "HH:mm")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

  