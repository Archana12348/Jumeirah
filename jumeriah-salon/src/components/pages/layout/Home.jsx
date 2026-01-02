import SalonSection from "../gallery/GallerySection";
import ServicesSection from "../servicehome/Servicehome";
import Festival from "../../common/Festival";
import LocationsSection from "../../common/Location";
import TestimonialsSlider from "../testimonials/Testimonials";
import FeaturesSection from "../../common/FeaturesSection";
import WhyTrustUs from "../chooseus/WhyTrustUs";

export default function Home() {
  return (
    <>
      {/* <SalonSection /> */}
      <FeaturesSection />
      <ServicesSection />
      <Festival />
      <LocationsSection />
      <WhyTrustUs />
      <TestimonialsSlider />
    </>
  );
}
