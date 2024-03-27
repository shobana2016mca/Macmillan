import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className={'h-screen grid place-items-center'}>
      <SignIn afterSignInUrl={'/'} routing='path' signUpUrl='/sign-up' />
    </div>
  );
}
