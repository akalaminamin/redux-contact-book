import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  selectedAllContact,
  clearAllContact,
  deleteAllSelectedContact,
} from "../../redux/actions";
import Contact from "./Contact";
const Contacts = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const selectContact = useSelector(
    (state) => state.contactReducer.checkAllContact
  );
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectAll) {
      dispatch(selectedAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  const handleDeleteAll = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete all contact?",
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
      }else{
        return;
      }
      dispatch(deleteAllSelectedContact());
    })
  };
  return (
    <div className="container marginBottom">
      {selectContact.length ? (
        <button className="btn btn-danger mb-3" onClick={handleDeleteAll}>
          Delete All
        </button>
      ) : null}
      <table className="table table-hover shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
