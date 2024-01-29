import { CollapsedNavItem } from "./collapsed-nav-item";
import { NavItem } from "./nav-item";

interface NavProps {
  isCollapsed: boolean;
  items: NavItem[];
}

export const Nav = ({ isCollapsed, items }: NavProps) => {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {items.map((item, index) =>
          isCollapsed ? (
            <CollapsedNavItem key={index} item={item} />
          ) : (
            <NavItem key={index} item={item} />
          )
        )}
      </nav>
    </div>
  );
};
