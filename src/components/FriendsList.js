import { Link } from 'react-router-dom';

import styles from '../styles/home.module.css';
import { useAuth } from '../hooks';

const FriendsList = () => {
  const auth = useAuth();
  const { friends = [] } = auth.user;
  console.log(friends);

  return (
    <div className={styles.friendsList}>
      <div className={styles.header}>Friends</div>

      {friends && friends.length === 0 && (
        <div className={styles.noFriends}>NO friends found!</div>
      )}

      {friends &&
        friends.map((friend) => (
          <div key={`friend-${friend._id}`}>
            <Link
              className={styles.friendsItem}
              to={`/user/${friend.to_user._id}`}
            >
              <div className={styles.friendsImg}>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1645334855~hmac=24f52f5f98efadd32bba5648e33f64fb"
                  alt=""
                />
              </div>
              <div className={styles.friendsName}>{friend.to_user.email}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default FriendsList;
