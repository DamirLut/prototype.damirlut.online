import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from "../components/Layout";
import {Card, Col, Row, Image, Container, Button, Text, Divider, User, Grid, Progress} from "@nextui-org/react";
import React from "react";
import Icon from "../components/Icon";
import {EditIcon} from "../components/Icons/EditIcon";

const imageURL = 'https://sun2.is74.userapi.com/s/v1/ig2/SM_ySl25_UKHs8EHb-5gy-HN5pRg8IOrWEfnXA6KUH-Q1Z1ZJQTkZxozNQDAJge1o1QFaK15tCw3qOj6KCSDQn3N.jpg?size=200x201&quality=96&crop=135,228,1410,1424&ava=1'

const birthDate = new Date('04/13/2004');
const now = Date.now();
const years = Math.floor((now - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365));

const stats = [
	{
		value: "4 основных",
		key: "Языка программирования"
	},
	{
		value: "7 лет",
		key: "Программирование"
	},
	{
		value: '3',
		key: "Коммерчиских проекта"
	}
]

const photos = [
	'https://sun9-42.userapi.com/s/v1/if2/YYixK5usLeyM6yI_f1vgi3oFpIAnsigRY6hW2qqGv74fVrYNZvDm-I641cUvYdtDjXDo7CqWnoF-N1Qpbeft9WyK.jpg?size=1366x806&quality=96&type=album',
	'https://sun1.is74.userapi.com/s/v1/if2/CKq7g4pU8s-yLMlOsXOq9jKfEG1seLV7jx2uwD4XCAoQts7HGSBJ886fquXbzwMlM8GqyMCHAedWfCiEPF45D1aE.jpg?size=1080x1269&quality=96&type=album',
	'https://psv4.userapi.com/c856328/u233938082/docs/d4/beb886b3b287/nLEDPRIfay.gif?extra=-_qwMXcgjKkBhxZ-9HMHtWFtNjjEYAGxr8ZayjB5jcgfJEmurs0vjW6c9o2seQM_jiVwV3iUJC1zS4YrZqqwYwG8RRDO67KImL_M4AwJT__wyYzchPf-tMHY3L74z-atuGcYARqLhPObGm1gPgPnwXV1',
	'https://web.damirlut.online/damir-lul.gif',
]

const friends = [
	{
		url: "https://iky.su",
		photo: 'https://avatars.githubusercontent.com/u/31385763?v=4',
		name: "iky.su"
	},
	{
		url: "https://fataliti.pro",
		photo: "https://fataliti.pro/pic.png",
		name: "Fataliti"
	}
]

const languages = [
	{
		lang: "TypeScript",
		value: 100,
		color: "primary"
	},
	{
		lang: "JavaScript",
		value: 90,
		color: "warning"
	},
	{
		lang: "Haxe",
		value: 40,
		color: "secondary"
	}, {
		lang: "Java",
		value: 30,
		color: "error"
	}, {
		lang: "HTML + CSS",
		value: 70,
		color: "success"
	},
	{
		lang: "Python",
		value: 60,
		color: "secondary"
	},
	{
		lang: "C#",
		value: 75,
		color: "success"
	}
].sort((pre, next) => next.value - pre.value);

