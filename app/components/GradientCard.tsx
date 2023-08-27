import Link from "next/link";

interface GradientCardProps {
  name: string;
  short?: string;
  type: string;
  href: string;
}
export default function GradientCard(props: GradientCardProps) {
  return (
    <Link
      href={props.href}
      className="relative cursor-pointer rounded-xl bg-slate-700 from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md"
    >
      <div className="m-0.5 flex h-60 w-60 flex-col items-center justify-center rounded-xl bg-slate-950 text-center text-white sm:h-52 sm:h-52">
        <div className="mx-7">
          <h1 className="text-xl font-semibold">{props.name}</h1>
          <p>{props.short}</p>
          <h2 className="mt-2 text-sm uppercase tracking-wide">
            #{props.type}
          </h2>
        </div>
      </div>
    </Link>
  );
}
