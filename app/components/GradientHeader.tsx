export default function GradientTitle() {
  return (
    <header className="flex w-1/2 flex-col items-center justify-center text-center">
      <h2 className="text-8xl font-black text-white">
        Class{" "}
        <mark className="bg-transparent bg-gradient-to-r from-blue-600 to-violet-700 bg-clip-text italic text-transparent">
          Nav
        </mark>
      </h2>
      <p className="mt-3 font-medium text-white">
        The easiest,{" "}
        <mark className="bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-bold tracking-wide text-transparent">
          modern
        </mark>
        , and most accessible way to navigate your classes. Start by searching
        for a building, room, or class. Below are links to common websites such
        as the UofGuelph Homepage, GryphMail, CourseLink, Subreddit, and more.
      </p>
    </header>
  );
}
