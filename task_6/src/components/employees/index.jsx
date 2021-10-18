import * as React from "react";
import { v4 as uuidv4 } from "uuid";

import { getUsers } from "../../resources/users/user.api";


import styles from "./style.module.css";

export default function Employees() {
  const [users, setUsers] = React.useState([]);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    async function init() {
      try {
        const users = await getUsers("https://reqres.in/api/users?per_page=12");
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, []);

  const addUser = React.useCallback((event) => {
    event.preventDefault();

    const user = {
      id: uuidv4(),
      last_name: name.trim(),
    };

    setUsers((users) => [user, ...users]);
    setName("");
  }, [name]);

  const deleteUser = React.useCallback((id) => {
    setUsers((users) => users.filter(e => e.id !== id));
  }, []);

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button
          type="submit"
          disabled={name.trim().length === 0}
        >
          Add
        </button>
      </form>

      {users.map((user) => {
        return (
          <div key={user.id} className={styles.container}>
            <div>{user.last_name}</div>
            <button onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}
