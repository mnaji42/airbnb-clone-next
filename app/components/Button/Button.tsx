"use client"

import React, { FC, MouseEvent } from "react"

import { IconType } from "react-icons"

import cn from "classnames"
import s from "./Button.module.css"

interface ButtonProps {
  className?: string
  label: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button: FC<ButtonProps> = ({
  className,
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        s.button,
        { [s.outline]: outline, [s.small]: small },
        className
      )}
    >
      {Icon ? <Icon size={24} className={s.icon} /> : null}
      {label}
    </button>
  )
}

export default Button
