export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLogin = request.nextUrl?.pathname.startsWith("/login");

      //ONLY ADMIN CAN REACH THE DASHBORAD

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;

      //ONLY AUTHENTICATED USERS CAN REACH THE LOGIN PAGE
       
    },
  },
};
