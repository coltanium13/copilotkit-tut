import {
  BuiltInAgent,
  createCopilotRuntimeHandler,
  CopilotRuntime,
} from "@copilotkit/runtime/v2";

// TODO: https://docs.copilotkit.ai/built-in-agent/generative-ui/a2ui
// TODO: set up the a2ui component in the UI

const builtInAgent = new BuiltInAgent({
  // model: "google:gemini-2.5-flash-lite",
  // model: "google:gemini-2.5-flash",
  model: "google:gemini-3.1-flash-lite",
});

const runtime = new CopilotRuntime({
  agents: { default: builtInAgent },
  a2ui: {
    injectA2UITool: true,
  },
});

export const POST = createCopilotRuntimeHandler({
  runtime,
  basePath: "/api/copilotkit",
  mode: "single-route",
});
