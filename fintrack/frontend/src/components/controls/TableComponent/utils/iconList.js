import {
  ArrowLeftRight,
  Banknote,
  BriefcaseBusiness,
  CarFront,
  CreditCard,
  FileCheck,
  Gamepad2,
  Gift,
  GraduationCap,
  HeartPulse,
  House,
  IndianRupee,
  Landmark,
  Laptop,
  MoreHorizontal,
  Plane,
  ShoppingCart,
  User,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";

export const ICON_MAP = {
  // Category icons (canonical names, same as the DB seed)
  utensils: Utensils,
  "car-front": CarFront,
  "gamepad-2": Gamepad2,
  zap: Zap,
  house: House,
  "heart-pulse": HeartPulse,
  plane: Plane,
  "shopping-cart": ShoppingCart,
  "graduation-cap": GraduationCap,
  user: User,
  gift: Gift,
  wallet: Wallet,
  "more-horizontal": MoreHorizontal,
  "briefcase-business": BriefcaseBusiness,
  laptop: Laptop,
  "arrow-left-right": ArrowLeftRight,

  // Legacy aliases (remove once no old rows use these names)
  shopping_bag: ShoppingCart,
  restaurant: Utensils,
  bolt: Zap,
  directions_car: CarFront,
  home: House,
  movie: Gamepad2,

  // Payment methods
  "Net Banking": Landmark,
  "Credit Card": CreditCard,
  "Debit Card": CreditCard,
  UPI: "/upi.png",
  Cash: Banknote,
  Wallet: Wallet,
  Cheque: FileCheck,
  "Bank Transfer": ArrowLeftRight,

  //Amount
  amountIcon: IndianRupee,
};
