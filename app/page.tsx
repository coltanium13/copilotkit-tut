// import { CopilotSidebar } from "@copilotkit/react-core/v2";
import { ComponentRegistration } from "@/components/ComponentRegistration";
import { CopilotChat } from "@copilotkit/react-core/v2";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-8 min-h-screen w-full">
      <div className="w-full max-w-4xl h-[calc(100vh-100px)] border rounded-2xl overflow-hidden shadow-lg">
        <CopilotChat className="h-full" />
        <ComponentRegistration />
      </div>
    </main>
  );
}
