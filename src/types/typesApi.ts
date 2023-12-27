export type Categories = {
  id: string
  name: string
};

export type ProductCart = {
  id: string,
  title: string;
  img: string;
  price: number;
};

export type Product = {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  sale_terms: SaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: Picture[];
  video_id: null;
  descriptions: string[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: string[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: null;
  location: unknown;
  coverage_areas: string[];
  attributes: Attribute[];
};

type SaleTerm = {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  value_struct: ValueStruct | null;
  values: Value[];
  value_type: string;
};

type ValueStruct = {
  number: number;
  unit: string;
};

type Value = {
  id: string | null;
  name: string;
  struct: ValueStruct | null;
};

type Picture = {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
};

type Shipping = {
  mode: string;
  methods: string[];
  tags: string[];
  dimensions: null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
};

type SellerAddress = {
  city: Location;
  state: Location;
  country: Location;
  search_location: Location;
  id: number;
};

type Location = {
  id: string;
  name: string;
};

type Attribute = {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  values: Value[];
  value_type: string;
};
