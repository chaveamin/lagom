import Hero from "@/components/Hero";
import ClientDashboard from "@/components/ClientDashboard";
import Styles from "@/components/Styles";
import StyleManager from "@/components/StyleManager";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientDashboard />
      <Styles />
      <StyleManager />
    </>
  );
}
