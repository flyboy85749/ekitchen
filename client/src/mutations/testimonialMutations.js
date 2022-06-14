import { gql } from "@apollo/client";

const ADD_TESTIMONIAL = gql`
mutation addTestimonial($name: String!, $comment: String!,
    ) {
    addTestimonial(name: $name, comment: $comment) {
        id 
        name
        comment
    }
}`

const DELETE_TESTIMONIAL = gql`
  mutation deleteTestimonial($id: ID!) {
    deleteTestimonial(id: $id) {
      id
      name
      comment
    }
  }
`;

export { ADD_TESTIMONIAL, DELETE_TESTIMONIAL };
