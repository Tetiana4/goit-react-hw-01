import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(item => (
        <li class="item">
          <span class="status">{item.isOnline}</span>
          <img class="avatar" src={item.avatar} alt={item.name} width="48" />
          <p class="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
