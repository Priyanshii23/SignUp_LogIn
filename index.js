function signUp(userName){
    let existingUsers=["Priyanshi","Alice","Bob","Joseph"];
  
   let result = (userName==existingUsers ? `User Already Registered,Please Login`:`SignUp Successfull,Please Login`)
   console.log(result)
}
   
   signUp("Priyanshi")
   signUp("Teja")

   function login(userName, password){
    let existingUsers=["Priyanshi","Alice","Bob","Joseph"];
     let passwordis = "Emp@123"

     if(existingUsers!= userName){
        console.log("User not found")
     }else if( passwordis!=password){
        console.log("Wrong Password")
     } else{ console.log("Login Successful")}
   }

   login("Priyanshi, Emp@123")