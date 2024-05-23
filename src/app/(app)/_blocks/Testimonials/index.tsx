import React from 'react'
import HeaderTitleCard from '@/components/HeaderTitleCard/'
import TestimonialCard from '@/components/TestimonialCard/'
import type { TestimonialsProps } from './types'

export const Testimonials: React.FC<TestimonialsProps & { id?: string }> = (props) => {
  const { blockHeader, blockDescription, firstTestimonial, secondTestimonial, thirdTestimonial } =
    props
  return (
    <>
      <section>
        <div className="flex container flex-col gap-8 py-8">
          <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
          <div className="flex flex-col xl:flex-row justify-between items-start gap-8 py-8">
            <TestimonialCard
              title={firstTestimonial.title}
              description={firstTestimonial.testimonialDescription}
              customerName={firstTestimonial.customerName}
              service={firstTestimonial.service}
              rating={firstTestimonial.customerRating}
              customerImage={firstTestimonial?.customerImage?.url}
            ></TestimonialCard>
            <TestimonialCard
              title={secondTestimonial.title}
              description={secondTestimonial.testimonialDescription}
              customerName={secondTestimonial.customerName}
              service={secondTestimonial.service}
              rating={secondTestimonial.customerRating}
              customerImage={secondTestimonial?.customerImage?.url}
            ></TestimonialCard>
            <TestimonialCard
              title={thirdTestimonial.title}
              description={thirdTestimonial.testimonialDescription}
              customerName={thirdTestimonial.customerName}
              service={thirdTestimonial.service}
              rating={thirdTestimonial.customerRating}
              customerImage={thirdTestimonial?.customerImage?.url}
            ></TestimonialCard>
          </div>
        </div>
      </section>
    </>
  )
}
