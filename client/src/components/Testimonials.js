import { useQuery } from '@apollo/client'
import TestimonialRow from './TestimonialRow'
import Spinner from './Spinner'
import { GET_TESTIMONIALS } from '../queries/testimonialQueries'

function Testimonials() {
  const { loading, error, data } = useQuery(GET_TESTIMONIALS)
  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>
  return (
    <>
    { !loading && !error && (
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.testimonials.map(testimonial => (
            <TestimonialRow key={testimonial.id} testimonial={testimonial} />
          ))}
        </tbody>
      </table>
    )}
    </>
  )
}

export default Testimonials