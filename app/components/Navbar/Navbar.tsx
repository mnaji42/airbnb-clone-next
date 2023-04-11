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
    <div className={cn(s.container, className)}>
      <div className={s.subContainer}>
        <Container>
          <div className={s.navBar}>
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
