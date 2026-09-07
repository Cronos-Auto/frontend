import { Nav } from "../components/nav";
import { Hero } from "../components/sections/hero";
import { Problem } from "../components/sections/problem";
import { Benefits } from "../components/sections/benefits";
import { HowItWorks } from "../components/sections/how-it-works";
import { Expansion } from "../components/sections/expansion";
import { Team } from "../components/sections/team";
import { CtaFooter } from "../components/sections/cta-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Expansion />
        <Team />
        <CtaFooter />
      </main>
    </div>
  );
}
