import { Building } from "../types";

export const BUILDINGS: {
  [key: string]: Building;
} = {
  ALEX: {
    name: "Alexander Hall",
    type: "Building",
    short: "ALEX",
    address: "570 Gordon St, Guelph, ON N1G 2W1",
    image: "/images/buildings/ALEX.jpg",
    href: "/buildings/ALEX",
    rooms: ["ALEX100", "ALEX200"],
  },
  HUTT: {
    name: "H.L. Hutt",
    type: "Building",
    short: "HUTT",
    address: "43 Reynolds Walk, Guelph, ON N1G 2W1",
    image: "/images/buildings/HUTT.jpg",
    href: "/buildings/HUTT",
    rooms: [
      "HUTT233",
      "HUTT234",
      "HUTT235",
      "HUTT236",
      "HUTT240A",
      "HUTT240B",
      "HUTT240C",
    ],
  },
  ANNU: {
    name: "Animal Sci. & Nutri.",
    type: "Building",
    short: "ANNU",
    address: "541 County Road 46, Guelph, ON N1G 2W1",
    image: "/images/buildings/ANNU.jpg",
    href: "/buildings/ANNU",
    rooms: [
      "ANNU102",
      "ANNU103",
      "ANNU104",
      "ANNU105",
      "ANNU107",
      "ANNU110",
      "ANNU115",
      "ANNU116",
      "ANNU129",
      "ANNU130",
      "ANNU131",
      "ANNU133",
      "ANNU141",
      "ANNU156",
      "ANNU204",
      "ANNU205",
      "ANNU208",
      "ANNU212",
      "ANNU214",
      "ANNU215",
      "ANNU216",
      "ANNU217",
      "ANNU218",
      "ANNU220",
      "ANNU302",
      "ANNU305",
      "ANNU306",
      "ANNU327",
      "ANNU337",
      "ANNU355",
    ],
  },
  FS: {
    name: "Food Science",
    type: "Building",
    short: "FS",
    address: "Alumni Walk / Gordon Street, Guelph, ON N1G 2W1",
    image: "/images/buildings/FS.jpg",
    href: "/buildings/FS",
    rooms: ["FS102", "FS128", "FS129", "FS241", "FS246"],
  },
  LA: {
    name: "Landscape Architecture",
    type: "Building",
    short: "LA",
    address: "Reynolds Walk/Powerhouse Lane, Guelph, ON N1G 2W1",
    image: "/images/buildings/LA.jpg",
    href: "/buildings/LA",
    rooms: [
      "LA125",
      "LA126",
      "LA127",
      "LA131",
      "LA132",
      "LA133",
      "LA140",
      "LA143",
      "LA200A",
      "LA200B",
      "LA200C",
      "LA200D",
      "LA202",
      "LA203",
      "LA204",
      "LA205",
      "LA208",
    ],
  },
  MAC: {
    name: "Macdonald Hall",
    type: "Building",
    short: "MAC",
    address: "74 Macdonald St Guelph, ON N1G 1M8",
    image: "/images/buildings/MAC.jpg",
    href: "/buildings/MAC",
    rooms: ["MAC149"],
  },
  MACK: {
    name: "Mackinnon",
    type: "Building",
    short: "MACK",
    address: "87 Trent Ln, Guelph, ON N1G 1Y4",
    image: "/images/buildings/MACK",
    href: "/buildings/MACK",
    rooms: [
      "MACK016",
      "MACK018",
      "MACK019",
      "MACK019A",
      "MACK020",
      "MACK021",
      "MACK024",
      "MACK025A",
      "MACK025B",
      "MACK026",
      "MACK026A",
      "MACK026B",
      "MACK027",
      "MACK028",
      "MACK029",
      "MACK030",
      "MACK030B",
      "MACK031",
      "MACK059",
      "MACK101",
      "MACK103",
      "MACK107",
      "MACK108",
      "MACK109",
      "MACK114",
      "MACK115",
      "MACK116",
      "MACK117",
      "MACK118",
      "MACK118A",
      "MACK119",
      "MACK119A",
      "MACK120",
      "MACK121",
      "MACK128",
      "MACK129",
      "MACK130",
      "MACK131",
      "MACK132",
      "MACK134",
      "MACK223",
      "MACK224",
      "MACK225",
      "MACK226",
      "MACK227",
      "MACK228",
      "MACK229",
      "MACK230",
      "MACK231",
      "MACK231A",
      "MACK232",
      "MACK233",
      "MACK234",
      "MACK235",
      "MACK236",
      "MACK237",
      "MACK238",
      "MACK303",
      "MACK304",
      "MACK305",
      "MACK306",
      "MACK307",
      "MACK308",
      "MACK309",
      "MACK310",
      "MACK311",
      "MACK312",
      "MACK313",
      "MACK314",
      "MACK315",
      "MACK316",
      "MACK317",
      "MACK318",
    ],
  },

  MACN: {
    name: "MacNaughton",
    type: "Building",
    short: "MACN",
    address: "Reynolds Walk/Winegard Walk, Guelph, ON N1G 1Y4",
    image: "/images/buildings/MACN.jpg",
    href: "/buildings/MACN",
    rooms: [
      "MACN008",
      "MACN009",
      "MACN010",
      "MACN012",
      "MACN012A",
      "MACN013",
      "MACN014",
      "MACN015",
      "MACN016",
      "MACN017",
      "MACN018",
      "MACN020A",
      "MACN022",
      "MACN023",
      "MACN024",
      "MACN024A",
      "MACN025",
      "MACN030",
      "MACN054",
      "MACN055",
      "MACN056",
      "MACN057",
      "MACN101",
      "MACN104",
      "MACN105",
      "MACN106",
      "MACN113",
      "MACN114",
      "MACN115",
      "MACN118",
      "MACN119",
      "MACN120",
      "MACN121",
      "MACN122",
      "MACN123",
      "MACN124",
      "MACN128",
      "MACN129",
      "MACN130",
      "MACN131",
      "MACN133",
      "MACN135",
      "MACN136",
      "MACN202",
      "MACN226",
      "MACN227",
      "MACN228",
      "MACN230",
      "MACN231",
      "MACN235",
      "MACN237",
      "MACN238",
      "MACN239",
      "MACN240",
      "MACN345",
      "MACN346",
      "MACN348",
    ],
  },
  MACS: {
    name: "Macdonald Stewart",
    type: "Building",
    short: "MACS",
    address: "62 Macdonald Street, Guelph, ON N1G 1Y1",
    image: "/images/buildings/MACS.jpg",
    href: "/buildings/MACS",
    rooms: ["MACS117", "MACS121", "MACS129"],
  },
  MCLN: {
    name: "Maclachlan",
    type: "Building",
    short: "MCLN",
    address: "476 Gordon St, Guelph, ON N1G 1Y4",
    image: "/images/buildings/MCLN.jpg",
    href: "/buildings/MCLN",
    rooms: ["MCLN101", "MCLN102", "MCLN103", "MCLN107"],
  },
  ZAV: {
    name: "Zavits Hall",
    type: "Building",
    short: "ZAV",
    address: "Reynolds Walk/Winegard Walk, Guelph, ON N1G 1Y4",
    image: "/images/buildings/ZAV.jpg",
    href: "/buildings/ZAV",
    rooms: [
      "ZAV109",
      "ZAV110",
      "ZAV111",
      "ZAV112",
      "ZAV113",
      "ZAV208",
      "ZAV210",
      "ZAV211",
      "ZAV212",
      "ZAV309",
      "ZAV310",
      "ZAV311",
      "ZAV312",
      "ZAV313",
      "ZAV314",
      "ZAV315",
      "ZAV316",
      "ZAV317",
      "ZAV318",
      "ZAV319",
      "ZAV320",
      "ZAV401",
      "ZAV402",
      "ZAV403",
      "ZAV404",
      "ZAV405",
      "ZAV406",
      "ZAV407",
      "ZAV408",
      "ZAV409",
      "ZAV410",
      "ZAV411",
      "ZAV412",
      "ZAV413",
      "ZAV414",
      "ZAV415",
    ],
  },
  MINS: {
    name: "MacDonald Institute",
    type: "Building",
    short: "MINS",
    address: "50 Macdonald St, Guelph, ON N1G 1M8",
    image: "/images/buildings/MINS.jpg",
    href: "/buildings/MINS",
    rooms: [
      "MINSB1",
      "MINSB3",
      "MINSB5",
      "MINSB7",
      "MINSB11",
      "MINSB13",
      "MINSB14",
      "MINSB17",
      "MINSB18",
      "MINSB23",
      "MINSB33",
      "MINSB37",
      "MINSB57",
      "MINS103",
      "MINS106",
      "MINS206",
      "MINS209A",
      "MINS214",
      "MINS229",
      "MINS231",
      "MINS235",
      "MINS237",
      "MINS239",
      "MINS243",
      "MINS245",
    ],
  },
  ROZH: {
    name: "Rozanski Hall",
    type: "Building",
    short: "ROZH",
    address: "98 Trent Ln, Guelph, ON N1G 1Y1",
    image: "/images/buildings/ROZH.jpg",
    href: "/buildings/ROZH",
    rooms: [
      "ROZH101",
      "ROZH102",
      "ROZH103",
      "ROZH104",
      "ROZH105",
      "ROZH106",
      "ROZH107",
      "ROZH108",
    ],
  },
  SCIE: {
    name: "Science Complex",
    type: "Building",
    short: "SCIE",
    address: "474-570 Gordon St, Guelph, ON N1G 1Y2",
    image: "/images/buildings/SCIE.jpg",
    href: "/buildings/SCIE",
    rooms: [
      "SCIE1101A",
      "SCIE1301",
      "SCIE1301A",
      "SCIE1304",
      "SCIE1305",
      "SCIE1401",
      "SCIE1403",
      "SCIE1404",
      "SCIE1405",
      "SCIE1406",
      "SCIE1407",
      "SCIE1408",
      "SCIE1409",
      "SCIE1462",
      "SCIE2101",
      "SCIE2102",
      "SCIE2103",
      "SCIE2104",
      "SCIE2109",
      "SCIE2110",
      "SCIE2111",
      "SCIE2112",
      "SCIE2303",
      "SCIE2304",
      "SCIE2305",
      "SCIE2306",
      "SCIE2307",
      "SCIE2308",
      "SCIE2309",
      "SCIE2310",
      "SCIE2312",
      "SCIE2313",
      "SCIE2314",
      "SCIE2315",
      "SCIE3101",
      "SCIE3102A",
      "SCIE3103",
      "SCIE3104",
      "SCIE3105",
      "SCIE3106",
      "SCIE3108",
      "SCIE3109",
      "SCIE3110",
      "SCIE3111",
      "SCIE3112",
      "SCIE3303",
      "SCIE3304",
      "SCIE3305",
      "SCIE3306",
      "SCIE3307",
      "SCIE3308",
      "SCIE3309",
      "SCIE3310",
      "SCIE3311",
      "SCIE3314",
      "SCIE3315",
      "SCIE3316",
      "SCIE3317",
      "SCIE4101",
      "SCIE4102",
      "SCIE4103A",
      "SCIE4104A",
      "SCIE4108",
      "SCIE4109",
      "SCIE4110",
      "SCIE4111",
      "SCIE4112",
    ],
  },
  THRN: {
    name: "A. A. Thornbrough",
    type: "Building",
    short: "THRN",
    address: "80 South Ring Rd E, Guelph, ON N1G 1Y1",
    image: "/images/buildings/THRN.jpg",
    href: "/buildings/THRN",
    rooms: [
      "THRN1002",
      "THRN1004",
      "THRN1006",
      "THRN1007",
      "THRN1008",
      "THRN1009",
      "THRN1012",
      "THRN1015",
      "THRN1025",
      "THRN1027",
      "THRN1200",
      "THRN1307",
      "THRN1311",
      "THRN1313",
      "THRN1314",
      "THRN1319",
      "THRN1365",
      "THRN1424",
      "THRN1425",
      "THRN1426",
      "THRN1427",
      "THRN1428",
      "THRN1430",
      "THRN1432",
      "THRN1435",
      "THRN2196",
      "THRN2199",
      "THRN2307",
      "THRN2308",
      "THRN2313",
      "THRN2336",
      "THRN3402",
      "THRN3403",
      "THRN3404",
      "THRN3405",
    ],
  },
  WMEM: {
    name: "War Memorial Hall",
    type: "Building",
    short: "WMEM",
    address: "Gordon St/College Ave E, Guelph, ON N1G 1Y4",
    image: "/images/buildings/WMEM.jpg",
    href: "/buildings/WMEM",
    rooms: ["WMEM"],
  },
  CRSC: {
    name: "Crop Science",
    type: "Building",
    short: "CRSC",
    address: "117 Reynolds Walk, Guelph, ON N1G 1Y4",
    image: "/images/buildings/CRSC.jpg",
    href: "/buildings/CRSC",
    rooms: [
      "CRSC101",
      "CRSC104",
      "CRSC105",
      "CRSC106",
      "CRSC107",
      "CRSC109",
      "CRSC110",
      "CRSC112",
      "CRSC113",
      "CRSC114",
      "CRSC116",
      "CRSC117",
      "CRSC118",
      "CRSC118A",
      "CRSC119",
      "CRSC120",
      "CRSC121",
      "CRSC122",
      "CRSC123",
      "CRSC124",
      "CRSC127",
      "CRSC133",
      "CRSC134",
      "CRSC136",
      "CRSC138",
      "CRSC139",
      "CRSC140",
      "CRSC141",
      "CRSC143",
      "CRSC144",
      "CRSC151",
      "CRSC205",
      "CRSC210",
      "CRSC216",
      "CRSC219",
      "CRSC222",
      "CRSC225",
      "CRSC302",
      "CRSC302A",
      "CRSC307",
      "CRSC308",
      "CRSC310",
      "CRSC318",
      "CRSC322",
      "CRSC403",
      "CRSC411",
      "CRSC415",
      "CRSC418",
      "CRSC419",
      "CRSC426",
    ],
  },
};
