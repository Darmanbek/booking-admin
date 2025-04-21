import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Flex } from "antd"
import { Footer, Header, InnerLayout, MainContent } from "src/shared/layout"
import { Container } from "src/shared/ui"

export const Route = createFileRoute("/auth/_auth-layout")({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<InnerLayout>
			<Header auth={false} />
			<MainContent>
				<Container>
					<Flex justify={"center"}>
						<Outlet />
					</Flex>
				</Container>
			</MainContent>
			<Footer />
		</InnerLayout>
	)
}
