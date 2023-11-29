"use client"

import React, { FC } from "react"

import Select from "react-select"
import useCountries from "@hooks/useCountries"

import cn from "classnames"
import s from "./CountrySelect.module.css"

export type CountrySelectValue = {
  flag: string
  label: string
  latlng: number[]
  region: string
  value: string
}

interface CountrySelectProps {
  className?: string
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

const CountrySelect: FC<CountrySelectProps> = ({
  className,
  value,
  onChange,
}) => {
  const { getAll } = useCountries()
  return (
    <div className={cn(s.container, className)}>
      <Select
        placeholder="Anywhere"
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className={s.optionLabel}>
            <div>{option.flag}</div>
            <div>
              {option.label},<span className={s.region}>{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  )
}

export default CountrySelect
