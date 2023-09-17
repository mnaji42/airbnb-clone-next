"use client"

import React, { FC } from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

import cn from "classnames"
import s from "./Logo.module.css"

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
  const router = useRouter()

  return (
    <Image
      alt="logo"
      className={cn(s.container, className)}
      height="100"
      width="100"
      src="/images/logo.png"
      onClick={() => router.push("/")}
    />
  )
}

export default Logo
