import Head from 'next/head'




export default function (props: any) {

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
				Pust
			</main>

		</>
	)
}

export async function getStaticProps() {

	return {
		props: {
			data: {},
		},
		revalidate: 10,
	}
}
