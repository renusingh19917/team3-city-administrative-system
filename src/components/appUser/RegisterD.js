import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmpassword: '',
    address: {
      street: '',
      city: '',
      state: '',
      pincode: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
  const addressApi = 'https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd';
  const fillAddressData = () => {
    const pin = formData.address.pincode;
    console.log(pin);

    const pincode = formData.address.pincode;
    if (pincode.length === 6) {
      // Construct the API URL with the pincode
      const apiUrl = `${addressApi}?pincode=${pincode}&api-key=${apiKey}`;
        console.log(apiUrl);
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.records && data.records.length > 0) {
          const addressData = data.records[0];
          const { District, StateName } = addressData;
          setFormData((prevData) => ({
            ...prevData,
            address: {
              ...prevData.address,
              city: District,
              state: StateName,
            },
          }));
        }
      })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }

    // Make an API request here to get address data
    // and then update the form accordingly.
  };

  const submitRegister = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isFormValid(formData)) {
      // Make an API request to register the user here.
      // Handle success and error cases accordingly.
    }
  };

  const isFormValid = (data) => {
    // Add validation logic here
    return (
      data.username !== '' &&
      data.password !== '' &&
      data.confirmpassword !== '' &&
      data.password === data.confirmpassword &&
      data.address.street !== '' &&
      data.address.pincode !== ''
    );
  };

  return (
    <div className="blog-container">
      <div className="blog-item">
        <p className="blog-header">Register</p>
      </div>
      <div className="blog-item form-group">
        <section>
          <form onSubmit={submitRegister}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              autoFocus
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
            <br />
            <label htmlFor="confirmpassword">Confirm password:</label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
            <br />
            <div>
              <label htmlFor="street">Street</label>
              <br />
              <input
                type="text"
                id="street"
                name="street"
                value={formData.address.street}
                onChange={handleAddressChange}
              />
              <br />
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                value={formData.address.city}
                onChange={handleAddressChange}
              />
              <br />
              <label htmlFor="state">State</label>
              <br />
              <input
                type="text"
                id="state"
                name="state"
                value={formData.address.state}
                onChange={handleAddressChange}
              />
              <br />
              <label htmlFor="pincode">Pincode</label>
              <br />
              <input
                type="number"
                maxLength="6"
                minLength="6"
                id="pincode"
                name="pincode"
                value={formData.address.pincode}
                onChange={handleAddressChange}
                onBlur={fillAddressData}
              />
              <br />
            </div>
            <input type="submit" value="Register" />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Register;
