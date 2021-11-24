import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addContact } from "../../redux/actions";
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please complete the field',
      })
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Contact successfully created',
      showConfirmButton: true,
      timer: 2000
    })
    const create_contact = {
      id: new Date().getTime().toString(),
      name,
      email,
      phone,
    };
    dispatch(addContact(create_contact));
    navigate("/");
  };
  return (
    <div className="container marginBottom">
      <div className="col-md-8 mx-auto">
        <div className="card shadow border-0">
          <div className="card-header">
            <h5>Add a Contact</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
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
                Create Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
