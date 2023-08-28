import Link from "next/link";

export default function ClassfindRef() {
  return (
    <Link
      target="_blank"
      href="https://classfind.com/guelph"
      className="fixed bottom-4 left-4 z-10 flex flex-row rounded-lg border-2 border-white bg-slate-950 p-3 hover:bg-slate-900 xs:bottom-7 xs:left-7 xs:p-4"
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        className="mr-2 h-3 w-3 -rotate-45 scale-x-[-1] fill-white xs:mr-3 xs:h-5 xs:w-5"
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M12306 12780 c-32 -10 -2773 -1376 -6092 -3036 -5544 -2772 -6038
-3020 -6084 -3066 -58 -57 -91 -117 -116 -211 -17 -64 -17 -70 0 -134 24 -93
60 -159 116 -213 42 -41 730 -387 6091 -3067 3791 -1895 6067 -3028 6107
-3039 54 -14 70 -15 123 -4 179 38 287 142 335 323 17 64 17 70 0 134 -9 36
-26 84 -38 106 -11 22 -884 1336 -1941 2921 -1275 1911 -1922 2889 -1922 2906
0 17 647 995 1922 2906 1057 1585 1930 2899 1941 2921 12 22 29 70 38 106 17
64 17 70 0 134 -46 173 -138 268 -308 317 -69 20 -97 19 -172 -4z"
          />
        </g>
      </svg>
      <p className="text-xs text-white xs:text-base">
        Data provided by&nbsp;
        <mark className="bg-transparent bg-gradient-to-r from-blue-600 to-violet-700 bg-clip-text italic text-transparent">
          classfind&nbsp;
        </mark>
      </p>
    </Link>
  );
}
