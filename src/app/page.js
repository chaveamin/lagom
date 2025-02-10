import Hero from "@/components/Hero";
import ClientDashboard from "@/components/ClientDashboard";
import Styles from "@/components/Styles";
import StyleManager from "@/components/StyleManager";
import MenuManager from "@/components/MenuManager";
import DifferentLayout from "@/components/DifferentLayout";
import Order from "@/components/Order";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientDashboard />
      <Styles />
      <StyleManager />
      <MenuManager />
      <DifferentLayout />
      <Order />
    </>
  );
}
