import { Menu } from '@contember/admin'
import * as React from 'react'

export const Navigation = () => (
	<Menu>
		<Menu.Item title="pust">
			{/* <Menu.Item title="Dashboard" to="index" /> */}
			<Menu.Item title={["Users"]} to="userList" />
			<Menu.Item title={["Records"]} to="recordsList" />

		</Menu.Item>
	</Menu>
)
