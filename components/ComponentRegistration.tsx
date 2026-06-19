"use client";

import { useComponent } from "@copilotkit/react-core/v2";
import { WeatherCard, weatherSchema } from "./WeatherCard";

export function ComponentRegistration() {
  useComponent({
    name: "showWeather",
    description: "Display a weather card for a city.",
    parameters: weatherSchema,
    render: WeatherCard,
  });

  return null;
}
