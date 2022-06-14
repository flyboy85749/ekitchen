import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_TESTIMONIAL } from "../mutations/testimonialMutations";
import { GET_TESTIMONIALS } from "../queries/testimonialQueries";

function AddTestimonialModal() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [addTestimonial] = useMutation(ADD_TESTIMONIAL, {
    variables: { name, comment },
    update(cache, { data: { addTestimonial } }) {
      const { testimonials } = cache.readQuery({ query: GET_TESTIMONIALS });

      cache.writeQuery({
        query: GET_TESTIMONIALS,
        data: { testimonials: [...testimonials, addTestimonial] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || comment === "") {
      return alert("Please fill all fields");
    }
    addTestimonial(name, comment)

    setName('')
    setComment('')
  };

  return (
    <>
    <h1>Welcome to Ekitchen!</h1>
    <p>This site is under construction, but in the meantime please feel free to leave a review of my food.</p>
      {/* Button trigger modal  */}
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addTestimonyModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Review</div>
        </div>
      </button>

      {/* Modal  */}
      <div
        className="modal fade"
        id="addTestimonyModal"
        tabIndex="-1"
        aria-labelledby="addTestimonyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTestimonyModalLabel">
                Add Your Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>

                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Comment</label>

                  <input
                    type="text"
                    className="form-control"
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTestimonialModal;
