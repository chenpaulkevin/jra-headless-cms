type TestimonialProps = {
  title: string
  testimonialDescription: string
  customerName: string
  service: string
  customerRating: string
  customerImage?: {
    url: string
  }
}

export type TestimonialsProps = {
  blockHeader: string
  blockDescription: string
  firstTestimonial: TestimonialProps
  secondTestimonial: TestimonialProps
  thirdTestimonial: TestimonialProps
}
