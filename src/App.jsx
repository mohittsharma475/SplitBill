import { useState } from "react";
import "./App.css";

import FriendsList from "./component/FriendsList/FriendsList";
import FormAddFriend from "./component/FormAddFriend/FormAddFriend";
import Button from "./component/Button/Button";
import FormSplitBill from "./component/FormSplitBill/FormSplitBill";
const initialFriends = [
  {
    id: 11885,
    name: "Niyati Jain",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -8,
  },
  {
    id: 11886,
    name: "Himanshu",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 15,
  },
  {
    id: 118857,
    name: "Nikhil Anand",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: -7,
  },
];
function App() {
  const [showAddWindow, setShowAddWindow] = useState(false);
  const [friends, setFriend] = useState(initialFriends);
  const [showSplitBillWindow, setShowSplitBillWindow] = useState(false);
  const [selectedFriend,setSelectedFriend] = useState(null)
  
  function handleAddFriend(friend){
    setFriend(friends=> [...friends,friend])
    setShowAddWindow(!showAddWindow);
  }

  function handleSelection(friend){
    setSelectedFriend((curr)=>curr?.id===friend.id?null:friend);
    setShowAddWindow(false);
  }
  
  function handleSplitBill(value){
    setFriend(friend=>friend.map(friend=>friend.id===selectedFriend.id ?{...friend,balance:friend.balance+value}:friend))

    setSelectedFriend(null)
  }
  
  return (
    <div className="app">
      <div className="left-side-bar">
        <FriendsList
          friends={friends}
          showSplitBillWindow={showSplitBillWindow}
          setShowSplitBillWindow={setShowSplitBillWindow}
          onSelection = {handleSelection}
          selectedFriend={selectedFriend}

        />
        {showAddWindow && <FormAddFriend addFriend={handleAddFriend}/>}
        <Button onClick={() => setShowAddWindow(!showAddWindow)}>
          {showAddWindow ? "Close" : "Add Friend"}
        </Button>
      </div>

      <div className="right-side-bar">
        {showSplitBillWindow && <FormSplitBill selectedFriend= {selectedFriend}
        onSplitBill={handleSplitBill}/>}
      </div>
    </div>
  );
}

export default App;
