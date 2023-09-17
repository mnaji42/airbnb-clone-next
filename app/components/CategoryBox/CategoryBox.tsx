"use client"

import React, { FC } from "react"

import qs from "query-string"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { IconType } from "react-icons"

import cn from "classnames"
import s from "./CategoryBox.module.css"

interface CategoryBoxProps {
  className?: string
  icon: IconType
  label: string
  selected?: boolean
}

const CategoryBox: FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  className,
}) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }

    if (params?.get("category") === label) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    )

    router.push(url)
  }, [label, router, params])

  return (
    <div
      onClick={handleClick}
      className={cn(s.container, {
        [s.selected]: selected,
      })}
    >
      <Icon size={26} />
      <div className={s.label}>{label}</div>
    </div>
  )
}

export default CategoryBox
