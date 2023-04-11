"use client"

import React, { FC } from "react"

import cn from "classnames"
import s from "./MenuItem.module.css"

interface MenuItemProps {
  className?: string
  onClick: () => void
  label: string
}

const MenuItem: FC<MenuItemProps> = ({ className, onClick, label }) => {
  return (
    <div onClick={onClick} className={cn(s.container, className)}>
      {label}
    </div>
  )
}

export default MenuItem
