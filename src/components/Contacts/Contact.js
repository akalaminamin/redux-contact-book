import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteContact } from "../../redux/actions";

const Contact = ({ contact, selectAll }) => {
  const { id, name, email, phone } = contact;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete contact!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   

    dispatch(deleteContact(id));
  };
  return (
    <>
      <tr className="actions">
        <td>
          <div className="custom-control custom-checkbox">
            <input
              id="selectAll"
              type="checkbox"
              className="custom-control-input"
              checked={selectAll}
            />
            <label htmlFor="selectAll" className="custom-control-label"></label>
          </div>
        </td>
        <td>
          <Avatar
            name={name}
            size="45"
            round={true}
            className="me-2 text-light"
          />
          {name}
        </td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <Link to={`/editContact/${id}`}>
            <span className="material-icons me-1">edit</span>
          </Link>
          <span
            className="material-icons text-danger"
            onClick={() => handleDelete(id)}
          >
            remove_circle
          </span>
        </td>
      </tr>
    </>
  );
};

export default Contact;
