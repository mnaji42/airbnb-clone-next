"use client"

import React, { FC } from "react"

import Image from "next/image"

import cn from "classnames"
import s from "./Avatar.module.css"

interface AvatarProps {
  className?: string
}

const Avatar: FC<AvatarProps> = ({ className }) => {
  return (
    <Image
      className={cn(s.container, className)}
      height={30}
      width={30}
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  )
}

export default Avatar
