

function User ({name1, surname1, isLoggedIn1, friends}){

    return (
        <>
          <h1>
            {isLoggedIn1 ? `My boyfriend is ${name1} ${surname1}` : "giriş yasaklandı!"}
           </h1>
           <h2>
            {
                friends.map((friend, id) => 
                    (<div key={id}> {friend.id} {friend.fname} </div>)
                    // key unique bir şey olmalı, döngülerde listelerde key olmalı
                )
            }
           </h2>
        </>
    );
}

export default User;