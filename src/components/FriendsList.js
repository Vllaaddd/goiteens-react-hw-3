import FriendListItem from "./FriendsListItem";

export default function FriendList({friends}){
    console.log(friends);
    return(
        <ul className="friend-list">
            {friends && friends.map(el => (
                <FriendListItem key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline} />
            ))}
        </ul>
    )
}