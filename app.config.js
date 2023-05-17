import "dotenv/config";

export default {
  expo: {
    scheme: "acme",
    web: {
      bundler: "metro"
    },
    name: "react-native-jobs",
    slug: "react-native-jobs",
    extra: {
      RAPID_API_KEY: process.env.RAPID_API_KEY
    }
  }
}
