"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const programs = [
  {
    title: "Engineering",
    href: "/programs/engineering",
    description: "Explore our diverse engineering programs including Petroleum, Computer Science, Civil, and more.",
  },
  {
    title: "Master's Programs",
    href: "/programs/masters",
    description: "Advanced studies in Environmental Engineering, Security & Quality.",
  },
  {
    title: "Bachelor's",
    href: "/programs/bachelors",
    description: "Undergraduate programs in Mechanical Engineering and Business IT.",
  },
  {
    title: "Preparatory Cycle",
    href: "/programs/preparatory",
    description: "Foundation courses in Math-Physics, Physics-Technical, and Physics-Chemistry.",
  },
];

const about = [
  {
    title: "Presentation",
    href: "/about/presentation",
    description: "Learn about IPSAS and our commitment to excellence in education.",
  },
  {
    title: "Mission & Vision",
    href: "/about/mission",
    description: "Discover our mission, vision, and core values.",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Meet our dedicated faculty and administrative staff.",
  },
  {
    title: "Partners",
    href: "/about/partners",
    description: "Explore our academic and industry partnerships.",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-[#0B2C67]" />
          <span className="font-bold text-xl text-[#0B2C67]">IPSAS</span>
        </Link>
        <NavigationMenu className="ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {about.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programs.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/student-life" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Student Life
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/admissions" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Admissions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" asChild>
            <SignUpButton fallbackRedirectUrl="/dashboardaftersignup" /> 
          </Button>
          <Button className="bg-[#0B2C67] hover:bg-[#318CE7]" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";