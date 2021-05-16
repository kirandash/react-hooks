import { useState, useEffect } from "react";

function AsyncAwait() {
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

  // Wrong way of Async Await
  //   useEffect(async () => {
  //     console.log("API call made");
  //     // local variable for cleanup fn
  //     let isCurrent = true;

  //     const user = await fetchUser(uid);
  //     if (isCurrent) setUser(user);
  //     console.log(user);

  //     // cleanup fn
  //     return () => {
  //       console.log("cleaning up");
  //       isCurrent = false;
  //     };
  //   }, [uid]);

  // Right way of Async Await
  useEffect(() => {
    console.log("API call made");
    // local variable for cleanup fn
    let isCurrent = true;

    // self invoking async fn
    (async () => {
        const user = await fetchUser(uid);
        if (isCurrent) setUser(user);
        console.log(user);
    })()

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

export default AsyncAwait;
