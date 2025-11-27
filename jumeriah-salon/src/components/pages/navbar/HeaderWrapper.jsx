import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import Header from "./Header";

export default function HeaderWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth <= 768); // MOBILE BREAKPOINT
      // MOBILE + TABLET VIEW
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileHeader /> : <Header />}</>;
}
