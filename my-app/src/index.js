import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, Divider, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image centered src='http://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png'></Image>
    )
  }
}

class MiddleMenu extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (

          <Grid centered>
            <Menu borderless className="middlemenu">
            <Grid.Column>
              <Dropdown item text='MEN'>
                <Dropdown.Menu>
                  <Dropdown.Item>1</Dropdown.Item>
                  <Dropdown.Item>2</Dropdown.Item>
                  <Dropdown.Item>3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>
            <Grid.Column>
            <Dropdown item text='WOMEN'>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Grid.Column>
            <Grid.Column>
            <Menu.Item onClick={this.handleItemClick}>KIDS</Menu.Item>
            </Grid.Column>
            <Grid.Column>
            <Dropdown item text='BRANDS'>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Grid.Column>
            </Menu>
          </Grid>


    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src='http://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg'></Image>

    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns={3}>
          <Grid.Row>
          <Grid.Column className="footer-background">
            <p>NAVIGATION</p>
            <Divider />
            <p>About us</p>
            <p>Videos</p>
            <p>Store Locations</p>
          </Grid.Column>
          <Grid.Column className="footer-background">
            <p>MAIN MENU</p>
            <Divider />
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </Grid.Column>
          <Grid.Column className="footer-background">
            <p>CONNECT</p>
            <Divider />
            <p>Sign up for the latest updates</p>
            <Input action='join' placeholder='Enter email address' />
          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
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