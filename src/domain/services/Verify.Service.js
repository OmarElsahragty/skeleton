import twilio from "twilio";
import Config from "../../../config";

class Verify {
  constructor() {
    this.twilio = twilio(Config.Twilio.AccountSID, Config.Twilio.AuthToken);
  }

  async sendCode(phoneNumber, channel = "sms") {
    await this.twilio.verify
      .services(Config.Twilio.ServiceID)
      .verifications.create({
        to: phoneNumber,
        channel,
      });
    return true;
  }

  async verifyCode(phoneNumber, code) {
    const { status } = await this.twilio.verify
      .services(Config.Twilio.ServiceID)
      .verificationChecks.create({
        to: phoneNumber,
        code,
      });

    return status === "approved";
  }
}

export default new Verify();
