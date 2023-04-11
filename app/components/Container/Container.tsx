"use client"

import React, { FC, ReactNode } from "react"

import cn from "classnames"
import s from "./Container.module.css"

interface ContainerProps {
  className?: string
  children?: ReactNode
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn(s.container, className)}>{children}</div>
}

export default Container
