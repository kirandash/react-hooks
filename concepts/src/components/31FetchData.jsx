import { useState, useEffect } from "react";

function FetchData() {
  const [user, setUser] = useState(null);

  const fetchUser = (uid) => {
    // api call here
    return new Promise(function (resolve, reject) {
      /*stuff using username, password*/
      if (true) {
        resolve("fake user returned: kirandash");
      } else {
        reject(Error("It broke"));
      }
    });
  };
  const uid = 10;

  useEffect(() => {
    console.log("API call made");
    fetchUser(uid).then((user) => {
      setUser(user);
      console.log(user)
    });
  }, [uid]);

  return (
    <div>
      <h1>31 Fetch Data</h1>
      <p>{user}</p>
    </div>
  );
}

export default FetchData;
