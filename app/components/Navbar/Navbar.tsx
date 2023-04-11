"use client"

import React, { FC } from "react"

import { Container } from "@components/index"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

import cn from "classnames"
import s from "./Navbar.module.css"

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={cn(s.container, className, "fixed w-full bg-white shadow-sm")}
    >
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
