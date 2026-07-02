import reaperYellowSonalika from "@/assets/products/reaper-yellow-sonalika.jpg";
import reaperOrangeGreen from "@/assets/products/reaper-orange-green.jpg";
import reaperYellowCloseup from "@/assets/products/reaper-yellow-closeup.jpg";
import reaperRedMounted from "@/assets/products/reaper-red-mounted.jpg";
import reaperSwarajYellow from "@/assets/products/reaper-swaraj-yellow.jpg";
import posterMountedFront from "@/assets/products/poster-mounted-front.jpg";
import posterBinder from "@/assets/products/poster-binder.jpg";
import posterCatalogue from "@/assets/products/poster-catalogue.jpg";
import posterContact from "@/assets/products/poster-contact.jpg";

export const IMAGES = {
  reaperYellowSonalika,
  reaperOrangeGreen,
  reaperYellowCloseup,
  reaperRedMounted,
  reaperSwarajYellow,
  posterMountedFront,
  posterBinder,
  posterCatalogue,
  posterContact,
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  category: string;
  specs: { label: string; value: string }[];
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "deosi-mounted-reaper-front-type",
    name: "Deosi Mounted Reaper — Front Type",
    tagline: "Tractor driven · PTO operated · 2230 mm working width",
    image: IMAGES.reaperRedMounted,
    category: "Tractor Mounted Reaper",
    description:
      "Our flagship front-mounted reaper delivers clean, low-loss cutting for wheat and paddy. Built with a heavy-duty frame, high-carbon blades and precision-engineered fingers for uninterrupted seasons of work.",
    specs: [
      { label: "Model", value: "JRBFTA" },
      { label: "Tractor HP", value: "30 HP & above" },
      { label: "Engine RPM", value: "1800" },
      { label: "PTO RPM", value: "540 / 1000" },
      { label: "Length", value: "1150 mm" },
      { label: "Width", value: "2450 mm" },
      { label: "Height", value: "700 mm" },
      { label: "Working Width", value: "2230 mm" },
      { label: "Blades", value: "29" },
      { label: "Fingers", value: "15" },
      { label: "Category", value: "Wheat & Paddy" },
    ],
  },
  {
    slug: "deosi-reaper-binder",
    name: "Deosi Reaper Binder",
    tagline: "Cut & bind in a single pass — wheat & paddy binder",
    image: IMAGES.reaperOrangeGreen,
    category: "Reaper Binder",
    description:
      "The Deosi Reaper Binder cuts and neatly bundles crop in a single pass — saving hours of labour. Ideal for wheat and paddy operations where clean stacking matters as much as speed.",
    specs: [
      { label: "Model", value: "JRBFTA" },
      { label: "Tractor HP", value: "30 HP & above" },
      { label: "Engine RPM", value: "1800" },
      { label: "PTO RPM", value: "540 / 1000" },
      { label: "Length", value: "1150 mm" },
      { label: "Width", value: "2450 mm" },
      { label: "Working Width", value: "2230 mm" },
      { label: "Blades", value: "29" },
      { label: "Fingers", value: "15" },
      { label: "Category", value: "Wheat & Paddy Binder" },
    ],
  },
  {
    slug: "deosi-reaper-standard",
    name: "Deosi Reaper — Standard",
    tagline: "The Deosi original — India's No.1 tractor reaper",
    image: IMAGES.reaperYellowSonalika,
    category: "Tractor Mounted Reaper",
    description:
      "The reaper that built our name since 1964. Rugged construction, low maintenance, and clean 1–2 inch cutting from ground level across wheat, paddy, mustard, soyabean, jubar, bajra and maize.",
    specs: [
      { label: "Tractor HP", value: "30 HP & above" },
      { label: "PTO RPM", value: "540 / 1000" },
      { label: "Working Width", value: "2230 mm" },
      { label: "Blades", value: "29" },
      { label: "Fingers", value: "15" },
      { label: "Certification", value: "ISO 9001:2008 · Govt. of India Approved" },
    ],
  },
  {
    slug: "deosi-multicrop-reaper",
    name: "Deosi Multicrop Reaper",
    tagline: "One machine, seven crops — wheat to maize",
    image: IMAGES.reaperSwarajYellow,
    category: "Tractor Mounted Reaper",
    description:
      "Purpose-engineered for Indian smallholders: harvest wheat, paddy, mustard, soyabean, jubar, bajra and maize with the same machine. Field-serviceable fingers and blades keep downtime near zero.",
    specs: [
      { label: "Working Width", value: "2230 mm" },
      { label: "Blades", value: "29" },
      { label: "Fingers", value: "15" },
      { label: "Crops", value: "Wheat, Paddy, Mustard, Soyabean, Jubar, Bajra, Maize" },
    ],
  },
  {
    slug: "deosi-reaper-heavy-duty",
    name: "Deosi Reaper — Heavy Duty",
    tagline: "Reinforced for large-acreage seasons",
    image: IMAGES.reaperYellowCloseup,
    category: "Tractor Mounted Reaper",
    description:
      "Extra bracing, thicker cutter bar and hardened chain drives for operators running long, continuous shifts. Same low-loss Deosi cut, built to punish.",
    specs: [
      { label: "Tractor HP", value: "35 HP & above" },
      { label: "Working Width", value: "2230 mm" },
      { label: "Blades", value: "29" },
      { label: "Warranty", value: "Full season, backed nationwide" },
    ],
  },
  {
    slug: "deosi-back-reaper",
    name: "Deosi Tractor Mounted Back Reaper",
    tagline: "Rear-mounted variant for tight field turns",
    image: IMAGES.reaperOrangeGreen,
    category: "Tractor Mounted Reaper",
    description:
      "Rear-mount variant for operators who prefer visibility of the tractor front and quick coupling to the 3-point linkage.",
    specs: [
      { label: "Mount", value: "3-Point Linkage (Rear)" },
      { label: "Tractor HP", value: "30 HP & above" },
      { label: "Working Width", value: "2230 mm" },
    ],
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Videos" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export const COMPANY = {
  name: "Deosi Agriculture Works",
  brand: "Deosi Reaper",
  tagline: "A House of Agriculture Implements",
  founded: 1964,
  address: "Bathinda Road, Mansa Kenchiyan Chownk, Opp. Indian Oil Petrol Pump, Mansa, Punjab, 151505",
  showroom: "Link Road, Near Bus Stand, Mansa – 151505, Punjab, India",
  phones: ["+91 1652 227 103", "+91 98157 80231", "+91 98158 35221"],
  email: "deosireapers@gmail.com",
  website: "www.deosireaper.in",
};
