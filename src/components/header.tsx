import * as React from "react"
import { Nav } from "./nav"

export type Props = Readonly<{
  title: string
}> &
  React.ComponentProps<typeof Nav>

export const Header: React.FC<Props> = ({ title, darkBg }) => (
  <div className="relative bg-indigo-800">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
        alt=""
      />
      <div
        className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <Nav darkBg={darkBg} />
    <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
    </div>
  </div>
)
