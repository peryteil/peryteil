import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    age: number;
    breed: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error('Error fetching users:', err));
    },[]);

    return (
    <div>
      <h1>🐶 사용자 목록</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.breed}, {user.age}살)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;