import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <button className='text-cyan-300'>Sign in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn><UserButton /></SignedIn>
    </div>
  )
}