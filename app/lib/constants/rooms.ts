import { Room } from "../types";

export const ROOMS: {
  [key: string]: Room;
} = {
  ALEX100: {
    name: "ALEX 100",
    type: "Room",
    short: "ALEX100",
    href: "/rooms/ALEX100",
    image: "/images/rooms/ALEX100/main.jpg",
    info: {
      type: "Lecture Theatre",
      seating: "Fixed Chairs with Tablets",
      capacity: 182,
    },
    steps: [
      {
        description: "Walk from the Cannon to Reynolds Walk.",
        image: "/images/rooms/ALEX/step1.jpeg",
      },
      {
        description: "Walk down Reynolds Walk.",
        image: "/images/rooms/ALEX/step2.jpeg",
      },
      {
        description: "Keep walking straight.",
        image: "/images/rooms/ALEX/step3.jpeg",
      },
      {
        description: "Keep walking straight.",
        image: "/images/rooms/ALEX/step4.jpeg",
      },
      {
        description: "Take a left turn down the sidewalk up ahead.",
        image: "/images/rooms/ALEX/step5.jpeg",
      },
      {
        description: "Walk down the sidewalk toward the building entrance.",
        image: "/images/rooms/ALEX/step6.jpeg",
      },
      {
        description: "Walk from the sidewalk and enter the building.",
        image: "/images/rooms/ALEX/step7.jpeg",
      },
      {
        description:
          "As you enter the building walk straight and take a left turn down the hallway.",
        image: "/images/rooms/ALEX/100/step8.jpeg",
      },
      {
        description:
          "Walk straight, your room will be down the hallway on your right.",
        image: "/images/rooms/ALEX/100/step9.jpeg",
      },
      {
        description: "Welcome to ALEX 100",
        image: "/images/rooms/ALEX/100/main.jpg",
      },
    ],
  },
  ALEX200: {
    name: "ALEX 200",
    type: "Room",
    short: "ALEX200",
    href: "/rooms/ALEX200",
    image: "/images/rooms/ALEX200/main.jpg",
    info: {
      type: "Lecture Theatre",
      seating: "Fixed Chairs with Tablets",
      capacity: 322,
    },
    steps: [
      {
        description: "Walk from the Cannon to Reynolds Walk.",
        image: "/images/rooms/ALEX/step1.jpeg",
      },
      {
        description: "Walk down Reynolds Walk.",
        image: "/images/rooms/ALEX/step2.jpeg",
      },
      {
        description: "Keep walking straight.",
        image: "/images/rooms/ALEX/step3.jpeg",
      },
      {
        description: "Keep walking straight.",
        image: "/images/rooms/ALEX/step4.jpeg",
      },
      {
        description: "Take a left turn down the sidewalk up ahead.",
        image: "/images/rooms/ALEX/step5.jpeg",
      },
      {
        description: "Walk down the sidewalk toward the building entrance.",
        image: "/images/rooms/ALEX/step6.jpeg",
      },
      {
        description: "Walk from the sidewalk and enter the building.",
        image: "/images/rooms/ALEX/step7.jpeg",
      },
      {
        description:
          "As you enter the building walk towards the stairway on your right.",
        image: "/images/rooms/ALEX/200/step8.jpeg",
      },
      {
        description: "Walk upstairs to the 2nd floor.",
        image: "/images/rooms/ALEX/200/step9.jpeg",
      },
      {
        description: "Continue walking upstairs.",
        image: "/images/rooms/ALEX/200/step10.jpeg",
      },
      {
        description:
          "Walk straight down the 2nd floor hallway towards the hallway up on the left.",
        image: "/images/rooms/ALEX/200/step11.jpeg",
      },
      {
        description:
          "Walk straight, your room will be down the hallway on your right.",
        image: "/images/rooms/ALEX/200/step12.jpeg",
      },
      {
        description: "Welcome to ALEX 200",
        image: "/images/rooms/ALEX/200/main.jpg",
      },
    ],
  },
};
