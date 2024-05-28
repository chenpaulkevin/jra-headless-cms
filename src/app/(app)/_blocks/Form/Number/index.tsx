import React from 'react'
import { useFormContext } from 'react-hook-form'

export type NumberProps = {
  name: string
  label: string
  width: number
  required?: boolean
}

export const Number: React.FC<NumberProps> = ({ name, label, width, required = false }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div
      className={`lg:w-[${width}%] w-[100%] flex gap-4 text-base flex-col text-blackPrimary px-8 my-4`}
    >
      <label>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type="number"
        className="p-4 rounded-xl outline outline-1 outline-slate-300"
        {...register(name, {
          required: { value: required, message: `${label} is required` },
          valueAsNumber: true,
        })}
      />
      {errors[name] && (
        <p className="text-primary text-sm tracking-wide">{errors[name]?.message as string}</p>
      )}
    </div>
  )
}
