'use client'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function TestAuth() {
  const { isSignedIn, user } = useUser();
  console.log("TestAuth:", { isSignedIn, user });

  return (
    <div className="p-6 space-y-4">
      <p>isSignedIn: {String(isSignedIn)}</p>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Se connecter (test)</button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
