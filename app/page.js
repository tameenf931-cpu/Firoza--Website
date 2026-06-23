import BrandMessage from "../components/BrandMessage";
import FeaturedCategories from "../components/FeaturedCategories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InstagramGallery from "../components/InstagramGallery";
import Newsletter from "../components/Newsletter";
import { ProductRow } from "../components/Product";
import SectionTitle from "../components/SectionTitle";
import StyleGuide from "../components/StyleGuide";
import Testimonials from "../components/Testimonials";
import { LUXURY_PRET, NEW_ARRIVALS, UNSTITCHED } from "../lib/data";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section id="new-arrivals" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Freshly Arrived" title="New Arrivals" />
        <ProductRow products={NEW_ARRIVALS} />
      </section>

      <FeaturedCategories />

      <section id="unstitched" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Craft Your Look" title="Unstitched Lawn" />
        <ProductRow products={UNSTITCHED} />
      </section>

      <BrandMessage />

      <section id="luxury-pret" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Ready To Wear" title="Luxury Pret" />
        <ProductRow products={LUXURY_PRET} />
      </section>

      <Testimonials />
      <StyleGuide />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
