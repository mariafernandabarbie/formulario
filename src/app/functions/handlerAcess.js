import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = await validateToken(userAuth.token);

    if (isTokenValidate) {
        localStorage.setItem('name', userAuth.name);
        Cookies.set('token', userAuth.token, { expires: 1 });

    }

}
export default handlerAcessUser;

