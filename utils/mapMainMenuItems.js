import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(), // menuItemに一意のIDを追加する
    destination: menuItem.menuItem.destination?.uri,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.item || []).map((subMenuItem) => ({
      id: uuid(), // subMenuItemに一意のIDを追加する
      destination: subMenuItem.destination?.uri,
      label: subMenuItem.label,
    })),
  }));
};
