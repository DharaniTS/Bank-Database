import { useState } from 'react';
import axios from 'axios';
import './App.css';  

function App() {
  const [newAccount, setNewAccount] = useState({
    account_number: '',
    name: '',
    phone: '',
    email: '',
    balance: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  // Add new account
  const addAccount = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/accounts', newAccount)
      .then(() => {
        alert('Account added successfully');
        setNewAccount({
          account_number: '',
          name: '',
          phone: '',
          email: '',
          balance: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h1>Add New Account</h1>
      <form onSubmit={addAccount}>
        <input
          className="input"
          name="account_number"
          placeholder="Account No"
          value={newAccount.account_number}
          onChange={handleChange}
          required
        /><br />

        <input
          className="input"
          name="name"
          placeholder="Name"
          value={newAccount.name}
          onChange={handleChange}
          required
        /><br />

        <input
          className="input"
          name="phone"
          placeholder="Phone"
          value={newAccount.phone}
          onChange={handleChange}
          required
        /><br />

        <input
          className="input"
          name="email"
          placeholder="Email"
          value={newAccount.email}
          onChange={handleChange}
          required
        /><br />

        <input
          className="input"
          name="balance"
          placeholder="Balance"
          value={newAccount.balance}
          onChange={handleChange}
          required
        /><br />

        <button className="button" type="submit">Add Account</button>
      </form>
    </div>
  );
}

export default App;
