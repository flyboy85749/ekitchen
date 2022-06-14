import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_TESTIMONIAL } from "../mutations/testimonialMutations";
import { GET_TESTIMONIALS } from "../queries/testimonialQueries";

function TestimonialRow({ testimonial }) {
  const [deleteTestimonial] = useMutation(DELETE_TESTIMONIAL, {
    variables: { id: testimonial.id },
    // refetchQueries: [{ query: GET_TESTIMONIALS }]
    update(cache, { data: { deleteTestimonial } }) {
      const { testimonials } = cache.readQuery({
        query: GET_TESTIMONIALS})
        cache.writeQuery({
            query: GET_TESTIMONIALS,
        data: {
          testimonials: testimonials.filter
            (testimonial => testimonial.id !== deleteTestimonial.id) },
          });
    },
});

  return (
    <tr>
      <td>{testimonial.name}</td>
      <td>{testimonial.comment}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteTestimonial}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default TestimonialRow;
