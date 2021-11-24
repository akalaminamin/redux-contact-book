import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { getContact, updateContact } from "../../redux/actions";
const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector((contact) => contact.contactReducer.contact);
  useEffect(() => {
    if (contact !== null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
    dispatch(getContact(id));
  }, [contact]);
  const handleUpdate = (e) => {
    e.preventDefault();
    Swal.fire("Updated", "Your file has been Update.", "success");
    const update_contact = Object.assign(contact, {
      name,
      email,
      phone,
    });
    dispatch(updateContact(update_contact));
    navigate("/");
  };
  return (
    <div className="container marginBottom">
      <div className="col-md-8 mx-auto">
        <div className="card shadow border-0">
          <div className="card-header">
            <h5>Update Contact</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <div className="form-group mb-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="name"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  placeholder="Phone"
                  className="form-control"
                />
              </div>
              <button className="btn btn-secondary" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
