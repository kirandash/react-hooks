import { useState, useEffect } from "react";

function CleanUp() {
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

    // cleanup fn
    return () => {
        console.log("cleaning up")
    };
  }, [uid]);

  return (
    <div>
      <h1>32 Clean Up</h1>
      <p>{user}</p>
    </div>
  );
}

export default CleanUp;
