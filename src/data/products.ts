import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Velvet Mattes
  {
    id: 'bloom-rouge-haute',
    name: 'Bloom Rouge Haute Velvet Matte',
    tagline: 'Iconic weightless crimson velvet formula',
    category: 'Velvet Matte',
    price: 1899,
    rating: 4.9,
    reviewsCount: 210,
    isBestSeller: true,
    mainImage: '/images/prod_gold_bullet.png',
    hoverImage: '/images/model_rose.png',
    description: 'An ultra-luxurious velvet lipstick infused with Damask Rose oil. Imparts rich color payload with a soft-focus matte finish that lasts 14 hours.',
    details: [
      'Infused with cold-pressed rose extract',
      'Hyaluronic acid spheres for non-drying moisture',
      'Refillable gold-gilded magnetic bullet',
      'Certified Vegan & Cruelty-Free'
    ],
    shades: [
      { id: 'crimson-bloom', name: 'Crimson Bloom', hex: '#800E22', swatchImage: '/images/img5.jpeg', productImage: '/images/prod_gold_bullet.png', description: 'Pure velvet red inspired by garden roses.', finish: 'Velvet Matte' },
      { id: 'dusk-berry', name: 'Dusk Berry', hex: '#3B0916', swatchImage: '/images/img5.jpeg', productImage: '/images/img5.jpeg', description: 'Enigmatic dark plum with fine ruby dust.', finish: 'Satin Velvet' },
      { id: 'nudite-blush', name: 'Nudité Blush', hex: '#C48B7A', swatchImage: '/images/img6.jpeg', productImage: '/images/img6.jpeg', description: 'Sophisticated warm nude for daily elegance.', finish: 'Soft Matte' }
    ]
  },
  {
    id: 'scarlet-empress-velvet',
    name: 'Scarlet Empress Velvet Matte',
    tagline: 'Vivid classic scarlet for iconic presence',
    category: 'Velvet Matte',
    price: 1999,
    rating: 5.0,
    reviewsCount: 178,
    isBestSeller: true,
    mainImage: '/images/img7.jpeg',
    hoverImage: '/images/img8.jpeg',
    description: 'Intense red lip bullet designed for statement evening looks. Glides smoothly with zero feathering.',
    details: [
      'Vivid red light-diffusing mineral pigments',
      'Transfer-resistant 12-hour formula',
      'Enriched with vitamin E & rosehip oil'
    ]
  },
  {
    id: 'royal-burgundy-velvet',
    name: 'Royal Burgundy Velvet Matte',
    tagline: 'Deep wine drama with micro-fine ruby shimmer',
    category: 'Velvet Matte',
    price: 2199,
    rating: 4.8,
    reviewsCount: 95,
    mainImage: '/images/prod_obsidian.png',
    hoverImage: '/images/model_berry.png',
    description: 'Dark wine berry lipstick formulated for bold luxury sophistication.',
    details: [
      'Micro-micronized obsidian and ruby dust',
      'Hydrating velvet texture',
      'Smudge-proof finish'
    ]
  },
  {
    id: 'blush-petal-velvet',
    name: 'Blush Petal Soft Matte',
    tagline: 'Romantic soft pink velvet texture',
    category: 'Velvet Matte',
    price: 1699,
    rating: 4.7,
    reviewsCount: 120,
    mainImage: '/images/prod_nude_satin.png',
    hoverImage: '/images/model_rose.png',
    description: 'A gentle dusty rose nude lipstick that enhances your natural lip tone.',
    details: ['Organic jojoba oil base', 'Featherlight airy feel', 'Subtle rose fragrance']
  },

  // 2. Liquid Silk
  {
    id: 'crimson-silk-liquid',
    name: 'Crimson Silk Liquid Lip Stain',
    tagline: 'High-shine liquid silk coat with 16hr stain',
    category: 'Liquid Silk',
    price: 1799,
    rating: 4.9,
    reviewsCount: 154,
    isNew: true,
    mainImage: '/images/prod_liquid_matte.png',
    hoverImage: '/images/model_ruby.png',
    description: 'A hybrid liquid lipstick that combines glass mirror gloss with high-pigment stain power.',
    details: ['Precision teardrop applicator', 'Water-resistant coat', 'Plumping peptide complex']
  },
  {
    id: 'ruby-glaze-liquid',
    name: 'Ruby Glaze Liquid Silk Rouge',
    tagline: 'Specular mirror shine in intense ruby',
    category: 'Liquid Silk',
    price: 1899,
    rating: 4.8,
    reviewsCount: 88,
    mainImage: '/images/img5.jpeg',
    hoverImage: '/images/model_ruby.png',
    description: 'Dramatic liquid red lacquer that coats lips in glassy multidimensional pigment.',
    details: ['Non-sticky liquid formula', 'Rosehip hydration elixir', 'High reflex mirror shine']
  },
  {
    id: 'nude-gloss-liquid',
    name: 'Peachy Nude Silk Liquid Lip',
    tagline: 'Warm champagne nude glass finish',
    category: 'Liquid Silk',
    price: 1599,
    rating: 4.6,
    reviewsCount: 67,
    mainImage: '/images/prod_nude_satin.png',
    hoverImage: '/images/model_nude.png',
    description: 'Subtle peach-nude liquid lip glaze for everyday natural shine.',
    details: ['Shea butter extract', 'Instant lip volume effect', 'Hydrating gloss formulation']
  },
  {
    id: 'plum-velour-liquid',
    name: 'Plum Velour Liquid Velvet',
    tagline: 'Dark berry liquid rouge with satin cushion',
    category: 'Liquid Silk',
    price: 1999,
    rating: 4.9,
    reviewsCount: 140,
    mainImage: '/images/prod_liquid_matte.png',
    hoverImage: '/images/model_berry.png',
    description: 'Rich berry liquid rouge with soft cushion finish.',
    details: ['Vitamin C serum infused', 'Longwear 14 hour stain', 'Cruelty-free']
  },

  // 3. Satin Rouges
  {
    id: 'aurelia-paris-satin',
    name: 'Aurelia Paris Signature Satin Rouge',
    tagline: 'Luminous classic red satin bullet',
    category: 'Satin Rouge',
    price: 2299,
    rating: 5.0,
    reviewsCount: 310,
    isBestSeller: true,
    mainImage: '/images/prod_rosegold.png',
    hoverImage: '/images/img4.jpeg',
    description: 'Our flagship Parisian lipstick tube with rich satin glow and magnetic click cap.',
    details: ['Pure cold-pressed rose oil', 'Gold-plated casing', 'Ultra-creamy application']
  },
  {
    id: 'vintage-rose-satin',
    name: 'Vintage Rose Satin Lipstick',
    tagline: 'Classic mauve rose satin feel',
    category: 'Satin Rouge',
    price: 1799,
    rating: 4.7,
    reviewsCount: 112,
    mainImage: '/images/img6.jpeg',
    hoverImage: '/images/img4.jpeg',
    description: 'Timeless mauve rose lipstick crafted for subtle daytime allure.',
    details: ['Hydrating argan oil', 'Non-drying satin base', 'Dermatologist tested']
  },
  {
    id: 'bordeaux-satin-rouge',
    name: 'Bordeaux Satin Wine Rouge',
    tagline: 'Deep wine burgundy with gold undertones',
    category: 'Satin Rouge',
    price: 2099,
    rating: 4.9,
    reviewsCount: 84,
    mainImage: '/images/img5.jpeg',
    hoverImage: '/images/model_berry.png',
    description: 'Sumptuous burgundy wine satin lipstick for formal evening couture.',
    details: ['French vineyard grape extract', 'Rich pigment concentration', 'Refillable tube']
  },
  {
    id: 'coral-bloom-satin',
    name: 'Coral Bloom Luminous Satin',
    tagline: 'Vibrant warm coral pink satin',
    category: 'Satin Rouge',
    price: 1699,
    rating: 4.6,
    reviewsCount: 76,
    mainImage: '/images/prod_gold_bullet.png',
    hoverImage: '/images/model_rose.png',
    description: 'Refreshing coral lipstick that brightens complexions with luminous radiance.',
    details: ['Peach kernel extract', 'SPF 15 sun defense', 'Silky feel']
  },

  // 4. Nude Collection
  {
    id: 'nudite-taupe-classic',
    name: 'Nudité Taupe Architectural Nude',
    tagline: 'The ultimate neutral brown-nude bullet',
    category: 'Nude Collection',
    price: 1799,
    rating: 4.9,
    reviewsCount: 190,
    isBestSeller: true,
    mainImage: '/images/img6.jpeg',
    hoverImage: '/images/model_nude.png',
    description: 'Designed to complement medium and warm skin tones with flawless natural nude perfection.',
    details: ['Custom nude color pigments', 'Soft matte finish', '12hr comfortable wear']
  },
  {
    id: 'honey-nude-matte',
    name: 'Honey Amber Nude Lipstick',
    tagline: 'Warm terracotta beige nude',
    category: 'Nude Collection',
    price: 1699,
    rating: 4.8,
    reviewsCount: 104,
    mainImage: '/images/prod_nude_satin.png',
    hoverImage: '/images/model_nude.png',
    description: 'Rich honey nude formula enriched with botanical almond milk.',
    details: ['Almond oil moisturizers', 'Velvet cushion texture', 'Everyday essential']
  },
  {
    id: 'cashmere-pink-nude',
    name: 'Cashmere Pink Nude Lipstick',
    tagline: 'Soft dusty pink nude for fair to medium lips',
    category: 'Nude Collection',
    price: 1749,
    rating: 4.7,
    reviewsCount: 89,
    mainImage: '/images/prod_rosegold.png',
    hoverImage: '/images/img4.jpeg',
    description: 'Ultra-soft cashmere pink lipstick with subtle nude undertones.',
    details: ['Cashmere silk peptides', 'Smooth application', 'Paraben-free']
  },
  {
    id: 'cinnamon-nude-satin',
    name: 'Cinnamon Spice Nude Rouge',
    tagline: 'Warm spicy nude with satin sheen',
    category: 'Nude Collection',
    price: 1849,
    rating: 4.8,
    reviewsCount: 92,
    mainImage: '/images/prod_gold_bullet.png',
    hoverImage: '/images/model_nude.png',
    description: 'Spiced nude formulation that accentuates lip contour.',
    details: ['Organic cinnamon oil', 'Natural lip plumping', 'Longwear formula']
  },

  // 5. Luxe Sets
  {
    id: 'velvet-bloom-trio-set',
    name: 'Velvet Bloom Trio Lipstick Vault',
    tagline: 'Full collection box: Nudité, Blush & Taupe',
    category: 'Luxe Sets',
    price: 4499,
    rating: 5.0,
    reviewsCount: 145,
    isBestSeller: true,
    mainImage: '/images/img6.jpeg',
    hoverImage: '/images/img4.jpeg',
    description: 'The definitive luxury lipstick gift box containing three handcrafted lipsticks in architectural magnetic cases.',
    details: [
      'Includes 3 full-size lipsticks (Nudité, Blush, Taupe)',
      'Handcrafted gold embossed magnetic gift vault',
      'Comes with luxury velvet pouch & travel mirror'
    ]
  },
  {
    id: 'haute-rouge-duo-set',
    name: 'Haute Rouge Crimson & Swatch Set',
    tagline: 'Dual pack: Crimson Bloom & Berry Swatch Rouge',
    category: 'Luxe Sets',
    price: 3299,
    rating: 4.9,
    reviewsCount: 78,
    isNew: true,
    mainImage: '/images/img5.jpeg',
    hoverImage: '/images/model_ruby.png',
    description: 'Dual luxury lipstick set featuring our best-selling red and dark berry evening shades.',
    details: ['Includes 2 full-size lipsticks', 'Slate display block included', 'Custom gift box']
  },
  {
    id: 'royal-lip-hydrator-set',
    name: 'Royal Rose Lip Care Ritual Set',
    tagline: 'Rose Lip Hydrator + Velvet Lipstick + Swatch Care',
    category: 'Luxe Sets',
    price: 3799,
    rating: 4.9,
    reviewsCount: 62,
    mainImage: '/images/prod_liquid_matte.png',
    hoverImage: '/images/model_rose.png',
    description: 'Complete 3-step luxury lip treatment ritual featuring our Damask rose lip hydrator and velvet lipstick.',
    details: ['100% natural rose nectar oil', 'Velvet lipstick of choice', 'Microfiber lip buffer']
  },
  {
    id: 'grand-couture-vault',
    name: 'BLOOM Grand Couture 5-Lipstick Vault',
    tagline: 'Ultimate 5-shade haute lipstick collection',
    category: 'Luxe Sets',
    price: 6999,
    rating: 5.0,
    reviewsCount: 52,
    isNew: true,
    mainImage: '/images/prod_obsidian.png',
    hoverImage: '/images/model_rose.png',
    description: 'The master collection featuring 5 iconic shades: Crimson Bloom, Dusk Berry, Nudité, Scarlet Empress, and Bordeaux.',
    details: ['5 full-size refillable lipsticks', 'Heavyweight brass and marble display vault', 'Limited production of 1,000 sets worldwide']
  }
];
