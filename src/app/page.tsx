import Header from "./ui/Header";
import TableWithSearch from "./ui/Table";
import Stats from "./ui/Stats";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-100">
      <Header />
      <Stats />
      <TableWithSearch />
    </div>
  );
}
