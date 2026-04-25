import { createFileRoute } from "@tanstack/react-router";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">{m.example_message()}</h1>
			<p className="mt-4 text-lg">
				{m.current_locale({ locale: getLocale() })}
			</p>
		</div>
	);
}
