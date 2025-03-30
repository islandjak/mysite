
import React from 'react';

type HeroProps = {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="mb-16 transition-all duration-300">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {subtitle}
      </p>
    </section>
  );
};

export default Hero;
