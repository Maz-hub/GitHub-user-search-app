import UserSearch from "./assets/components/UserSearch";

const App = () => {
  return (
    <section className="my-[130px] mx-[355px]">
      <div className="flex justify-between items-center">
        <h1 className="text-preset-1 text-neutral-900">devfinder</h1>
        <div className="flex items-center gap-4">
          <p className="text-preset-8 text-neutral-500">DARK</p>
          <img src="/images/icon-moon.svg" alt="Moon icon for dark mode" />
        </div>
      </div>
      <UserSearch />
    </section>
  );
};

export default App;
