import { gql } from '@apollo/client'

const GET_TESTIMONIALS = gql`
query getTestimonials {
    testimonials {
        id
        name
        comment
      }
}`

export { GET_TESTIMONIALS }