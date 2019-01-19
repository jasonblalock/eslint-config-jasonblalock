import React from 'react';
import PropTypes from 'prop-types';

function Users({ nameFilter }) {
  const users = [{ name: 'Janice', friends: ['Albert', 'Nancy'], id: 23 }].filter(
    ({ name }) => name.toLowerCase().includes(nameFilter),
  );
  return (
    <div className="user-list" data-testid="users" id="users-section">
      {users.map(user => (
        <div key={user.id}>
          {user.name}
          {' '}
          is friends with
          {' '}
          {user.friends.join(', ')}
        </div>
      ))}
    </div>
  );
}

Users.propTypes = {
  nameFilter: PropTypes.string.isRequired,
};

export function variableNames() {
  const user$ = 'user stream';
  const $el = 'dom node';
  const camelCase = 'camelCase';
  const PascalCase = 'PascalCase';
  const CONST_VALUE = 'CONST_VALUE';
  return { $el, user$, camelCase, PascalCase, CONST_VALUE };
}

export default Users;


/*
  eslint
  import/no-extraneous-dependencies:0
  import/no-unresolved:0
 */
