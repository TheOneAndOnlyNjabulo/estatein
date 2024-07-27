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

export const adminMenu = [
  {
    title: "My Properties",
    href: "/admin/properties",
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

export const footerLinks = [
  {
    title: "Home",
    links: [
      { title: "Hero Section", url: "/#hero" },
      { title: "Featured", url: "/#features" },

      { title: "Testimonials", url: "/#testimonials" },
      { title: "FAQ's", url: "/#faq" },
    ],
  },
  {
    title: "About Us",
    links: [
      { title: "Our Story", url: "/about-us/#story" },
      { title: "Our Works", url: "/about-us/#works" },
      { title: "How It Works", url: "/about-us/#howwork" },
      { title: "Our Team", url: "/about-us/#team" },
    ],
  },
  {
    title: "Properties",
    links: [
      { title: "Portfolio", url: "/properties/#portfolio" },
      { title: "Categories", url: "/properties/#categories" },
      ,
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Valuation Mastery", url: "/service/#valuation" },
      { title: "Strategic Marketing", url: "/service/#strategic" },
      { title: "Negotiation Wizardry", url: "/service/#negotiation" },
      { title: "Closing Succes", url: "/service/#closing" },
      { title: "Property Management", url: "/service/#property" },
    ],
  },
];

export const exprience = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    describtion:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    describtion:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    describtion:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    describtion:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    describtion:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice. ",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    describtion:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export const Teamm = [
  {
    name: "T'Chaka",
    role: "Founder",
    imageUrl: "/team1.jpg",
  },
  {
    name: "Harley Quinn",
    role: "Chief Real Estate Officer",
    imageUrl: "/team2.jpg",
  },
  {
    name: "Bruce Wayne",
    role: "Head of Property Management",
    imageUrl: "/team3.jpg",
  },
  {
    name: "Monica Rambeau",
    role: "Legal Councel",
    imageUrl: "/team4.jpg",
  },
];
