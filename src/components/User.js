

function User ({name1, surname1, isLoggedIn1}){

    return (
           <h1>
            {isLoggedIn1 ? `My boyfriend is ${name1} ${surname1}` : "giriş yasaklandı!"}
           </h1>
    );
}

export default User;