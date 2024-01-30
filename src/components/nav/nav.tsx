import { CollapsedNavItem } from "./collapsed-nav-item";
import { NavItem } from "./nav-item";

type NavProps = {
  isCollapsed: boolean;
  items: NavItem[];
  footer?: NavItem;
};

export const Nav = ({ isCollapsed, items, footer }: NavProps) => {
  return (
    <nav
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 p-2 data-[collapsed=true]:py-2 h-full justify-between"
    >
      <div className="grid gap-1 group-[[data-collapsed=true]]:justify-center">
        {items.map((item, index) =>
          isCollapsed ? (
            <CollapsedNavItem key={index} item={item} />
          ) : (
            <NavItem key={index} item={item} />
          )
        )}
      </div>
      {footer && isCollapsed && <CollapsedNavItem item={footer} />}
      {footer && !isCollapsed && <NavItem item={footer} />}
    </nav>
  );
};
