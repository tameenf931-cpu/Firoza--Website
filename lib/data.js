export const formatPKR = (price) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);

const image = (seed, width = 900, height = 1200) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const NEW_ARRIVALS = [
  {
    id: "na-1",
    name: "Ayla Embroidered Lawn",
    category: "New Arrival",
    price: 12950,
    img: image("firoza-ayla"),
  },
  {
    id: "na-2",
    name: "Zehra Printed Co-Ord",
    category: "Ready To Wear",
    price: 8950,
    img: image("firoza-zehra"),
  },
  {
    id: "na-3",
    name: "Mira Festive Chiffon",
    category: "Festive",
    price: 22450,
    img: image("firoza-mira"),
  },
  {
    id: "na-4",
    name: "Saira Cotton Net Suit",
    category: "Luxury Pret",
    price: 18950,
    img: image("firoza-saira"),
  },
];

export const UNSTITCHED = [
  {
    id: "us-1",
    name: "Nilofer Three Piece Lawn",
    category: "Unstitched",
    price: 10950,
    img: image("firoza-nilofer"),
  },
  {
    id: "us-2",
    name: "Rumi Jacquard Dupatta Set",
    category: "Unstitched",
    price: 13950,
    img: image("firoza-rumi"),
  },
  {
    id: "us-3",
    name: "Emaan Summer Lawn",
    category: "Unstitched",
    price: 9950,
    img: image("firoza-emaan"),
  },
  {
    id: "us-4",
    name: "Laleh Embroidered Edit",
    category: "Unstitched",
    price: 15450,
    img: image("firoza-laleh"),
  },
];

export const LUXURY_PRET = [
  {
    id: "lp-1",
    name: "Noor Silk Kurta",
    category: "Luxury Pret",
    price: 16950,
    img: image("firoza-noor"),
  },
  {
    id: "lp-2",
    name: "Arezoo Organza Set",
    category: "Luxury Pret",
    price: 24950,
    img: image("firoza-arezoo"),
  },
  {
    id: "lp-3",
    name: "Mehr Velvet Ensemble",
    category: "Formal Wear",
    price: 32950,
    img: image("firoza-mehr"),
  },
  {
    id: "lp-4",
    name: "Farah Modest Co-Ord",
    category: "Modest Fashion",
    price: 14500,
    img: image("firoza-farah"),
  },
];

export const CATEGORIES = [
  { name: "Unstitched", img: image("firoza-cat-unstitched") },
  { name: "Luxury Pret", img: image("firoza-cat-pret") },
  { name: "Festive Wear", img: image("firoza-cat-festive") },
  { name: "Formal Wear", img: image("firoza-cat-formal") },
  { name: "Casual Wear", img: image("firoza-cat-casual") },
  { name: "Modest Fashion", img: image("firoza-cat-modest") },
];

export const REVIEWS = [
  {
    id: "review-1",
    name: "Ayesha K.",
    rating: 5,
    text: "The fabric feels premium and the embroidery is even better in person.",
  },
  {
    id: "review-2",
    name: "Maham R.",
    rating: 5,
    text: "Elegant pieces that are easy to style for both family events and dinners.",
  },
  {
    id: "review-3",
    name: "Sana A.",
    rating: 5,
    text: "Beautiful packaging, quick delivery, and a fit that needed no extra work.",
  },
];

export const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "How To Style Pastels For Daytime Events",
    img: image("firoza-blog-pastels", 1000, 750),
  },
  {
    id: "blog-2",
    title: "Choosing Fabrics For Summer Weddings",
    img: image("firoza-blog-weddings", 1000, 750),
  },
  {
    id: "blog-3",
    title: "The Modern Guide To Modest Occasion Wear",
    img: image("firoza-blog-modest", 1000, 750),
  },
];

export const INSTAGRAM = [
  image("firoza-insta-1", 600, 600),
  image("firoza-insta-2", 600, 600),
  image("firoza-insta-3", 600, 600),
  image("firoza-insta-4", 600, 600),
  image("firoza-insta-5", 600, 600),
  image("firoza-insta-6", 600, 600),
];
