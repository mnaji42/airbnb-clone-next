import React, { FC, useCallback } from "react"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import cn from "classnames"
import s from "./Counter.module.css"

interface CounterProps {
  className?: string
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

const Counter: FC<CounterProps> = ({
  className,
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }

    onChange(value - 1)
  }, [onChange, value])
  return (
    <div className={cn(s.container, className)}>
      <div className={s.description}>
        <div className={s.title}>{title}</div>
        <div className={s.subTitle}>{subtitle}</div>
      </div>
      <div className={s.counter}>
        <div onClick={onReduce} className={s.icon}>
          <AiOutlineMinus />
        </div>
        <div className={s.value}>{value}</div>
        <div onClick={onAdd} className={s.icon}>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default Counter
