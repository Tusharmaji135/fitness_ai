"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import {
  DumbbellIcon,
  HomeIcon,
  UserIcon,
  ZapIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            Fitness<span className="text-primary">.AI</span>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>

              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>

      {/* NAVIGATION - MOBILE */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-background border-t border-border">
          <div className="flex flex-col gap-3">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                  onClick={toggleMenu}
                >
                  <HomeIcon size={16} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                  onClick={toggleMenu}
                >
                  <DumbbellIcon size={16} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-sm hover:text-primary"
                  onClick={toggleMenu}
                >
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  <Link href="/generate-program" onClick={toggleMenu}>
                    Get Started
                  </Link>
                </Button>

                <div className="pt-2">
                  <UserButton />
                </div>
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant={"outline"}
                    className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    onClick={toggleMenu}
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
