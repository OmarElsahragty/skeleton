import * as Sentry from "@sentry/node";
import Config from "./config";
import main from "./main";
import "@sentry/tracing";
import "./TerminalColors";

Sentry.init({
  dsn: Config.SentryDNS,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "backend",
  name: Config.App.Name,
});

setTimeout(() => {
  try {
    main();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
