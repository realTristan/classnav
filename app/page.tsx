import GithubRef from "./components/GithubRef";
import GradientCard from "./components/GradientCard";
import GradientTitle from "./components/GradientHeader";
import GradientSearchBar from "./components/GradientSearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <GradientTitle />
      <GradientSearchBar />
      <GithubRef />
      <div className="m-12 flex flex-wrap gap-12">
        <GradientCard />
        <GradientCard />
        <GradientCard />
      </div>
    </main>
  );
}
