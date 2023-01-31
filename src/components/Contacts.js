import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "./Spinner";
import "react-toastify/dist/ReactToastify.css";
import "./contacts.css";

export default function Contacts() {
  const [commentBody, setCommentBody] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [error, setError] = useState({});
  const [isAPIPending, setIsAPIPending] = useState(false);

  const invokeAddCommentAPI = async function (data) {
    const url = "https://anuva-portfolio.onrender.com/api/v1/comments";
    try {
      const response = await (
        await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();
      onSuccess(response.message);
    } catch (error) {
      console.error(error);
      onError("Unable to post comment!");
    }
  };

  const onError = function (message) {
    setIsAPIPending(false);
    toast.error(message, {
      theme: "dark",
    });
  };

  const onSuccess = function (message) {
    setIsAPIPending(false);
    setCommentBody({ name: "", email: "", comment: "" });
    setError({});
    toast.success(message, {
      theme: "dark",
    });
  };

  const validateComment = function () {
    let isValidated = true;
    let _error = { ...error };
    const emailformat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!commentBody.name) {
      isValidated = false;
      _error.name = "Name is required";
    } else {
      delete _error.name;
    }
    if (!commentBody.comment) {
      isValidated = false;
      _error.comment = "Comment is required";
    } else {
      delete _error.comment;
    }
    if (commentBody.email && !commentBody.email.match(emailformat)) {
      isValidated = false;
      _error.email = "Not a valid email";
    } else {
      delete _error.email;
    }
    setError(_error);
    return isValidated;
  };

  const onSubmitComment = function () {
    if (validateComment()) {
      setIsAPIPending(true);
      invokeAddCommentAPI(commentBody);
    }
  };

  const onChangeComment = function (e, key) {
    setCommentBody({ ...commentBody, [key]: e.target.value });
    let _error = { ...error };
    delete _error[key];
    setError(_error);
  };

  return (
    <div className="contacts-main-container" id="contact-section">
      <ToastContainer />
      {isAPIPending ? <LoadingSpinner /> : null}
      <div className="contacts-main-heading  animate">Leave a message</div>
      <div className="contacts-input-container animate pop delay-2">
        <div>
          <label htmlFor="contacts-name-input" className="contacts-input-label">
            Name :{" "}
          </label>
        </div>
        <div className="contacts-input-area-container">
          <input
            name="contacts-name-input"
            id="contacts-name-input"
            className="contacts-input"
            onChange={(e) => onChangeComment(e, "name")}
            value={commentBody.name}
            disabled={isAPIPending}
            required
          ></input>
          <div className="contacts-error-message">{error.name}</div>
        </div>
      </div>
      <div className="contacts-input-container animate pop delay-3">
        <div>
          <label
            htmlFor="contacts-email-input"
            className="contacts-input-label"
          >
            Email :{" "}
          </label>
        </div>
        <div className="contacts-input-area-container">
          <input
            type="email"
            name="contacts-email-input"
            id="contacts-email-input"
            className="contacts-input"
            onChange={(e) => onChangeComment(e, "email")}
            value={commentBody.email}
            disabled={isAPIPending}
          ></input>
          <div className="contacts-error-message">{error.email}</div>
        </div>
      </div>
      <div className="contacts-input-container  animate pop delay-4">
        <div>
          <label
            htmlFor="contacts-comment-input"
            className="contacts-input-label"
          >
            Comment :{" "}
          </label>
        </div>
        <div className="contacts-input-area-container">
          <textarea
            name="contacts-comment-input"
            id="contacts-comment-input"
            className="contacts-input"
            onChange={(e) => onChangeComment(e, "comment")}
            rows="6"
            value={commentBody.comment}
            disabled={isAPIPending}
            required
          ></textarea>
          <div className="contacts-error-message">{error.comment}</div>
        </div>
      </div>
      <div className="contacts-button-container  animate pop delay-5">
        <button
          id="contacts-submit-comment-button"
          className="contacts-submit-comment-button"
          disabled={isAPIPending}
          onClick={() => onSubmitComment()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
