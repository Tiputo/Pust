import Head from 'next/head'
import AddRecordForm from '../components/AddRecordForm'
import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'
import style from '../styles/homePage.module.sass'
export default function (props: any) {
	const listUser = props.data?.listUser
	const listRecords = props.data?.listRecords


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
				<h1 className={style.title}>Půst</h1>
				<div className={style.table}>
					<div className={style.select}>
						<AddRecordForm listUser={listUser} />
					</div>

					{/* <div className={style.timer}>časovač půstu</div> */}

					{listRecords.map(record => (
						<table key={record.id} className={style.tableIn}>
							<thead>
								<tr>
									<th>
										Jméno
									</th>
									<th>
										Naposledy v
									</th>
									<th>
										Splnil jsi?
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div>{record.user.nickname}</div>
									</td>
									<td>
										{toLocaleDatetime(record.lastIn)}
									</td>
									<td>
										<button type="submit">✔️</button>
										<button type="submit">🤏</button>
										<button type="submit">❌</button>
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


