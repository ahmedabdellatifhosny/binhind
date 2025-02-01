import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image src="/images/hero.jpeg" alt="hero" fill />
      <div className="overlay"></div>
      <div className="hero-text">
        <p className="text-center text-capitalize">
          the city of dammam that provides industrial! and mechanical supplies
          services
        </p>
      </div>
    </section>
  );
}
