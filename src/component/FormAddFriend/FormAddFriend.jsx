/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";
import "./FormAddFriend.css";

function FormAddFriend({addFriend}) {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("https://i.pravatar.cc/48?=");

  function handleSubmit(e){
    e.preventDefault();

    if(!name || !profile) return

    const id = crypto.randomUUID();
    const newFriend = {
        id: id, 
        name:name,
        image:`${profile}${id}`,
        balance:0

    }

    addFriend(newFriend);

    setName("");
    setProfile("https://i.pravatar.cc/48?=")
  }

  return (
    <form className="form-add-friend">
      <label>👩‍👧‍👦Friend Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

      <label>👦Avatar</label>
      <input type="text" value={profile} onChange={(e)=>setProfile(e.target.value)}/>

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

export default FormAddFriend;
