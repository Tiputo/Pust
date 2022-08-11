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

	const toLocaleDatetime = (rawDate) => {
		return new Date(rawDate).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
	}

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1>Půst</h1>
				<div>
					<AddRecordForm listUser={listUser} />
					{listUser.map(record => (
						<table key={record.id}>
							<thead>
								<tr>
									<td>
										jmeno
									</td>
									<td>
										naposledy v
									</td>
									<td>
										tady bude button pro splneno nebo ne
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div>{record.nickname}</div>
									</td>
									<td>
										{toLocaleDatetime(record.lastIn)}
										{console.log(record.lastIn)}
									</td>
									<td>
										splneno/skoro nesplneno/nesplneno
									</td>
								</tr>
							</tbody>
						</table>
					))}
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


