import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateBlog = (props) => {
  const [blog, setBlogs] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://gossipgirl-blog.herokuapp.com/blog/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setBlogs(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://gossipgirl-blog.herokuapp.com/blog/${id}`, blog, {
        headers: {
          'x-auth-token': localStorage.getItem("userToken")
        }
      }).then(res => history.push('/home'))
  };

  return (
    <div>
      {blog && (
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={(e) =>
              setBlogs({ ...blog, [e.target.id]: e.target.value })
            }
          />

          <div className="mb-3">
            <label className="form-label" htmlFor="details">
              Details
            </label>
            <input
              className="form-control"
              type="text"
              id="details"
              name="details"
              value={blog.details}
              onChange={(e) =>
                setBlogs({ ...blog, [e.target.id]: e.target.value })
              }
            />
          </div>

          <input
            type="submit"
            className="btn btn-success"
            value="Update Blog"
          />
        </form>
      )}
    </div>
  );
};

export default UpdateBlog;