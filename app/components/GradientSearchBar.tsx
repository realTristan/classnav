export default function GradientSearchBar() {
  return (
    <div className="relative mt-6 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md">
      <input
        placeholder="Search"
        className="m-0.5 h-12 w-96 rounded-xl bg-slate-950 p-4 text-slate-400 ring-0 placeholder:text-slate-400 focus:outline-none focus:ring-0"
      />
    </div>
  );
}
