import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <main className="w-full max-w-[1100px] mt-0 mx-auto pt-12 px-4 pb-16">
      <div className="w-full grid grid-cols-[minmax(280px,340px)_minmax(0,1fr)] gap-6 items-start">
        <AddUser />
        <UsersList />
      </div>
    </main>
  );
}

export default App;
