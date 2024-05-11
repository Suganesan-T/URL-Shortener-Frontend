import { instance, protectInstance } from "./instance";

//define the user service
const userService = {
    //register a user
    register: async(firstname,lastname,email,password)=>{
        //make a post request to the register enpoints
        return await instance.post('/signup', 
        {
            FirstName:firstname, 
            LastName: lastname,
            Email: email,
            Password:password
            
        });
        
    },
    login: async(email, password)=>{
        //make a post request to the login enpoints
        return await instance.post('/login',
        {
            Email: email,
            Password:password
        })
    },
    createUrl: async(long)=>{
        return await instance.post('/createshorturl',
        {
            long:long
        })
    },
    forgetPassword: async(email)=>{
        //make a post request to the forget password enpoints
        return await instance.post('/forgetPassword',
        {
            Email: email
        })
    },
}
export default userService