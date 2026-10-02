import {
  BookOpenIcon,
  BoxesIcon,
  CalendarIcon,
  ClockIcon,
  FileDownIcon,
  PackageIcon,
  ShieldCheckIcon,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  calendar: CalendarIcon,
  package: PackageIcon,
  clock: ClockIcon,
  "book-open": BookOpenIcon,
  "shield-check": ShieldCheckIcon,
  boxes: BoxesIcon,
  "file-down": FileDownIcon,
};

type HomeIconProps = {
  slug: string;
  className?: string;
};

export function HomeIcon({ slug, className }: HomeIconProps) {
  const Icon = iconMap[slug] ?? FileDownIcon;
  return <Icon aria-hidden className={className} />;
}
