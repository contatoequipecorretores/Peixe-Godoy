
export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
  description?: string;
}

export interface Review {
  text: string;
  author: string;
}
