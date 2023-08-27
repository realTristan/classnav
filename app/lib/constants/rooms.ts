import { Room } from "../types";

export const ROOMS: {
  [key: string]: Room;
} = {
  ALEX100: {
    name: "ALEX 100",
    type: "Room",
    short: "ALEX100",
    href: "/rooms/ALEX100",
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
        image: "/images/rooms/ALEX/FLOOR1/100/step8.jpeg",
      },
      {
        description:
          "Walk straight, your room will be down the hallway on your right.",
        image: "/images/rooms/ALEX/FLOOR1/100/step9.jpeg",
      },
      {
        description: "Welcome to ALEX 100",
        image: "/images/rooms/ALEX/FLOOR1/100/step10.jpg",
      },
    ],
  },
  ALEX200: {
    name: "ALEX 200",
    type: "Room",
    short: "ALEX200",
    href: "/rooms/ALEX200",
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
        image: "/images/rooms/ALEX/FLOOR2/200/step8.jpeg",
      },
      {
        description: "Walk upstairs to the 2nd floor.",
        image: "/images/rooms/ALEX/FLOOR2/200/step9.jpeg",
      },
      {
        description: "Continue walking upstairs.",
        image: "/images/rooms/ALEX/FLOOR2/200/step10.jpeg",
      },
      {
        description:
          "Walk straight down the 2nd floor hallway towards the hallway up on the left.",
        image: "/images/rooms/ALEX/FLOOR2/200/step11.jpeg",
      },
      {
        description:
          "Walk straight, your room will be down the hallway on your right.",
        image: "/images/rooms/ALEX/FLOOR2/200/step12.jpeg",
      },
      {
        description: "Welcome to ALEX 200",
        image: "/images/rooms/ALEX/FLOOR2/200/step13.jpg",
      },
    ],
  },
  WMEM: {
    name: "WMEM",
    type: "Room",
    short: "WMEM",
    href: "/rooms/WMEM",
    info: {
      type: "Lecture Theatre",
      seating: "Fixed Chairs with Tablets",
      capacity: 589,
    },
    steps: [
      {
        description: "Walk from the Cannon up Winegard Walk.",
        image: "/images/rooms/WMEM/FLOOR1/step1.jpeg",
      },
      {
        description: "Walk straight up the steps of Winegard Walk.",
        image: "/images/rooms/WMEM/FLOOR1/step2.jpeg",
      },
      {
        description:
          "Walk off Winegard Walk and down the pathway on your left.",
        image: "/images/rooms/WMEM/FLOOR1/step3.jpeg",
      },
      {
        description: "Keep walking straight down the pathway.",
        image: "/images/rooms/WMEM/FLOOR1/step4.jpeg",
      },
      {
        description: "Keep walking straight toward the War Memorial Hall.",
        image: "/images/rooms/WMEM/FLOOR1/step5.jpeg",
      },
      {
        description: "Keep walking toward the entrance on the left.",
        image: "/images/rooms/WMEM/FLOOR1/step6.jpeg",
      },
      {
        description:
          "Walk up the steps to the building entrance, your room will be up ahead.",
        image: "/images/rooms/WMEM/FLOOR1/step7.jpeg",
      },
    ],
  },
};
