import { Suspense } from "react";
import OnboardingForm from "./OnboardingForm";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-neutral-900 dark:border-neutral-100 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <OnboardingForm />
    </Suspense>
  );
}
