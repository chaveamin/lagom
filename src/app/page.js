import Hero from "@/components/Hero";
import ClientDashboard from "@/components/ClientDashboard";
import Styles from "@/components/Styles";
import StyleManager from "@/components/StyleManager";
import MenuManager from "@/components/MenuManager";
import DifferentLayout from "@/components/DifferentLayout";
import Order from "@/components/Order";
import Extension from "@/components/Extension";
import Other from "@/components/Other";
import Customer from "@/components/Customer";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Bg from "@/components/Bg";

export default function Home() {
  return (
    <>
      <Bg />
      <Hero />
      <ClientDashboard />
      <Styles />
      <StyleManager />
      <MenuManager />
      <DifferentLayout />
      <Order />
      <Extension />
      <Other />
      <Customer />
      <Pricing />
      <CTA />
    </>
  );
}
