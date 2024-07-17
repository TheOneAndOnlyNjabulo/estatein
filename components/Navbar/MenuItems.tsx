import { MenuItemsData } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center ">
      {MenuItemsData.map((item, index) => (
        <div
          className={`text-white flex items-center justify-center text-md border-b border-t hover:border-primary px-3 py-2 rounded-md ${
            pathname === item.href
              ? "bg-background border-background"
              : "bg-bgsecondary border-bgsecondary"
          }`}
          key={index}
        >
          <Link href={item.href}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
