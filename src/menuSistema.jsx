import React from "react";
import { Menu, Image } from "semantic-ui-react";
import logo from './assets/img/logo1.jpg';

class MenuSistema extends React.Component {
    state = {
        activeItem: 'search'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const user = "jamillyanunciada1021@gmail.com";

        return (
            <>
                <Menu inverted borderless style={{ height: '8vh', backgroundColor: '#1B0C27' }}>
                    <Menu.Item style={{ marginLeft: '10%' }}>
                        <Image src={logo} size='small' />
                    </Menu.Item>
                    <Menu.Item name='search' style={{ width: '30vw', position: 'relative', marginLeft: '5%' }}>
                        <input 
                            icon='search' 
                            placeholder='Qual a sua pergunta?' 
                            style={{ 
                                width: '100%', 
                                border: 0, 
                                borderRadius: 50, 
                                background: 'transparent', 
                                color: '#D6FBFF', 
                                fontFamily: 'Poppins', 
                                padding: '2.5%', 
                                paddingLeft: '7%', 
                                backgroundColor: '#32243d',
                                paddingRight: '30px'
                            }} 
                        />
                        <i 
                            className="search icon" 
                            style={{ 
                                position: 'absolute', 
                                top: '50%', 
                                right: '5%', 
                                transform: 'translateY(-50%)', 
                                color: '#D6FBFF' 
                            }}
                        ></i>
                    </Menu.Item>
                    <Menu.Item
                        name='home'
                        onClick={this.handleItemClick} 
                        style={{ marginLeft: '5%', backgroundColor: 'transparent' }}
                    >
                        <div 
                            style={{ 
                                backgroundColor: '#32243d', 
                                borderRadius: 6, 
                                width: '40px', 
                                height: '40px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center'  
                            }}
                        >
                            <Image src="https://api.iconify.design/material-symbols:other-houses.svg?color=%23ffffff" style={{ width: '20px' }} /> 
                        </div>
                    </Menu.Item>
                    <Menu.Item
                        name='ranking'
                        onClick={this.handleItemClick}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <div 
                            style={{ 
                                backgroundColor: '#32243d', 
                                borderRadius: 6, 
                                width: '40px', 
                                height: '40px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                            }}
                        >
                            <Image src="https://api.iconify.design/material-symbols:trophy.svg?color=%23ffffff" style={{ width: '20px' }} />
                        </div>
                    </Menu.Item>
                    <Menu.Item
                        name='usuario'
                        onClick={this.handleItemClick}
                        style={{
                            display: 'flex', 
                            justifyContent: 'space-evenly',
                            marginLeft: '2%'
                        }}
                    >
                        <div style={{
                                    borderRadius: 6,
                                    width: '40px',
                                    height: '40px',
                                    border: '1px solid #00C9FF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    
                                }}>
                            <div
                                style={{
                                    backgroundColor: '#D6FBFF',
                                    borderRadius: 6,
                                    width: '35px',
                                    height: '35px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#1B0C27',
                                    fontFamily: 'Poppins',
                                    fontSize: '2em',
                                    fontWeight: 'bold'
                                }}
                            >
                                {user.charAt(0).toUpperCase()}
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#D6FBFF',
                                fontFamily: 'Poppins',
                                fontSize: '1em',
                                fontWeight: 'bold',
                                marginLeft: '15px'
                            }}
                        >
                            {user.length <= 15 ? user : user.substring(0, 15) + (user.length > 15 ? '  .  .  .' : '')}
                        </div>
                        <Image src="https://api.iconify.design/material-symbols:arrow-drop-down.svg?color=%23ffffff" style={{ width: '25px', marginLeft: '7px' }} />
                    </Menu.Item>
                </Menu>
            </>
        )
    }
}

export default MenuSistema;
