/* eslint-disable react/prop-types */
import Friend from "../Friend/Friend";
import "./FriendsList.css"; // Assuming you've named your CSS file FriendsList.css



function FriendsList({showSplitBillWindow,setShowSplitBillWindow,friends,onSelection,selectedFriend}) {
  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend = {friend}
          showSplitBillWindow={showSplitBillWindow}
          setShowSplitBillWindow={setShowSplitBillWindow}
          onSelection = {onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
