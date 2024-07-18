export interface MenuItem {
  title: string;
  href: string;
}

export const MenuItemsData: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Properties",
    href: "/properties",
  },
  {
    title: "Services",
    href: "/services",
  },
];

export interface HeroCardsItem {
  title: string;
  subtitle: string;
}

export const HeroCardsData: HeroCardsItem[] = [
  {
    title: "200+",
    subtitle: "Happy Customers",
  },
  {
    title: "10K+",
    subtitle: "Properties For Clients",
  },
  {
    title: "16+",
    subtitle: "Years of Experience",
  },
];

export const MidHeroCards = [
  {
    icon: "/icons/house.png",
    subtitle: "Find Your Dream Home",
    href: "/properties",
  },
  {
    icon: "/icons/money.png",
    subtitle: "Unlock Property Value",
    href: "/properties",
  },
  {
    icon: "/icons/buildings.png",
    subtitle: "Property Management",
    href: "/properties",
  },
  {
    icon: "/icons/sun.png",
    subtitle: "Smart Investments",
    href: "/properties",
  },
];

export const properties = [
  {
    image: "/images/1.png",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bedroom villa in a peacefull surbuban neighbourhood",
    price: "550",
  },
  {
    image: "/images/2.png",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with parametric city views",
    price: "700",
  },
  {
    image: "/images/3.png",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
    price: "600",
  },
  {
    image: "/images/1.png",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bedroom villa in a peacefull surbuban neighbourhood",
    price: "550",
  },
  // {
  //   image: "/images/2.png",
  //   title: "Metropolitan Haven",
  //   description:
  //     "A chic and fully-furnished 2-bedroom apartment with parametric city views",
  //   price: "700",
  // },
];

export const Testemonies = [
  {
    title: "Exceptional Service!",
    desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    profile: "/images/1.png",
    location: "USA, California",
    name: "Wade Warren",
  },
  {
    title: "Efficient and Reliable",
    desc: "Estaine provided us with top-notchh service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
    profile: "/images/2.png",
    location: "USA, Florida",
    name: "Emelle Thompson",
  },
  {
    title: "Trusted Advisors",
    desc: "The estain team guided us hroght the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    profile: "/images/3.png",
    location: "USA, Nevada",
    name: "John MAns",
  },
];

export const FAQ = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us. ",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents. ",
  },
];
