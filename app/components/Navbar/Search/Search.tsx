"use client"

import React, { FC } from "react"

import { BiSearch } from "react-icons/bi"

import cn from "classnames"
import s from "./Search.module.css"

interface SearchProps {
  className?: string
}

const Search: FC<SearchProps> = ({ className }) => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s.subContainer}>
        <div className={s.location}>Anywhere</div>
        <div className={s.time}>Any Week</div>
        <div className={s.guestContainer}>
          <div className={s.guest}>Add Gests</div>
          <div className={s.search}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
