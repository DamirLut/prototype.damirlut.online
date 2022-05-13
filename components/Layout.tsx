import React from 'react';
import { Button, Card, Col, Container, Row, Switch, Text } from '@nextui-org/react';
import { SunIcon } from './Icons/SunIcon';
import { MoonIcon } from './Icons/MoonIcon';

import useDarkMode from 'use-dark-mode';
import { UserIcon } from './Icons/UserIcon';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { WorkIcon } from './Icons/WorkIcon';
import { EditIcon } from './Icons/EditIcon';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const router = useRouter();
  const darkMode = useDarkMode(false);
  const buttons = [
    {
      link: '/',
      label: 'Моя страница',
      icon: <UserIcon />,
    },
    {
      link: '/works',
      label: 'Мои работы',
      icon: <WorkIcon />,
    },
    {
      link: '/contacts',
      label: 'Связь',
      icon: <EditIcon />,
    },
  ];
  return (
    <>
      <Card
        css={{
          borderRadius: 0,
        }}>
        <Container css={{ display: 'inline-flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1em' }}>
            <img src="/icons/code.svg" alt="navbar icon" height="24em" />
            <Text h4 b>
              DamirLut
            </Text>
          </div>
          <div>
            <Switch
              checked={darkMode.value}
              size="xl"
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
              onChange={() => darkMode.toggle()}
            />
          </div>
        </Container>
      </Card>

      <Container css={{ mt: 12, height: '90vh' }}>
        <Row
          gap={1}
          css={{
            height: `100%`,
          }}>
          <Col
            span={4}
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.25em',
            }}>
            {buttons.map((button) => (
              <Link key={button.link} href={button.link}>
                <Button
                  bordered
                  ghost
                  icon={button.icon}
                  css={{
                    br: 0,
                  }}
                  shadow={router.asPath === button.link}
                  color="gradient"
                  as="a">
                  {button.label}
                </Button>
              </Link>
            ))}
          </Col>
          <Col
            css={{
              height: `100%`,
            }}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
