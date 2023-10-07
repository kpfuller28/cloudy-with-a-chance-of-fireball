import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp redirectUrl='/verify-user' />;
}