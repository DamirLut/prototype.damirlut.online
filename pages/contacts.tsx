import React from 'react';
import Head from "next/head";
import Layout from "../components/Layout";
import {Button, Card, Col, Row, Text} from "@nextui-org/react";
import Icon from "../components/Icon";

function Contacts(props: any) {

	const links = [
		{
			title: 'GitHub',
			url: 'https://github.com/DamirLut',
			color: '#000',
			icon: '/icons/github.png'
		},
		{
			title: 'Twitter',
			url: 'https://twitter.com/damir_lut',
			color: '#00ACEE',
			icon: '/icons/twitter.png'
		},
		{
			title: 'VK',
			url: 'https://vk.com/damirlut',
			color: '#0077FF',
			icon: '/icons/vk.png'
		},
		{
			title: 'VK Group',
			url: 'https://vk.com/damirlut_dev',
			color: '#0077FF',
			icon: '/icons/vk.png'
		},
		{
			title: 'DamirLut#1304',
			url: 'https://discordapp.com/users/357130048882343937/',
			color: '#5865F2',
			icon: '/icons/discord.png'
		},
		{
			title: 'Steam',
			url: 'https://steamcommunity.com/profiles/76561198903631706/',
			color: '#0b447a',
			icon: '/icons/steam.png'
		}
	];

	return (
		<>
			<Head>
				<title>Контакты</title>
			</Head>
			<Layout>
				<Row css={{
					height: "100%"
				}}>
					<Card>
						<Row>
							<Col>
								<Text h3 b>Связь со мной</Text>
								<Row css={{
									flexDirection: "column",
									gap: "1em"
								}}>
									{links.map(link => <Button icon={<Icon src={link.icon}/>} shadow key={link.url} color={"gradient"}
									                           css={{
										                           bg: link.color
									                           }}
									                           onClick={() => window.open(link.url, '_blank')}
									>{link.title}</Button>)}
								</Row>

							</Col>
							<Col>
								<Text h3 b>Так же...</Text>
								<Text>Вы можете писать мне на почты:</Text>
								<Text color='primary'>lutfrahmanovdamir3@gmail.com</Text>
								<Text color='primary'>damirlut@vk.com</Text>
								<Text color='primary'>support@damirlut.online</Text>
							</Col>
						</Row>
					</Card>
				</Row>
			</Layout>
		</>
	);
}

export default Contacts;