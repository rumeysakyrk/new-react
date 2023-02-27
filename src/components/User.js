import PropTypes from "prop-types"

function User ({name1, surname1, isLoggedIn1, friends, age}){

    return (
        <>
          <h1>
            {isLoggedIn1 ? `My boyfriend is ${name1} ${surname1} (${age})` : "giriş yasaklandı!"}
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

User.propType={
    name1:PropTypes.string,
    surname1:PropTypes.string,
    isLoggedIn1:PropTypes.bool,
    friends: PropTypes.array,
    age:PropTypes.number
}

export default User;