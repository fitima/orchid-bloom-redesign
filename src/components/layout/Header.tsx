import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "ONG", href: "/ong" },
  { name: "CME", href: "/cme" },
  {
    name: "Partage",
    href: "/partage",
    children: [
      { name: "Témoignages", href: "/partage/temoignages" },
      { name: "Conseils", href: "/partage/conseils" },
      { name: "Réflexion", href: "/partage/reflexion" },
      { name: "Livre d'or", href: "/partage/livre-dor" },
      { name: "Revue de presse", href: "/partage/presse" },
    ],
  },
  { name: "Album", href: "/album" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container-page">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-primary-foreground font-serif text-xl font-bold">OB</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold text-foreground leading-tight">
                Les Orchidées Blanches
              </p>
              <p className="text-xs text-muted-foreground">ONG & Centre Médico-Éducatif</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-muted/50",
                          isActive(item.href) && "text-primary font-medium"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary",
                                    isActive(child.href) && "bg-muted text-primary font-medium"
                                  )}
                                >
                                  {child.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 hover:text-primary focus:bg-muted focus:text-primary focus:outline-none",
                          isActive(item.href) && "text-primary font-semibold"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="ml-4">
              <Link to="/contact">Nous soutenir</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-primary-foreground font-serif font-bold">OB</span>
                  </div>
                  <span className="font-serif font-semibold">Les Orchidées Blanches</span>
                </Link>

                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => !item.children && setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors",
                          isActive(item.href) && "bg-muted text-primary font-medium"
                        )}
                      >
                        {item.name}
                        {item.children && <ChevronDown className="h-4 w-4" />}
                      </Link>
                      {item.children && (
                        <div className="ml-4 border-l-2 border-border pl-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block py-2 px-3 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors",
                                isActive(child.href) && "text-primary font-medium bg-muted"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <Button asChild className="mt-4">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Nous soutenir
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
