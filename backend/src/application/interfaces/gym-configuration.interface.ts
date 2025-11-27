export interface IGymConfiguration {
   id: number;
   slug: string;
   name: string;
   logo: string;
   colors: Colors;
   networks: Networks;
   landing: Landing;
}

export interface Colors {
   primary: string;
   secondary: string;
}

export interface Landing {
   hero: Hero;
   classes: Class[];
   locations: Location[];
   ctaSection: LandingCta;
   plans: Plan[];
}

export interface Class {
   name: string;
   description: string;
   image: string;
}

export interface LandingCta {
   title: string;
   subtitle: string;
   image: string;
   hoverImage: string;
   background: string;
   cta: CtaButton;
}

export interface CtaButton {
   label: string;
   href: string;
}

export interface Hero {
   title: string;
   subtitle: string;
   images: string[];
   decorativeImage: string;
   cta: CtaButton;
}

export interface Plan {
   name: string;
   price: string;
   description: string;
   benefits: string[];
   featured: boolean;
}

export interface Location {
   name: string;
   address: string;
   schedule: string;
   image: string;
}

export interface Networks {
   instagram: string;
   facebook: string;
   whatsapp: string;
}
