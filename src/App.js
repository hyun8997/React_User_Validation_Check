import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // 이전 상태를 기반으로 항목 추가
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      {/* state를 끌어올릴 이벤트 생성 */}
      <AddUser onAddUser={addUserHandler} />
      {/* 유저 추가된 리스트 전달 */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
