export interface Equipment {
  name: string;
  image: File;
}

export interface EditEquipment extends Equipment {
  id: string;
}

export interface EquipmentCategory {
  name: string;
  image: File;
}

export interface EditEquipmentCategory extends EquipmentCategory {
  id: string;
}

export interface CreateEquipmentCategory {
  title: string;
  image: File;
}

export interface CreateEquipment {
  title: string;
  content: string;
  categories: string[];
  images: File[];
  is_published: boolean;
}