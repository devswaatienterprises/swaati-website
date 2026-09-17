import productsData from '@/data/products.json';

// Mapping of partner slugs to image thumbnails
export const partnerImageMap = {
  'alfashield-polymers': '/images/swaati_enterprises-partner-logo-alphashield.webp',
  'apcotex-industries': '/images/swaati_enterprises-partner-logo-apcotex.webp',
  'cico': '/images/swaati_enterprises-partner-logo-cico.webp',
  'constro-link-ease-series': '/images/swaati_enterprises-partner-logo-constrolink.webp',
  'dr-fixit': '/images/swaati_enterprises-partner-logo-dr fixit.webp',
  'fosroc': '/images/swaati_enterprises-partner-logo-fosroc.webp',
  'kangaroo-and-maris-polymers': '/images/swaati_enterprises-partner-logo-maris.webp',
  'kangaroo-maris-polymers': '/images/swaati_enterprises-partner-logo-maris.webp',
  'kemper': '/images/swaati_enterprises-partner-logo-kemper.webp',
  'kwickfix-industries-pvt-ltd': '/images/swaati_enterprises-partner-logo-kwick.webp',
  'mc-bauchemie': '/images/swaati_enterprises-partner-logo-mc.webp',
  'myk-arment': '/images/swaati_enterprises-partner-logo-myk arment.webp',
  'non-woven-geotextiles': '/images/swaati_enterprises-partner-logo-nonwoven geotextile.webp',
  'penetron': '/images/swaati_enterprises-partner-logo-penetron.webp',
  'reliance-recron-fiber': '/images/swaati_enterprises-partner-logo-recron.webp',
  'relience-recron-fiber': '/images/swaati_enterprises-partner-logo-recron.webp',
  'sika': '/images/swaati_enterprises-partner-logo-sika.webp',
  'sp-concare': '/images/swaati_enterprises-partner-logo-spc.webp',
  'stp-ltd': '/images/swaati_enterprises-partner-logo-stp.webp',
  'sunanda': '/images/swaati_enterprises-partner-logo-sunanda.webp',
  'kerapoxy': '/images/swaati_enterprises-partner-logo-kerapoxy.webp',
  'others': '/images/swaati_enterprises-partner-logo.webp',
  'other-variety': '/images/swaati_enterprises-partner-logo.webp',
};

export const products = productsData.products;
export const partners = productsData.partners.map((p) => ({
  ...p,
  image: partnerImageMap[p.slug] || '/images/product-waterproofing-systems.webp',
  relationship: 'Authorised Distributor',
}));

// Derive unique normalized categories from products
const categoryMap = new Map();
products.forEach((p) => {
  const catName = p.category ? p.category.trim() : 'General';
  const catSlug = p.categorySlug
    ? p.categorySlug.toLowerCase().trim()
    : catName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  if (!categoryMap.has(catSlug)) {
    categoryMap.set(catSlug, {
      name: catName,
      slug: catSlug,
      productCount: 0,
      subcategories: new Set(),
      companies: new Set(),
    });
  }
  const entry = categoryMap.get(catSlug);
  entry.productCount += 1;
  if (p.subcategory) entry.subcategories.add(p.subcategory);
  if (p.company) entry.companies.add(p.company);
});

export const categories = Array.from(categoryMap.values())
  .map((c) => ({
    name: c.name,
    slug: c.slug,
    productCount: c.productCount,
    subcategories: Array.from(c.subcategories),
    companies: Array.from(c.companies),
  }))
  .sort((a, b) => b.productCount - a.productCount);

/**
 * Split slash-separated strings into clean, readable tag arrays
 * E.g. "Chemical Anchoring / Fixings" -> ["Chemical Anchoring", "Fixings"]
 * Only splits if the string actually contains "/"
 */
export function splitTags(str) {
  if (!str || typeof str !== 'string') return [];
  const trimmed = str.trim();
  if (!trimmed) return [];
  if (!trimmed.includes('/')) return [trimmed];
  return trimmed
    .split('/')
    .map((item) => item.trim())
    .filter(Boolean);
}

/**
 * Get all products
 */
export function getAllProducts() {
  return products;
}

/**
 * Get product by slug or ID
 */
export function getProductBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toString().toLowerCase().trim();
  return (
    products.find(
      (p) => p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized
    ) || null
  );
}

/**
 * Get all unique partners
 */
export function getAllPartners() {
  return partners;
}

/**
 * Get partner by slug
 */
export function getPartnerBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toString().toLowerCase().trim();
  return partners.find((p) => p.slug.toLowerCase() === normalized) || null;
}

