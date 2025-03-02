"use client";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, setOptions } from "@mobiscroll/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./schedule.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

setOptions({
  theme: "ios",
  themeVariant: "dark",
  scrollLock: true,
});

const initialDate = "2025-03-06";

const events = [
  {
    start: `${initialDate}T09:00:00.000+01:00`,
    end: `${initialDate}T09:45:00.000+01:00`,
    title: "Breakfast",
    resource: 1,
    description:
      "Start your day off right with a delicious breakfast selection! \n\n" +
      "We'll be offering a variety of fresh fruit, mouth-watering pastries, and more to fuel you for an exciting day ahead. Come enjoy a tasty spread and connect with fellow attendees before the day kicks off!",
  },
  {
    start: `${initialDate}T10:00:00.000+01:00`,
    end: `${initialDate}T10:45:00.000+01:00`,
    title: "Opening Talk",
    logo: "/images/schedule/ey_logo.jpg",
    description:
      "Our organisers will kick off ElevateNI with a talk and then we will hear from our chosen charity the British Heart Foundation. We will then hear from our incredible Diamond Sponsor EY and the amazing opportunities they have.",
    resource: 1,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T11:30:00.000+01:00`,
    title: "Michael Loughran AI Supervision in Drug Dispensing",
    resource: 1,
    image: "/images/schedule/michael.JPG",
    name: "Michael Loughran",
    description:
      "Learn how computer vision and other image processing techniques can be used to alert people when errors occur, with a specific focus on applications in pharmacy particularly in drug dispensing. This session will explore the cutting-edge technologies that can enhance accuracy and safety in various industries",
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    title: "Dragonslayers",
    image: "/images/schedule/dragonslayer.webp",
    description:
      "Dragonslayers will have lots of activities set up during the day, sit back and do some gaming on the Nintendo Switch, or chill and play board games with others. Fancy a game of Mario Kart? race other players to be the first across the finish line! or immerse yourself in the world of Virtual Reality with the VR Headset!",
    resource: 4,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    image: "/images/schedule/dragonslayer.webp",
    description:
      "Dragonslayers will have lots of activities set up during the day, sit back and do some gaming on the Nintendo Switch, or chill and play board games with others. Fancy a game of Mario Kart? race other players to be the first across the finish line! or immerse yourself in the world of Virtual Reality with the VR Headset!",
    title: "Dragonslayers",
    resource: 4,
  },
  {
    start: `${initialDate}T11:45:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    image: "/images/schedule/Yuanz.JPG",
    title:
      "Yuan Zhang From Classroom to Conference Stage How Extracurricular Can Launch Your Tech Career",
    resource: 1,
    description: `
  In this session, Yuan will share practical tips for:
  
  - Building your personal brand
  - Leveraging certifications effectively
  - Creating meaningful connections in the tech industry

  Whether you're looking for guidance on how to get started, ways to expand your network, or inspiration to take the next step, this talk is designed to provide actionable advice and encouragement for students and early-career professionals.
`,
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T13:30:00.000+01:00`,
    title:
      "Megan D'Arcy & Saffron Baker Beyond Big Brother: The Corporate Takeover",
    image: "/images/schedule/meg.JPG",
    image2: "/images/schedule/saffy.JPG",
    name: "Megan D'Arcy",
    name2: "Saffron Baker",
    resource: 1,
    description:
      "Private security has become an invisible force shaping our everyday lives, blurring the boundaries between public safety and corporate control. From the London Olympics to today’s pervasive surveillance networks, private firms now play a central role in both physical and digital security, collecting, using, and even selling personal data with little oversight. " +
      "This talk explores the trajectory of privacy loss—how past scandals have become routine intrusions—while questioning where we draw the line between fair protection and invasive monitoring. As private security increasingly partners with the state, concerns over ethics, legislation, and social control grow. " +
      "Who truly governs our security, and at what cost to our privacy?",
  },
  {
    start: `${initialDate}T13:45:00.000+01:00`,
    end: `${initialDate}T14:15:00.000+01:00`,
    title:
      "Matthew Taylor What We Get Wrong About Mental Health: As a former Inpatient at a Psych Ward",
    resource: 1,
    image: "/images/schedule/matthew.jpg",
    name: "Matthew Taylor",
    description:
      "Matthew will be delivering a talk based on his TEDxStormont talk on what we get wrong with suicide as a former inpatient of a psychiatric ward" +
      "This talk will cover Matthews experience of suicidal ideation and his 4-month stay as an inpatient at a psychiatric ward, focusing on the stigma he faced, the moments of kindness and stories from patients and staff, as well as his long recovery back into university study",
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title:
      "Anna McDermott Playground Curiosity Philosophy As a Tool for Children",
    resource: 1,
    image: "/images/schedule/annag.jpg",
    description:
      "Anna will be exploring the profound impact of integrating Philosophy for Children (P4C) into education" +
      "Philosophy is often misunderstood as abstract or impractical, but this session will dismantle those misconceptions and showcase how P4C fosters curiosity, dialogue, and empowerment in classrooms.",
  },
  {
    start: `${initialDate}T15:30:00.000+01:00`,
    end: `${initialDate}T16:00:00.000+01:00`,
    image: "/images/schedule/celine.jpeg",
    title: "Celine Ostermeyer Women Shaping the Future of Tech",
    resource: 1,
    description:
      "Celine will be delivering a talk on the role of women in technology and maths, focusing on both opportunities and challenges women face in pursuing careers in STEM-related fields. She will share key moments from her placement year, discuss representation in STEM, and provide valuable advice for anyone pursuing a career in tech. Celine will also highlight the importance of both women and men leading in the future of technology.",
  },
  {
    start: `${initialDate}T16:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title:
      "Alexander Baine Study Smarter Not Harder: The AI Toolkit for Students",
    resource: 1,
    image: "/images/schedule/bainer.jpg",
    description:
      "In this fun and practical session, Alexander will show how AI tools, from ChatGPT to NotebookLM, can be your ultimate study sidekick. He will address common concerns about AI in academia and demonstrate how it can help you study smarter, not harder. This session is perfect for anyone looking to level up their study game!",
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T11:30:00.000+01:00`,
    title: "Diversity Panel",
    panel: "/images/schedule/diversity.jpeg",
    description:
      "Discover unique perspectives on the importance of diversity and inclusion in academia and industry. You won't want to miss this opportunity to hear from these inspiring speakers and engage in a lively discussion on promoting greater understanding and appreciation of diverse backgrounds and identities\n" +
      "\n Our panelists are Yuan Zhang (Final Year Student UU), Suyi Yang (Equality & Diversity Officer SU), Laura Lavery (Co-Chair of working with Pride NI), and Jessica Ibarra (Presentation Designer), and hosted by Amy Smith (PostGrad Education Officer SU).",
    resource: 2,
  },
  {
    start: `${initialDate}T11:00:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    logo: "/images/schedule/QCSLogo.png",
    title:
      "Queen's Computing Society Binary Bracelets: Crafting Secret Computer Codes!",
    resource: 3,
    description:
      "Ever wondered how computers store information? Discover the magic of binary code?" +
      "Create a custom bracelet using your initials in binary in this, creative, and stylish workshop!",
  },
  {
    start: `${initialDate}T11:45:00.000+01:00`,
    end: `${initialDate}T12:15:00.000+01:00`,
    logo: "/images/schedule/project.jpeg",
    title:
      "Project Choice Why do Reproductive Rights Still Matter and How can I get Involved in Protecting Them",
    resource: 2,
    description:
      "Join the workshop for an in-depth discussion on the evolving landscape of reproductive rights in Northern Ireland and beyond. Reflect, engage, and explore ways to make a real impact through activism",
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T14:00:00.000+01:00`,
    image: "/images/schedule/artsoc.png",
    title: "Arts Society Water & Wonder: A Journey into Watercolours",
    resource: 2,
    description:
      "Dive into the delicate beauty of watercolour painting. Whether you're a seasoned artist or a total beginner, join us for a night of creative exploration through colour, texture, and fluidity!",
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    title: "Disability and Inclusion Panel",
    panel: "/images/schedule/disability.jpeg",
    resource: 3,
    description:
      "This is an amazing opportunity to hear first-hand experiences and learn how to create a more inclusive environment for everyone.\n\n" +
      "Many students with visible and invisible disabilities worry about employment opportunities and life at university. Come along and hear from our inspiring panellists who will share their insights and offer practical advice on overcoming barriers.\n\n" +
      "Don't miss this opportunity to be inspired and equipped with the tools you need!\n\n" +
      "Our amazing and inspiring panellists include:\n\n" +
      "Megan D’Arcy\n" +
      "Matthew Taylor\n" +
      "Matthew Close\n" +
      "Beth MacDougall\n\n" +
      "and is hosted by Caitlin Hanna.",
  },
  {
    start: `${initialDate}T15:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    title: "Lightning talks",
    resource: 2,
    description:
      "Hear from our amazing lightning speakers in a quick fire round of 10 minute talks. Hear from Chloe McGaughey: Breaking The Mask Overcoming Imposter Syndrome, Liam Harte: Breaking Free From Phobias Can Virtual Reality Help " +
      "Hannah Kunnath: Breaking Barriers for Refugees One Action at a time, Florence Charles: Breaking Free form labels Why Identity should be fluid not fixed, Tiarnan Smith: How AI will affect the future of your employment, Lauren McBurney: Navigating Challenges My Path To A Software Engineering Internship, Niamh Mallaghan: What Does It Really Mean To Be An Astrophysicist, and Sophie Rusk: We Are All Caregivers",
  },
  {
    start: `${initialDate}T13:00:00.000+01:00`,
    end: `${initialDate}T13:30:00.000+01:00`,
    title: "Women in STEM Vision Boards:  Kickstarting your Journey",
    image: "/images/schedule/womenstem.webp",
    resource: 3,
    description:
      "Join the Women in STEM Society to create vision boards, build confidence, and set actionable goals to navigate your academic journey. Whether you're just starting out or planning your next steps, this workshop will help you stay motivated and focused on your future!",
  },
  {
    start: `${initialDate}T13:45:00.000+01:00`,
    end: `${initialDate}T14:15:00.000+01:00`,
    image: "/images/schedule/country.png",
    title: "Country Western Society Snake in my Boots",
    resource: 3,
    description:
      "Get ready for a wild showdown! Decorate your own fake snake and compete in teams to see who can toss the most snakes into a cowboy boot! A lighthearted, high-energy challenge for all country lovers!",
  },
  {
    start: `${initialDate}T14:30:00.000+01:00`,
    end: `${initialDate}T15:00:00.000+01:00`,
    image: "/images/schedule/legs.jpg",
    title: "Legs and Kegs Society Running and Form",
    resource: 2,
    description:
      "Want to get into running but not sure where to start?\n\n" +
      "Learn the best techniques to ease into running, build endurance, and prevent injuries with proper stretching. Whether you're a complete beginner or looking to improve, this session will help you hit the ground running!",
  },
  {
    start: `${initialDate}T15:30:00.000+01:00`,
    end: `${initialDate}T16:00:00.000+01:00`,
    image: "/images/schedule/dev.png",
    title: "Game Developers Society Works in Progress",
    resource: 3,
    description:
      "Ever wanted to test out games before they launch? This is your chance! Playtest student-created games, provide valuable feedback, and help shape the future of game development. Open to all gamers and devs alike!",
  },
  {
    start: `${initialDate}T16:15:00.000+01:00`,
    end: `${initialDate}T16:45:00.000+01:00`,
    image: "/images/schedule/chessclub.png",
    title: "Chess Club Chess for Complete Beginners",
    resource: 3,
    description:
      "Always wanted to learn chess but never knew where to start? This beginner-friendly session will teach you the fundamentals, complete with hands-on practice!",
  },
  {
    start: `${initialDate}T12:15:00.000+01:00`,
    end: `${initialDate}T12:45:00.000+01:00`,
    title: "Lunch",
    resource: 1,
    description:
      "Enjoy a break with a selection of tasty lunch options. Choose from a variety of meals, each designed to be satisfying and convenient, so you can refuel and stay energised for the rest of the day.",
  },
  {
    start: `${initialDate}T17:00:00.000+01:00`,
    raffleImages: [
      "/images/raffle/switch.png",
      "/images/raffle/Soundcore_Headphones.png",
      "/images/raffle/quest.png",
      "/images/raffle/monitor.png",
      "/images/raffle/lego.png",
      "/images/raffle/fire.png",
      "/images/raffle/airpods2.png",
    ],
    end: `${initialDate}T18:00:00.000+01:00`,
    title: "Charity Raffle",
    resource: 1,
    description:
      "In our awesome raffle sponsored by EEECS you have the chance to win the following prizes. Tickets are £1 for 1 or £4 for 5!",
  },
  {
    start: `${initialDate}T19:30:00.000+01:00`,
    logo: "/images/schedule/mandella.avif",
    end: `${initialDate}T21:00:00.000+01:00`,
    title: "After Party & Quiz",
    resource: 1,
    description:
      "To close out ElevateNI 2025, we're throwing an unforgettable After Party that you won't want to miss! \n\n" +
      "The stakes are high with our Big Afterparty Quiz as there are some incredible prizes up for grabs!!" +
      " Throughout the afterparty the bar in the Mandela Hall will also be open."
  },
];

