import { useState, useEffect } from "react";

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

// 37 - Compose Hooks together - useState and useEffect to create reusable piece of code
function useUser(uid) {
  // hook #1: useState
  const [user, setUser] = useState(null);

  // hook #2: useEffect
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
  // Step #3: return data that can be reused later
  return user; // return 
}

const subscribeToPosts = () =>{
  // fn to subcribe to posts api
}

// Composed fn
function usePosts(uid) {
  const [posts, setPosts] = useState(null)
  useEffect(() => subscribeToPosts(uid, setPosts), [uid])
  return posts
}

// Compose multiple hooks
// Note: hooks must follow the naming conventions
function useUserAndPosts(uid) {
  return { user: useUser(uid), posts: usePosts(uid) }
}


function UseEffectCompose() {
  const uid = 10;
  // const user = useUser(uid);
  // const post = usePosts(uid);
  
  // Combining two different hooks
  const { user, posts } = useUserAndPosts(uid)

  return (
    <div>
      <h1>31 Fetch Data</h1>
      <p>{user}</p>
      <p>{posts}</p>
    </div>
  );
}

export default UseEffectCompose;
