/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";
// import Button from "@mui/material/Button"
import "./FormSplitBill.css";

function FormSplitBill({ selectedFriend,onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");


  function handleSubmit(e){
    e.preventDefault();
    if(!bill || !paidByUser) return;


    onSplitBill(whoIsPaying==="user"?paidByFriend: - paidByUser)


  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input type="text" onChange={(e) => setBill(+e.target.value)} />

      <label>Your Expense</label>
      <input
        type="text"
        onChange={(e) =>
          setPaidByUser((+e.target.value) > bill ? paidByUser : (+e.target.value))
        }
      />
      <label>{selectedFriend.name} Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the Bill</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
