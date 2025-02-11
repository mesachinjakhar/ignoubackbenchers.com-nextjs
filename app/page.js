import Alert from "@/components/Alert";
import QuickActions from "@/components/QuickActions";
import CreateOrder from "@/components/CreateOrder";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Alert />
      <QuickActions />
      <h1 className="text-4xl text-center xs:text-2xl px-2">
        Order Handwritten Assignment
      </h1>
      <CreateOrder />
      <Blog />
      <Faq />
      <Footer />
    </>
  );
}