const techno = [
	{
		lang: "NodeJS",
		value: 100,
		color: "success"
	}, {
		lang: "React",
		value: 100,
		color: "primary"
	}, {
		lang: "Game Maker",
		value: 100,
		color: "gradient"
	}, {
		lang: "Svelte",
		value: 90,
		color: "warning"
	},
	{
		lang: "Unity",
		value: 80,
		color: "secondary"
	}
].sort((pre, next) => next.value - pre.value);

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Обо мне</title>
			</Head>
			<Layout>
				<Row gap={1} css={{
					height: `100%`
				}}>
					<Col css={{
						maxWidth: '20em',
						display: 'inline-flex',
						flexDirection: "column",
						gap: "1em"
					}}>
						<Container fluid>
							<Row>
								<Card>
									<Container css={{p: 0}} fluid>
										<Row fluid>
											<img alt='profile image'
											     src={imageURL}
											     style={{
												     width: "100%",
												     borderRadius: 5
											     }}
											/>
										</Row>
										<Row css={{mt: 10}}>
											<Col>
												<Button iconRight={<EditIcon />} css={{width: "100%"}}>Написать</Button>
											</Col>
										</Row>
									</Container>
								</Card>
							</Row>

						</Container>
						<Container fluid>
							<Row>
								<Card>
									<Card.Header><Text b>Друзья</Text></Card.Header>
									<Card.Body>
										<Row css={{flexDirection: "column", gap: '1em'}}>
											{
												friends.map(friend => <Col key={friend.url}><User
													src={friend.photo}
													name={friend.name}
													squared
													bordered
													color="warning"
												>
													<User.Link href={friend.url}>@{friend.url.replace('https://', '')}</User.Link>
												</User></Col>)
											}
										</Row>
									</Card.Body>
								</Card>
							</Row>

						</Container>

					</Col>
					<Col>
						<Row css={{flexDirection: "column", display: "inline-flex", gap: '1em'}}>
							<Col>
								<Card css={{
									height: 287,
									justifyContent: "space-between"
								}}>
									<div>
										<Text
											h1
											size={25}
											css={{
												textGradient: "45deg, $yellow600 -20%, $red600 100%",
												display: "inline-flex",
												alignItems: 'center',
												gap: '.25em'
											}}
											weight="bold"
										>
											<span>Лутрахманов Дамир</span> <img src='/icons/cat.gif' height='20em' alt='sticker status'
											                                    style={{
												                                    transform: "translate(0, 20%)"
											                                    }}/>
										</Text>
										<Text>
											Фулл стек сеньор помидор асинхронный хтмл программист и ремонтник утюгов
										</Text>
									</div>
									<Divider css={{mt: 10, mb: 10}}/>
									<div style={{display: "inline-flex", gap: '.5em'}}>
										<Text>День рождения:</Text><Text color="primary">13 апреля 2004г ({years} лет).</Text>
									</div>
									<Divider css={{mt: 10, mb: 10}}/>
									<Row>
										{
											stats.map(({key, value}) =>
												<Col key={key} css={{
													alignItems: "center",
													display: "inline-flex",
													flexDirection: "column"
												}}>
													<Text color='primary'>{value}</Text>
													<Text>{key}</Text>
												</Col>
											)
										}

									</Row>
								</Card>
							</Col>
							<Col>
								<Card css={{
									height: `100%`
								}}>
									<Card.Header><Text b>Фотографии</Text></Card.Header>
									<Divider/>
									<Card.Body css={{overflow: "hidden"}}>
										<Row gap={1}>
											{
												photos.map(url => <Col key={Math.random()}>
													<Image
														showSkeleton
														src={url}
														width={140}
														height={140}
														objectFit="cover"
														containerCss={{
															br: 0
														}}
													/>
												</Col>)
											}
										</Row>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card css={{
									height: "100%"
								}}>
									<Card.Header><Text b>Записи</Text></Card.Header>
									<Divider/>
									<Card.Body>
										<Row css={{
											display: "inline-flex",
											flexDirection: "column",
											gap: "1em"
										}}>
											<Col>
												<Card bordered>
													<Card.Header>
														<Text h4 b>Языки программирования</Text></Card.Header>
													<Card.Body>
														<Grid.Container gap={2}>
															{
																languages.map(lang => <Grid css={{width: "100%"}} key={lang.lang}>
																	{lang.lang}

																	<Progress value={lang.value} shadow
																		///@ts-ignore
																		        color={lang.color || "gradient"}
																		///@ts-ignore
																		        status={lang.color || "gradient"}/>
																</Grid>)
															}

														</Grid.Container>
													</Card.Body>
												</Card>
											</Col>
											<Col>
												<Card bordered>
													<Card.Header>
														<Text h4 b>Технологии</Text></Card.Header>
													<Card.Body>
														<Grid.Container gap={2}>
															{
																techno.map(lang => <Grid css={{width: "100%"}} key={lang.lang}>
																	{lang.lang}
																	<Progress value={lang.value} shadow
																		///@ts-ignore
																		        color={lang.color || "gradient"}
																		///@ts-ignore
																		        status={lang.color || "gradient"}/>
																</Grid>)
															}

														</Grid.Container>
													</Card.Body>
												</Card>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						</Row>

					</Col>

				</Row>
			</Layout>
		</>)
}

export default Home
