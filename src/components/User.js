import PropTypes from "prop-types";

function User ({name1, surname1, isLoggedIn1, friends, age, location}){

    return (
        <>
          <h1>
            {isLoggedIn1 ? `My boyfriend is ${name1} ${surname1} (${age})` : "giriş yasaklandı!"}
           </h1>
           <br>
           </br>
            {location.title} {location.zip}
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

User.propTypes={
    name1:PropTypes.string.isRequired,
    surname1:PropTypes.string,
    isLoggedIn1:PropTypes.bool,
    friends: PropTypes.array,
    age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    location:PropTypes.shape({title: PropTypes.string , zip: PropTypes.number}).isRequired
};

User.defaultProps={
surname1:"Yılmaz"
}

export default User;