"use client"

import React, { FC, useCallback, useState } from "react"

import { signOut } from "next-auth/react"

import { SafeUser } from "app/types"
import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from "@components/index"
import MenuItem from "../MenuItem"
import ClickOutside from "@components/ClickOutside"
import useRegisterModal from "@hooks/useRegisterModal"
import useLoginModal from "@hooks/useLoginModal"

import cn from "classnames"
import s from "./UserMenu.module.css"

interface UserMenuProps {
  currentUser: SafeUser | null
  className?: string
}

const UserMenu: FC<UserMenuProps> = ({ currentUser, className }) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
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
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen ? (
        <ClickOutside active={isOpen} onClick={() => setIsOpen(false)}>
          <div className={s.menuContainer}>
            <div className={s.menu}>
              {currentUser ? (
                <>
                  <MenuItem onClick={() => {}} label="My trips" />
                  <MenuItem onClick={() => {}} label="My favorites" />
                  <MenuItem onClick={() => {}} label="My reservations" />
                  <MenuItem onClick={() => {}} label="My properties" />
                  <MenuItem onClick={() => {}} label="Airbnb my home" />
                  <hr />
                  <MenuItem onClick={signOut} label="Logout" />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label="Login" />
                  <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                </>
              )}
            </div>
          </div>
        </ClickOutside>
      ) : null}
    </div>
  )
}

export default UserMenu
