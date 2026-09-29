import { UserRound } from "lucide-react";
export default function Header({ userCount }) {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 border-b border-cyan-400 ring-4 ring-cyan-400/10 bg-slate-950/90 px-4 py-4 shadow-lg shadow-black/10 backdrop-blur sm:px-5">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl shadow-lg shadow-blue-500/10">
            <div className="flex items-center justify-center rounded-[11px] bg-slate-950">
              <img
                src="Logo.png"
                className="w-14 h-14 relative rounded-full p-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
              />
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-base font-bold text-transparent sm:text-lg">
              UserManager
            </div>
            <div className="text-[11px] text-slate-500">
              Manage your users easily
            </div>
          </div>
        </div>

        <div className="whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-sm text-slate-400">
          Users{" "}
          <span className="ml-1 font-semibold text-cyan-300">{userCount}</span>
        </div>
      </div>
    </header>
  );
}
