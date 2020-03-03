import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'
class TopMenu extends React.Component{
  render() {
    return(
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name = "facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name = "twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}

class IslandSnowLogo extends React.Component{
  render() {
    return(
        <Image centered src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png"/>
    );
  }
}

class MiddleMenu extends React.Component{
  render() {
    return(
        <Menu borderless className="middlemenu">
          <Grid centered container>

            <Dropdown item text="MEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item> Tank Tops</Dropdown.Item>
                <Dropdown.Item> Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="WOMEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item> Tank Tops</Dropdown.Item>
                <Dropdown.Item> Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="KIDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item> Tank Tops</Dropdown.Item>
                <Dropdown.Item> Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="BRANDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item> Tank Tops</Dropdown.Item>
                <Dropdown.Item> Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>

          </Grid>
        </Menu>
    );
  }
}

class FullWidthImage extends React.Component{
  render() {
    return(
        <Image fluid src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png"/>
    );
  }
}

class FooterMenu extends React.Component{
  render() {
    return(
        <div class="footer-background">
            <Grid container columns="3">
              <Grid.Column>
                <List>
                  <List.Item>About us</List.Item>
                  <List.Item>Store Locations</List.Item>
                  <List.Item>Employment</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Shipping & returns</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                  <List.Item>Brands</List.Item>
                  <List.Item>Sale</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <List.Item>
                    <Input placeholder="Enter email address" />
                    <Label color="black">Join</Label>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid>
        </div>

    );
  }
}

class IslandSnow extends React.Component{
  render(){
    return(
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));