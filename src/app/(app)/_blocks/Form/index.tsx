'use client'
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { fieldComponents } from './fieldComponents'
import { useRouter } from 'next/navigation'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import RichTextParser from '@/utilities/RichTextParser'
import { orbitron } from '@/assets/fonts'
import PrimaryButton from '../../_components/PrimaryButton'

interface FormField {
  blockType: string
  [key: string]: any
}

interface FormBlockProps {
  form: {
    id: string
    fields: FormField[]
    submitButtonLabel: string
  }
  confirmationType: string
  redirect?: {
    url: string
  }
  header: string
  blockName: string
  content: string
  enable2ColumnLayout: boolean
}

interface FormData {
  [key: string]: string | File
}

export const FormBlock: React.FC<FormBlockProps> = ({
  form,
  confirmationType,
  redirect,
  header,
  blockName,
  content,
  enable2ColumnLayout,
}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const formRef = useRef<HTMLFormElement | null>(null)
  const methods = useForm()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true)

    const formData = new FormData(formRef.current!)
    const formattedData: FormData = {}

    formData.forEach((value, key) => {
      formattedData[key] = value as string
    })

    const dataToSend = Object.entries(formattedData).map(([name, value]) => ({
      field: name,
      value,
    }))

    try {
      const response = await axios.post(
        `/api/form-submissions`,
        {
          form: form.id,
          submissionData: dataToSend,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      setMessage('Form submitted successfully!')
      setIsLoading(false)

      if (confirmationType === 'redirect' && redirect?.url) {
        router.push(redirect.url)
      }

      formRef.current?.reset()
    } catch (error) {
      console.error('Submission error:', error)
      setMessage('Failed to submit form.')
      setIsLoading(false)
    }
  }

  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row my-12 lg:gap-20 justify-center items-center">
        {enable2ColumnLayout && (
          <div className="flex w-full lg:w-fit flex-col gap-8 order-last lg:order-first rounded-3xl outline outline-1 shadow-sm bg-white outline-lightGray p-8">
            <h1
              className={
                orbitron.className + ' title-clamp font-semibold leading-normal text-blackPrimary'
              }
            >
              {header}
            </h1>
            <RichTextParser content={content} />
          </div>
        )}
        {form && (
          <FormProvider {...methods}>
            <form
              ref={formRef}
              className="flex flex-wrap py-12 lg:py-0"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <h1 className="text-lg pb-4 text-primaryBlack w-full ">{blockName}</h1>
              {form.fields.map((field, id) => {
                const FieldComponent = fieldComponents[field.blockType]
                return FieldComponent ? <FieldComponent key={id} {...field} /> : null
              })}
              {message && (
                <div
                  onClick={() => setMessage('')}
                  className="w-full h-screen flex flex-col bg-blackPrimary bg-opacity-60 z-[50] justify-center items-center tracking-wide fixed top-0 left-0 "
                >
                  <div className="bg-white p-8 rounded-3xl gap-16 flex flex-col justify-center items-center w-2/6 ">
                    <h1
                      className={
                        orbitron.className +
                        ' text-blackPrimary title-clamp font-bold leading-snug text-center'
                      }
                    >
                      {message}
                    </h1>
                    <div onClick={() => setMessage('')}>
                      <PrimaryButton title={'Go Back'} url="javascript:void(0);"></PrimaryButton>
                    </div>
                  </div>
                </div>
              )}
              <button
                className="my-8 py-4 w-full px-6 bg-primary rounded-lg font-bold text-white text-base text-center"
                type="submit"
              >
                {!isLoading ? form.submitButtonLabel : <p>Loading...</p>}
              </button>
            </form>
          </FormProvider>
        )}
      </div>
    </section>
  )
}