export function Schedule() {
  const [myEvents, setEvents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const calView = useMemo(
    () => ({
      schedule: {
        type: "day",
        startTime: "09:00",
        endTime: "21:00",
        timeCellStep: 30,
        currentTimeIndicator: true,
      },
    }),
    []
  );

  const handleEventClick = useCallback(
    (args) => {
      setSelectedEvent(args.event);
      onOpen();
    },
    [onOpen]
  );

  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: "Mandela Hall",
        color: "#FF6B6B",
      },
      {
        id: 2,
        name: "The Cube",
        color: "#4ECDC4",
      },
      {
        id: 3,
        name: "Blue Sky Room",
        color: "#5567CC",
      },
      {
        id: 4,
        name: "Drawing Room",
        color: "#FFA07A",
      },
    ],
    []
  );

  useEffect(() => {
    setEvents(events);
  }, []);

  const formatEventTime = (date) => {
    const eventDate = new Date(date);

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Europe/Amsterdam',
    };

    let formattedTime = new Intl.DateTimeFormat('en-US', options).format(eventDate);
    formattedTime = formattedTime.replace(/^0(\d)/, '$1');

    return formattedTime;
};
return (
  <section className="py-24 relative">
    <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text">
      Schedule
    </h2>
    <div className={styles["schedule-container"]}>
      <Eventcalendar
        view={calView}
        data={myEvents}
        resources={myResources}
        renderHeader={() => <div></div>}
        selectedDate={initialDate}
        onEventClick={handleEventClick}
      />
    </div>
    {isOpen && selectedEvent && (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="max-h-[80vh] sm:max-h-[70vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[70vh] overflow-y-auto">
          <ModalHeader>{selectedEvent.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Thursday {formatEventTime(new Date(selectedEvent.start))} -{" "}
              {formatEventTime(new Date(selectedEvent.end))} <br />
              {myResources.find((r) => r.id === selectedEvent.resource)?.name || "N/A"}
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              {[
                { src: selectedEvent.image, alt: selectedEvent.title },
                { src: selectedEvent.image2, alt: selectedEvent.title },
                { src: selectedEvent.logo, alt: "Society Workshop", className: "w-52 h-52 relative", contain: true },
                { src: selectedEvent.panel, alt: "Panel", className: "w-72 h-72 relative", contain: true },
              ]
                .filter((img) => img.src)
                .map((img, index) => (
                  <div key={index} className={img.className || "w-32 h-32 rounded-full overflow-hidden mb-4"}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.className ? undefined : 128}
                      height={img.className ? undefined : 128}
                      fill={!!img.className}
                      style={{ objectFit: img.contain ? "contain" : "cover", objectPosition: "center" }}
                      priority
                      sizes={img.className ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : undefined}
                    />
                  </div>
                ))}
            </div>

            <p>{selectedEvent.prizes}</p>
            <p className="mb-2">{selectedEvent.description}</p>
            {selectedEvent.raffleImages?.length > 0 && (
              <div className="flex flex-wrap space-x-1 mb-4">
                {selectedEvent.raffleImages.map((imgUrl, index) => (
                  <div key={index} className="w-30 h-30 rounded-full overflow-hidden mb-4">
                    <Image
                      src={imgUrl}
                      alt={`Event Image ${index + 1}`}
                      width={128}
                      height={128}
                      objectFit="cover"
                      objectPosition="center"
                      priority
                    />
                  </div>
                ))}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <p>All Funds Raised from ElevateNI will go to the British Heart Foundation</p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )}
  </section>
);
}