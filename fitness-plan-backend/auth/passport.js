import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (profile, done) => {
      // Pass the profile to the done callback
      return done(null, profile);
    }
  )
);

// Store user data in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Retrieve user data from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

export default passport;
