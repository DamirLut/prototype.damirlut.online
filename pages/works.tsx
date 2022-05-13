import React from 'react';
import Layout from "../components/Layout";
import Head from "next/head";
import {Card, Col, Link, Row, Text} from "@nextui-org/react";

const works = [
	{
		label: "Screen Play",
		link:"https://store.steampowered.com/app/1830700/ScreenPlay/",
		photo: "https://cdn.cloudflare.steamstatic.com/steam/apps/1830700/ss_2fcbc5659a1ecfe0059c22539b0774f7c5a053af.600x338.jpg?t=1651242023"
	},
	{
		label: "Insanity Reanimation",
		link: "https://vk.com/insa2022",
		photo: "https://psv4.userapi.com/c534536/u137049170/docs/d10/e116c38a7996/1.png?extra=Btr4wmLo8PVxCPXfwNV9EoXm9P_wNnZLq_VizVcxqoleRsKm-gpZx1z6x55OcQf-pEueRbkeqRkLYZHKN6lDXzgwgkKqGL-bmUY1V6ZR8pUEwg-gLSb61bMhdsd8qAhH6tTAkpeRJnrX6Un3gOEO6wBK"
	}, {
		label: "Midis APP",
		link: "https://midis.damirlut.online/",
		photo: "https://sun9-72.userapi.com/s/v1/ig2/KW0yG7LvcY6yPUPZXHvuBxVQmiwjepsr6IZHYg8RWZgLOWv_ExXYUjfrxE2Or-OwQUZnFMtcjj1fXzzEXs3FnuZC.jpg?size=258x89&quality=96&type=album"
	}, {
		label: "Discord Game Bot",
		link: "#",
		photo: "https://media.discordapp.net/attachments/964092056551194654/968144256822820884/unknown.png"
	}, {
		label: "ВК Карточки",
		link: "#",
		photo: "https://sun9-75.userapi.com/s/v1/ig2/_D7kJ8LL3RRyL9mg-xL4v8hAoUml6DKAGi1TDPtyiXVlh932CQIoFTgAVoRuIakj47BSL52YuGpkPYcAsDP_tzV9.jpg?size=997x2160&quality=96&type=album"
	}, {
		label: "RGD Bar",
		link: "#",
		photo: "https://media.discordapp.net/attachments/856888909505757184/959083709745754132/unknown.png"
	}, {
		label: "Sky Game",
		link: "#",
		photo: "https://psv4.userapi.com/c856328/u233938082/docs/d4/20ed70879821/nLEDPRIfay.gif?extra=GdBjOG_oWdzwQpfFN4yuOY1FwiyquWNopZj09oZTueVTwIZ_TDlHPPowwfnKJQBCX_b_GVPUgokAO-FpRf_hIXHQLG2-AT_vatTLvO1PIpGZYJnwrt4jYniHtceLdDdyrErQ4dD8ynCHjfFoAFcDnxOl"
	},
]

const colors = [
	"primary", "secondary", "success", "warning", "error"
]

function Works(props: any) {
	return (
		<>
			<Head>
				<title>Мои работы</title>
			</Head>
			<Layout>
				<Row gap={1} css={{
					height: `100%`
				}}>
					<Col>
						<Card>
							<Row css={{
								display: "inline-flex",
								flexDirection: "column",
								gap: '1em'
							}}>
								{works.map((work, index) => <Col key={Math.random()}>
									<Card bordered cover>
										<Card.Footer blur css={{
											position: "absolute", zIndex: 1, bgBlur: "#0f1114",
											borderTop: "$borderWeights$light solid $gray700",
											bottom: 0,
										}}>

											<Link block color="primary" href={work.link} icon>
												{work.label}
											</Link>
										</Card.Footer>
										<Card.Image src={work.photo} showSkeleton width="100%" height={240} objectFit='cover'/>
									</Card>
								</Col>)}
							</Row>
						</Card>
					</Col>
				</Row>
			</Layout>
		</>
	);
}

export default Works;