import PricesPlans from "@/components/PricesPlans/PricesPlans";
import css from "./Prices.module.css";
import PricesHero from "@/components/PricesHero/PricesHero";

export default function Prices() {
  return (
    <>
      <PricesHero />
      <PricesPlans />
    </>
  );
}
