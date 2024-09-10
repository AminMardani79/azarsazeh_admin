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
