export default function GradientHeader() {
  return (
    <header className="flex flex-col items-center justify-center text-center lg:w-1/2">
      <h2 className="text-8xl font-black text-white">
        Class&nbsp;
        <mark className="bg-transparent bg-gradient-to-r from-blue-600 to-violet-700 bg-clip-text italic text-transparent">
          Nav&nbsp;
        </mark>
      </h2>
      <p className="mt-3 font-medium tracking-wider text-white">
        The{" "}
        <mark className="bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text italic tracking-wide text-transparent">
          easiest
        </mark>
        ,&nbsp;
        <mark className="bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text italic tracking-wide text-transparent">
          modern
        </mark>
        , and{" "}
        <mark className="bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text italic tracking-wide text-transparent">
          most efficient
        </mark>{" "}
        way to navigate your classes. Start by searching for a building, room,
        or class. To the side are links to common websites such as the UofGuelph
        Homepage, GryphMail, CourseLink, Subreddit, and more.
      </p>
    </header>
  );
}
