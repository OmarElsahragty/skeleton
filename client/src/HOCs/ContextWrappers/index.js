import APIProvider, { APICxt } from "./APIProvider";
import SocketProvider, { SOCKETCxt } from "./SocketProvider";
import FeedbackProvider, { FeedbackCxt } from "./FeedbackProvider";
import AuthProvider, { AuthContext } from "./AuthProvider";

export { APICxt, SOCKETCxt, FeedbackCxt, AuthContext };

export default {
  API: APIProvider,
  Socket: SocketProvider,
  Feedback: FeedbackProvider,
  Auth: AuthProvider,
};
