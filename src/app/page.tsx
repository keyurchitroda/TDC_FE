import Image from "next/image";
import Home from "../components/Home";
import Feedback from "@/components/Feedback";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home1() {
  return (
    <>
      <Navbar />
      <Home />
      <Feedback />
      {/* <Faqs /> */}
      <Footer />
    </>
  );
}
