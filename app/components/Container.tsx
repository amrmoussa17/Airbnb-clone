import { PropsWithChildren } from "react"

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="
    max-w-[2520px]
    px-4 
    sm:px-2
    md:px-4
    xl:px-20
   "
    >
      {children}
    </div>
  )
}

export default Container
