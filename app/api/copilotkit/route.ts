import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { BuiltInAgent } from "@copilotkit/runtime/v2";
import { NextRequest } from "next/server";

// TODO: https://docs.copilotkit.ai/built-in-agent/generative-ui/a2ui
// TODO: set up the a2ui component in the UI

const builtInAgent = new BuiltInAgent({
  model: "google:gemini-2.5-flash-lite",
  //   model: "google:gemini-2.5-flash",
});

const runtime = new CopilotRuntime({
  agents: { default: builtInAgent },
  a2ui: {
    injectA2UITool: true,
  },
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
