import React from 'react'
import { useFormContext } from 'react-hook-form'

export type EmailProps = {
  name: string
  label: string
  width: number
  required?: boolean
}

export const Email: React.FC<EmailProps> = ({ name, label, width, required = false }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div
      className={`lg:w-[${width}%] w-[100%] w-full flex gap-4 text-base flex-col text-blackPrimary px-8 my-4`}
    >
      <label>
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        className="p-4 rounded-xl outline outline-1 outline-slate-300"
        {...register(name, {
          required: { value: required, message: `${label} is required` },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: `${label} is not a valid email address`,
          },
          maxLength: {
            value: 200,
            message: `${label} should be no more than 200 characters`,
          },
        })}
      />
      {errors[name] && (
        <p className="text-primary text-sm tracking-wide">
          {(errors[name] as { message: string })?.message}
        </p>
      )}
    </div>
  )
}
