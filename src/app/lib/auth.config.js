export const authConfig = {
  pages:{
    signIn: "/login",
  }, 
  providers: [],
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;

    },
    authorized({ auth, request }) {
      const user = auth?.user;
      console.log(user)
      const isOnKmen = request.nextUrl?.pathname.startsWith("/kmen");
      const isOnDiscussed = request.nextUrl?.pathname.startsWith("/discussed");
      //const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnKmen && !user) {
        return false;
      }

      if (isOnDiscussed && !user) {
        return false;
      }
      // if (user) {
      //   //go to home page
      //   if (request.nextUrl?.pathname === "/") {
      //     return true;
      //   }
      // }

       return true
     }
  }
}