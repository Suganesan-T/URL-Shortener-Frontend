import { instance, protectInstance } from "./instance";

//define the user service
const userService = {
    //register a user
    register: async(Firstname,Lastname,Email,Password)=>{
        //make a post request to the register enpoints
        return await instance.post('/signup', 
        {
            FirstName:Firstname, 
            LastName: Lastname,
            Email: Email,
            Password:Password
            
        });
        
    },
    login: async(Email, Password)=>{
        //make a post request to the login enpoints
        return await instance.post('/login',
        {
            Email: Email,
            Password:Password
        })
    },
    createUrl: async(long)=>{
        return await instance.post('/createshorturl',
        {
            long:long
        })
    },
    forgetPassword: async(Email)=>{
        //make a post request to the forget password enpoints
        return await instance.post('/forgetPassword',
        {
            Email: Email
        })
    },
}
export default userService