import AdminNavbar from "../organisms/AdminNavbar";
import Footer from "../organisms/Footer";
import Sidebar from "../organisms/Sidebar";

interface LayoutProps {
  title: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100">
        <AdminNavbar title={props.title} />
        <div
          className="px-4 md:px-10 mx-auto w-full pb-12 lg:pb-20"
          style={{ backgroundColor: "#1E293B" }}
        >
          <div className="flex flex-wrap">
            <div className="w-full xl:w-5/5 xl:mx-auto px-4 mt-16 lg:mt-32">
              {props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
