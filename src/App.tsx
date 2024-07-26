import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<[]>([]);
  useEffect(() => {
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data[0].name);
        setUsers(response.data);
      });
  }, []);

  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
