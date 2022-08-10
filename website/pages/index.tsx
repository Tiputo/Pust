import Head from 'next/head'
import AddRecordForm from '../components/AddRecordForm'
import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'

export default function (props: any) {
	const listUser = props.data?.listUser

	if (props.errors) {
		return (
			<>
				{
					props.errors.map((error: { message: string, code: string }) => (
						<>
							<p>{error.message}</p>
							<p>{error.code}</p>
						</>
					))
				}
			</>
		)
	}

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1>Půst</h1>
				<div>
					<AddRecordForm listPlayer={listUser} />
				</div>
			</main>

		</>
	)
}

export async function getStaticProps() {
	const { data, errors } = await serverSideFetch(getHomePage)

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}
