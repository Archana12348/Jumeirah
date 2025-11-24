import SalonSection from "../gallery/GallerySection";
import ServicesSection from "../servicehome/Servicehome";
import Festival from "../../common/Festival";
import LocationsSection from "../../common/Location";
import TestimonialsSlider from "../testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <SalonSection />
      <ServicesSection />
      <Festival />
      <LocationsSection />
      <TestimonialsSlider />
    </>
  );
}
