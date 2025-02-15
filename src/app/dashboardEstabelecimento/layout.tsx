import Footer from "../components/Footer";
import NavigationMenu from "../components/NavigationMenu";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-[0.6fr_2fr_2fr]">
        <NavigationMenu />
        {children}
      </div>
      <Footer />
    </>
  );
}
