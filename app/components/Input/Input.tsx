"use client"

import React, { FC, InputHTMLAttributes } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

import cn from "classnames"
import s from "./Input.module.css"
import { BiDollar } from "react-icons/bi"

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "capture" | "required" | "id"
  > {
  className?: string
  id: string
  label: string
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: FC<InputProps> = ({
  className,
  id,
  label,
  formatPrice,
  required,
  register,
  errors,
  ...props
}) => {
  return (
    <div className={cn(s.container, className)}>
      {formatPrice ? <BiDollar size={24} className={s.icon} /> : null}
      <input
        className={cn(s.input, "peer", {
          [s.formatPrice]: formatPrice,
          [s.errors]: errors[id],
        })}
        {...register(id, { required })}
        placeholder=" "
        {...props}
      />
      <label
        className={cn(
          s.label,
          "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
          {
            [s.formatPrice]: formatPrice,
            [s.errors]: errors[id],
          }
        )}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
