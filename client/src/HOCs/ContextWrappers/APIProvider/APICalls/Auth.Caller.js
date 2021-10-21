class Auth {
  constructor(caller) {
    this.caller = caller;
  }

  login = (data) => this.caller.post("/login", data);

  register = (data) => this.caller.post("/registration", data);
}

export default Auth;
