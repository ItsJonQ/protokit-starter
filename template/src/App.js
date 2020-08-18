import { Heading, HStack, Text, VStack } from '@wp-g2/components';
import { ui } from '@wp-g2/styles';
import React from 'react';

function App() {
	return (
		<HStack alignment="center" css={[ui.padding(30)]}>
			<VStack>
				<Heading size={1}>
					<span aria-label="wave" role="img">
						👋
					</span>{' '}
					Hello
				</Heading>
				<Text>Welcome to the G2 Components Starter Kit!</Text>
				<Text size="caption" variant="muted">
					Start editing to see some magic happen!
				</Text>
			</VStack>
		</HStack>
	);
}

export default App;
