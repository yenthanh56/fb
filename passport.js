const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
	"726923140715-2hioof3kenljurnujtviu9quvvtmtvgj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "29b46d427f435322a74e";
GITHUB_CLIENT_SECRET = "ba4af1716c131a39e366a9dd3e8e2565bbced784";

FACEBOOK_APP_ID = "3402012503364223";
FACEBOOK_APP_SECRET = "b7e1f8881c73067db3d3bd2d76d3cb8c";

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new GithubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: "/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
