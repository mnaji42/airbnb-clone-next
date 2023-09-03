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
      <h2 className={s.title}>{title}</h2>
      {/* TODO VERIFIER SI LES H2 H3 SONT DES BONNES PRATIQUES DANS DES MODALS */}
      <h3 className={s.subTitle}>{subTitle}</h3>
    </div>
  )
}

export default Heading