/**
 * Get partner by original company name
 */
export function getPartnerByName(name) {
  if (!name) return null;
  const normalized = name.toString().toLowerCase().trim();
  return partners.find((p) => p.name.toLowerCase() === normalized) || null;
}

/**
 * Get all products for a specific partner
 */
export function getProductsByPartner(companyNameOrSlug) {
  if (!companyNameOrSlug) return [];
  const normalized = companyNameOrSlug.toString().toLowerCase().trim();
  return products.filter(
    (p) =>
      p.companySlug.toLowerCase() === normalized ||
      p.company.toLowerCase() === normalized
  );
}

/**
 * Get all categories
 */
export function getAllCategories() {
  return categories;
}

/**
 * Get category by slug or name
 */
export function getCategoryBySlug(slugOrName) {
  if (!slugOrName) return null;
  const normalized = slugOrName.toString().toLowerCase().trim();
  return (
    categories.find(
      (c) =>
        c.slug.toLowerCase() === normalized || c.name.toLowerCase() === normalized
    ) || null
  );
}

/**
 * Get products for a specific category
 */
export function getProductsByCategory(categoryNameOrSlug) {
  if (!categoryNameOrSlug) return [];
  const normalized = categoryNameOrSlug.toString().toLowerCase().trim();
  return products.filter((p) => {
    const slug = (p.categorySlug || p.category.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')).toLowerCase();
    const name = (p.category || '').toLowerCase();
    return slug === normalized || name === normalized;
  });
}

/**
 * Get unique companies/brands list for filters
 */
export function getUniqueCompanies() {
  const map = new Map();
  products.forEach((p) => {
    if (p.company && !map.has(p.company)) {
      map.set(p.company, { name: p.company, slug: p.companySlug });
    }
  });
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get unique categories list for filters
 */
export function getUniqueCategoriesList() {
  const map = new Map();
  products.forEach((p) => {
    if (p.category && !map.has(p.category)) {
      map.set(p.category, { name: p.category, slug: p.categorySlug });
    }
  });
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Search products with query and optional filters
 * Searches across: Product Name, Manufacturer, Category, Sub Category / Details, Type
 */
export function searchProducts(query = '', { company = '', category = '' } = {}) {
  const q = query.trim().toLowerCase();
  const comp = company.trim().toLowerCase();
  const cat = category.trim().toLowerCase();

  return products.filter((p) => {
    if (comp && p.company.toLowerCase() !== comp && p.companySlug.toLowerCase() !== comp) {
      return false;
    }

    if (cat && p.category.toLowerCase() !== cat && p.categorySlug.toLowerCase() !== cat) {
      return false;
    }

    if (!q) return true;

    // Search fields: name, company/manufacturer, category, type, subcategory/details
    const searchable = `${p.name} ${p.company} ${p.category} ${p.type || ''} ${p.subcategory || ''}`.toLowerCase();
    
    // Support multi-term matching (all terms in query must match)
    const terms = q.split(/\s+/).filter(Boolean);
    return terms.every((t) => searchable.includes(t));
  });
}

/**
 * Autocomplete suggestions for live search
 */
export function getAutocompleteSuggestions(query = '', { company = '', category = '', limit = 8 } = {}) {
  const comp = company ? company.trim().toLowerCase() : '';
  const cat = category ? category.trim().toLowerCase() : '';
  const q = query ? query.trim().toLowerCase() : '';

  if (!q && !comp && !cat) return [];

  const terms = q ? q.split(/\s+/).filter(Boolean) : [];

  const matchedProducts = products.filter((p) => {
    if (comp && p.company.toLowerCase() !== comp && p.companySlug.toLowerCase() !== comp) {
      return false;
    }

    if (cat && p.category.toLowerCase() !== cat && p.categorySlug.toLowerCase() !== cat) {
      return false;
    }

    if (terms.length > 0) {
      const searchable = `${p.name} ${p.company} ${p.category} ${p.type || ''} ${p.subcategory || ''}`.toLowerCase();
      if (!terms.every((t) => searchable.includes(t))) {
        return false;
      }
    }

    return true;
  });

  return matchedProducts.slice(0, limit);
}

/**
 * Get related products from same category or brand
 */
export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];

  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  );

  const samePartner = products.filter(
    (p) =>
      p.id !== product.id &&
      p.companySlug === product.companySlug &&
      !sameCategory.some((sc) => sc.id === p.id)
  );

  const combined = [...sameCategory, ...samePartner];
  return combined.slice(0, limit);
}
