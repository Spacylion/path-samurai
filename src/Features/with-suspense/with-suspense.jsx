import { Suspense } from "react"
import Preloader from "@/features/preloader/Preloader"

export const withSuspense = (Component) => {
  const WithSuspense = (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    )
  }

  WithSuspense.displayName = `withSuspense(${
    Component.displayName || Component.name || "Component"
  })`

  return <WithSuspense />
}
