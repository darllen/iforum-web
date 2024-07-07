import React from "react";
import { Menu, Image } from "semantic-ui-react";
import logo from '../../assets/img/logo1.jpg';
import Avatar from "./avatar";


class MenuSistema extends React.Component {
    state = {
        activeItem: 'search'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const user = "Jamilly Anunciada";

        return (
            <>
                <Menu inverted borderless style={{ height: '8vh', backgroundColor: 'var(--roxo-bonitinho)'}}>
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
                                color: 'var(--azul-branquelo)', 
                                fontFamily: 'Poppins', 
                                padding: '2.5%', 
                                paddingLeft: '7%', 
                                backgroundColor: 'var(--roxo-anemico)',
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
                                color: 'var(--azul-branquelo)' 
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
                                backgroundColor: 'var(--roxo-anemico)', 
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
                                backgroundColor: 'var(--roxo-anemico)', 
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
                    <Avatar usuario={user}/>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--azul-branquelo)',
                                fontFamily: 'Poppins',
                                fontSize: '1em',
                                fontWeight: 'bold',
                                marginLeft: '15px'
                            }}
                        >
                            {user.length <= 10 ? user : user.substring(0, 20) + (user.length > 20 ? '  .  .  .' : '')}
                        </div>
                        <Image src="https://api.iconify.design/material-symbols:arrow-drop-down.svg?color=%23ffffff" style={{ width: '25px', marginLeft: '7px' }} />
                    </Menu.Item>
                </Menu>
            </>
        )
    }
}

export default MenuSistema;
