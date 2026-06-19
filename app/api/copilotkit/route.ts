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
  prompt: "You are a helpful assistant. Important: If you call a custom component tool (like 'showWeather') to display information to the user, the component is already rendered on the frontend. Do NOT call the A2UI tool to generate a second card for the same information, as this causes duplicate rendering. Let the custom component handle the visual display, and just respond with a brief text confirmation.",
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
