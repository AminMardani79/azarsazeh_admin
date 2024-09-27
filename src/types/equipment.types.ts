export interface Equipments {
  title: string;
  categories: { title: string }[];
  id: string;
}

export interface EquipmentCategory {
  id: string;
  title: string;
  image: File;
}

export interface CreateEquipmentCategory {
  title: string;
  images: File[];
}

export interface CreateEquipment {
  title: string;
  content: string;
  categories: { value: string; label: string };
  images: File[];
}
