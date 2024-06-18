interface Subcategory {
  title: string;
  href: string;
  description?: string;
}

interface Category {
  title: string;
  items?: Subcategory[];
  href?: string;
}

export type NavItem = Category;
