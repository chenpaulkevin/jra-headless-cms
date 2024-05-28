import React from 'react'
import { useForm, Controller } from 'react-hook-form'

interface Option {
  value: string | number
  label: string
}

export type SelectProps = {
  name: string
  label: string
  options: Option[]
  required?: boolean
  width: number
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  required = false,
  width,
}) => {
  const { control } = useForm()

  return (
    <div
      className={`lg:w-[${width}%] w-[100%] flex gap-4 text-base flex-col text-blackPrimary px-8 my-4`}
    >
      <label>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <select className="p-4 rounded-xl outline outline-1 outline-slate-300" {...field}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  )
}
