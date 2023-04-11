"use client"

import React, { FC, useCallback, useState } from "react"

import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from "@components/index"
import MenuItem from "../MenuItem"
import ClickOutside from "@components/ClickOutside"

import cn from "classnames"
import s from "./UserMenu.module.css"

interface UserMenuProps {
  className?: string
}

const UserMenu: FC<UserMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((v) => !v)
  }, [])
  return (
    <div className={cn(s.container, className)}>
      <div className={s.subContainer}>
        <div onClick={() => {}} className={s.hosting}>
          Airbnb your home
        </div>
        <div onClick={toggleOpen} className={s.userContainer}>
          <AiOutlineMenu />
          <div className={s.avatar}>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen ? (
        <ClickOutside active={isOpen} onClick={() => setIsOpen(false)}>
          <div className={s.menuContainer}>
            <div className={s.menu}>
              <>
                <MenuItem onClick={() => {}} label="Login" />
                <MenuItem onClick={() => {}} label="Sign up" />
              </>
            </div>
          </div>
        </ClickOutside>
      ) : null}
    </div>
  )
}

export default UserMenu
