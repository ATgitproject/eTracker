/**
 * iconRegistry.js
 * ------------------------------------------------------------------
 * JSON config files (navConfig.json, dashboardTiles.json, ...) refer
 * to icons by a plain string key (e.g. "home", "piggy-bank") so the
 * config stays framework-agnostic. This registry is the one place
 * that resolves those keys to actual lucide-react components.
 * ------------------------------------------------------------------
 */
import {
  Home,
  Wallet,
  List,
  BarChart3,
  PieChart,
  Settings,
  HelpCircle,
  Landmark,
  TrendingUp,
  ShoppingBag,
  PiggyBank,
  Sun,
  Moon,
  Upload,
  Plus,
  X,
  ChevronDown,
  Mail,
  Smartphone,
  ArrowLeft,
  Check,
  UploadCloud,
} from 'lucide-react';

export const ICONS = {
  home: Home,
  wallet: Wallet,
  list: List,
  'bar-chart': BarChart3,
  'pie-chart': PieChart,
  settings: Settings,
  'help-circle': HelpCircle,
  landmark: Landmark,
  'trending-up': TrendingUp,
  'shopping-bag': ShoppingBag,
  'piggy-bank': PiggyBank,
  sun: Sun,
  moon: Moon,
  upload: Upload,
  plus: Plus,
  x: X,
  'chevron-down': ChevronDown,
  mail: Mail,
  smartphone: Smartphone,
  'arrow-left': ArrowLeft,
  check: Check,
  'upload-cloud': UploadCloud,
};

/** Resolve an icon key to its component, falling back to a neutral dot. */
export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || List;
  return <Cmp {...props} />;
}
