function signUp(userName){
    let existingUsers=["Priyanshi","Alice","Bob","Joseph"];
  
   let result = (userName==existingUsers ? `User Already Registered,Please Login`:`SignUp Successfull,Please Login`)
   console.log(result)
}
   
   signUp("Priyanshi")
   signUp("Alice")