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
    // local variable for cleanup fn
    let isCurrent = true;

    fetchUser(uid).then((user) => {
      if (isCurrent) setUser(user);
      console.log(user);
    });

    // cleanup fn
    return () => {
      console.log("cleaning up");
      isCurrent = false;
    };
  }, [uid]);

  return (
    <div>
      <h1>33 Clean Up</h1>
      <p>{user}</p>
    </div>
  );
}

export default CleanUp;
