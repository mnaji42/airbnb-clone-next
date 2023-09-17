"use client"

import React, { FC } from "react"

import { SafeUser } from "app/types"
import { Container } from "@components/index"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import Categories from "./Categories"

import cn from "classnames"
import s from "./Navbar.module.css"

interface NavbarProps {
  currentUser: SafeUser | null
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className, currentUser }) => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s.subContainer}>
        <Container>
          <div className={s.navBar}>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Navbar
