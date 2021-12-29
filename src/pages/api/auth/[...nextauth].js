import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: '496560778128-cgdhg5dlpurqnds8883oqslkabatmst0.apps.googleusercontent.com',
      clientSecret: "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",
    }),
    // Providers.Email({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
})