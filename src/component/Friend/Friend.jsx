/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Friend.css"; // Assuming you've named your CSS file Friend.css

function Friend({
  friend,
  setShowSplitBillWindow,
  showSplitBillWindow,
  onSelection,
  selectedFriend
}) {
  function handleSelect(friend) {
    onSelection(friend);
    setShowSplitBillWindow(!showSplitBillWindow);
  }

  const isSelected =  selectedFriend?.id === friend.id


  return (
    <>
      <li className={`friend-list  ${isSelected? "select":""}`}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">{`${friend.name} owes you Rs.${friend.balance}`}</p>
        )}

        {friend.balance < 0 && (
          <p className="red">{`you owe ${friend.name} Rs.${Math.abs(
            friend.balance
          )}`}</p>
        )}

        {friend.balance === 0 && (
          <p className="blue">{`you and ${friend.name} are even`}</p>
        )}
      </li>

      <Button onClick={()=>handleSelect(friend)}>{isSelected?"Close":"Select"}</Button>
      <hr></hr>
    </>
  );
}

Friend.propTypes = {
  image: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
