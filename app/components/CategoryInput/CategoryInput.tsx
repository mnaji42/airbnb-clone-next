import React, { FC } from "react"

import { IconType } from "react-icons"

import cn from "classnames"
import s from "./CategoryInput.module.css"

interface CategoryInputProps {
  className?: string
  onClick: (v: string) => void
  selected?: boolean
  label: string
  icon: IconType
}

const CategoryInput: FC<CategoryInputProps> = ({
  className,
  onClick,
  selected,
  label,
  icon: Icon,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={cn(s.container, { [s.selected]: selected }, className)}
    >
      <Icon size={26} />
      <div className="font-semibold">{label}</div>
    </div>
  )
}

export default CategoryInput
