import React from "react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

const NavLinks = async () => {
  const user = await currentUser();
  return (
    <div>
      <ul className="flex text-right flex-col gap-6 text-white text-2xl font-medium mt-10 px-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <ClerkLoaded>
            <SignedIn>
                <Link href="cart"></Link>
                <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton>
                <button>Login</button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
