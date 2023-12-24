import Image from "next/image";
import Home from "../components/Home";
import Feedback from "@/components/Feedback";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default function Home1() {
  return (
    <>
      <Home />
      <Feedback />
      <Faqs />
      <Footer />
    </>
  );
}
