"use client"

import React, { FC } from "react"
import cn from "classnames"
import s from "./Heading.module.css"

interface HeadingProps {
  className?: string
  title: string
  subTitle?: string
  center?: boolean
}

const Heading: FC<HeadingProps> = ({ className, title, subTitle, center }) => {
  return (
    <div className={cn(s.container, { [s.center]: center }, className)}>
      <div className={s.title}>{title}</div>
      <div className={s.subTitle}>{subTitle}</div>
    </div>
  )
}

export default Heading
