import Auth from "../components/organisms/Auth";

export default function Home() {
  return (
    <div
      className={`flex h-screen justify-center items-center`}
      style={{ backgroundColor: "#1E293B" }}
    >
      <Auth />
    </div>
  );
}
