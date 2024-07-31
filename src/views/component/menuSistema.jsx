import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Icon, Form, Button } from "semantic-ui-react";
import logo from '../../assets/img/logo1.jpg';
import Avatar from "./avatar";


class MenuSistema extends React.Component {
    state = {
        activeItem: 'search',
        dropdownUserVisible: false,
        dropdownRankingVisible: false,
        isProfileHovered: false,
        isExitHovered: false,
        isModalVisible: false 
    }

    toggleDropdownUser = () => {
        this.setState((prevState) => ({
            dropdownUserVisible: !prevState.dropdownUserVisible
        }));
    }

    toggleDropdownRanking = () => {
        this.setState((prevState) => ({
            dropdownRankingVisible: !prevState.dropdownRankingVisible
        }));
    }

    closeDropdown = () => {
        this.setState({ dropdownUserVisible: false, dropdownRankingVisible: false });
    }

    handleMouseEnter = (item) => {
        this.setState({ [item]: true }); 
    }

    handleMouseLeave = (item) => {
        this.setState({ [item]: false }); 
    }

    openModal = () => {
        this.setState({ dropdownUserVisible: false, isModalVisible: true });
    }

    closeModal = () => {
        this.setState({ isModalVisible: false });
    }
    
    render() {
        const user = {
            username: "Jamilly Anunciada",
            email: "jamilly@discente.ifpe.edu.br",
            senha: "criptonemane"
        }

        const bestUsers = [
            { id: 1, username: 'Nilson Júnior', curtidas: 364 },
            { id: 2, username: 'Nilson Júnior', curtidas: 364 },
            { id: 3, username: 'Nilson Júnior', curtidas: 364 },
            { id: 4, username: 'Nilson Júnior', curtidas: 364 },
            { id: 5, username: 'Nilson Júnior', curtidas: 364 }
        ];

        const { dropdownUserVisible, dropdownRankingVisible, isProfileHovered, isExitHovered, isModalVisible } = this.state;

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
                        as={Link}
                        to="/home"
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
                        onClick={this.toggleDropdownRanking}
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
                        onClick={this.toggleDropdownUser}
                        style={{
                            display: 'flex', 
                            justifyContent: 'space-evenly',
                            marginLeft: '2%',
                            position: 'relative'
                        }}
                    >
                        <Avatar usuario={user.username}/>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--azul-branquelo)', fontFamily: 'Poppins', fontSize: '1em', fontWeight: 'bold', marginLeft: '15px' }} >
                            {user.username.length <= 10 ? user.username : user.username.substring(0, 20) + (user.username.length > 20 ? '  .  .  .' : '')}
                        </div>
                        <Image src="https://api.iconify.design/material-symbols:arrow-drop-down.svg?color=%23ffffff" style={{ width: '25px', marginLeft: '7px' }} />
                        { dropdownUserVisible && (
                            <div style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', zIndex: 1001, width: '20vw', height: '36vh' }} >
                                <div style={{ padding: '8% 0 5% 0', display: 'flex', justifyContent: 'center', gap: '7%' }}>
                                    <Avatar usuario={user.username}/>
                                    <p style={{ display: 'flex', alignItems: 'center', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontSize: '1.5em', fontWeight: 'bold' }} >
                                        {user.username.length <= 10 ? user.username : user.username.substring(0, 20) + (user.username.length > 20 ? '  .  .  .' : '')}
                                    </p>
                                </div> 
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5% 5%', borderBottom: '1.5px solid #E6E6E6' }}>
                                    <div style={{ textAlign: 'center', fontSize: '1.3em', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontWeight: 'bold'}} >
                                        <p style={{ margin: 0 }}>Respostas</p> 
                                        <p style={{ margin: 0 }}>15</p>{/* respostas = select all respostas r where user_id = user.id*/}
                                    </div>
                                    <div style={{ textAlign: 'center', fontSize: '1.3em', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontWeight: 'bold'}} >
                                        <p style={{ margin: 0 }}>Perguntas</p> 
                                        <p style={{ margin: 0}}>2</p>{/* select all perguntas p where p.user_id = user.id */}
                                    </div>
                                    <div style={{ textAlign: 'center', fontSize: '1.3em', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontWeight: 'bold'}} >
                                        <p style={{ margin: 0 }}>Curtiram</p> 
                                        <p style={{ margin: 0}}>7</p>{/* cada vez que o usuário responder uma pergunta, acrescentar +1 ao atributo 'respondeu' | select respondeu from user u where u.id = user.id; */}
                                    </div>
                                </div>
                                <div onClick={(e) => { e.stopPropagation(); this.openModal()}} onMouseEnter={() => this.handleMouseEnter('isProfileHovered')} onMouseLeave={() => this.handleMouseLeave('isProfileHovered')} style={{ backgroundColor: isProfileHovered ? '#E6E6E6' : 'white', transition: 'background-color 0.3s', padding: '5% 10%',textAlign: 'right', color: 'var(--cinza-escuro)', fontSize: '1.3em' ,borderBottom: '1.5px solid #E6E6E6' }}>
                                    <p>Ver perfil</p> 
                                </div>
                                <Link to={"/"}>
                                    <div onMouseEnter={() => this.handleMouseEnter('isExitHovered')} onMouseLeave={() => this.handleMouseLeave('isExitHovered')} style={{ backgroundColor: isExitHovered ? '#E6E6E6' : 'white', transition: 'background-color 0.3s', padding: '5% 10%',textAlign: 'right', color: 'var(--cinza-escuro)', fontSize: '1.3em', textDecoration: 'underline' }}>
                                        Sair
                                    </div>
                                </Link>
                            </div>
                        )}
                        {/* fundo do dropdown */}
                        {dropdownUserVisible && ( <div onClick={this.closeDropdown} style={{ position: 'fixed', top: '8vh', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }} /> )}

                        { dropdownRankingVisible && (
                            <div style={{ position: 'absolute', top: '100%', right: 0, backgroundColor: 'white', listStyle: 'none', padding: 0, margin: 0, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', zIndex: 1001, width: '20vw', height: 'auto' }} >
                                <div style={{ padding: '8% 0 5% 0', display: 'flex', justifyContent: 'center', gap: '7%' }}>
                                    <Icon size='large' color='yellow' name='trophy' />
                                    <p style={{ display: 'flex', alignItems: 'center', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontSize: '1.3em', fontWeight: 'bold' }} >
                                        Melhores usuários
                                    </p>
                                </div> 
                                { bestUsers.map((bu) => (
                                    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1.5px solid #E6E6E6', padding: '3% 10%' }}>
                                        <Avatar usuario={user.username}/>
                                        <div style={{ padding: '5% 10%',textAlign: 'right', color: 'var(--cinza-escuro)', fontSize: '1.3em' }}>
                                            {bu.username}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* fundo do dropdown */}
                        {dropdownRankingVisible && ( <div onClick={this.closeDropdown} style={{ position: 'fixed', top: '8vh', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }} /> )}
                    </Menu.Item>
                </Menu>
                
                {isModalVisible && (
                    <div id="Modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', zIndex: 1002, height: "60%", width: "40%", borderRadius: 15 }}>
                        <div id="Header" style={{borderBottom: '1.5px solid #E6E6E6' }}>
                            <div style={{ display: "flex", justifyContent: "right", width: "10%", cursor: "pointer", marginLeft: 'auto', padding: '3% 5%' }} >
                                <Icon onClick={this.closeModal} name="close" style={{ color: "var(--cinza-medio)", width: "500px" }} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', margin: '0 7%' }}>
                                <div style={{ display: 'flex', gap: '7%', width: '50%' }}>
                                    <Avatar usuario={user.username}/>
                                    <p style={{ color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontSize: '1.5em', fontWeight: 'bold' }} >
                                        {user.username.length <= 10 ? user.username : user.username.substring(0, 20) + (user.username.length > 20 ? '  .  .  .' : '')}
                                    </p>
                                </div> 
                                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5% 0%' }}>
                                    <div style={{ textAlign: 'center', fontSize: '1.3em', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontWeight: 'bold'}} >
                                        <p style={{ margin: 0 }}>Respostas</p> 
                                        <p style={{ margin: 0 }}>15</p>{/* respostas = select all respostas r where user_id = user.id*/}
                                    </div>
                                    <div style={{ textAlign: 'center', fontSize: '1.3em', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontWeight: 'bold'}} >
                                        <p style={{ margin: 0 }}>Perguntas</p> 
                                        <p style={{ margin: 0}}>2</p>{/* select all perguntas p where p.user_id = user.id */}
                                    </div>
                                    <div style={{ textAlign: 'center', fontSize: '1.3em', color: 'var(--cinza-escuro)', fontFamily: 'Poppins', fontWeight: 'bold'}} >
                                        <p style={{ margin: 0 }}>Curtiram</p> 
                                        <p style={{ margin: 0}}>7</p>{/* cada vez que o usuário responder uma pergunta, acrescentar +1 ao atributo 'respondeu' | select respondeu from user u where u.id = user.id; */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", fontFamily: "Poppins", fontWeight: 600, fontSize: '1.5em', margin: '4% 7%'}} >
                            Informações
                        </div>
                        <Form>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', fontFamily: "Poppins", margin: "1% 10%", gap: 15}}>
                                <div style={{ width: '100%'}}>
                                    <Form.Input label="Nome" placeholder={user.username} />
                                </div>
                                <div style={{ width: '100%'}}>
                                    <Form.Input label="E-mail" placeholder={user.email} style={{ width: '100%'}} />
                                </div>                                
                            </div>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', fontFamily: "Poppins", margin: "3% 10%", gap: 15}}>
                                <div style={{ width: '100%'}}>
                                    <Form.Input type="password" label="Senha" placeholder='Nova senha' />
                                </div>
                                <div style={{ width: '100%'}}>
                                    <Form.Input type="password" label="Confirmar senha" placeholder='Confirme sua senha' />
                                </div>                                
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '5% 10%' }}>
                                <Button onClick={this.closeModal} type="button" style={{ backgroundColor: 'var(--azul-normal)' }}>
                                    <Link to={'/home'} style={{ color: 'var(--azul-branquelo)', fontWeight: 500, fontFamily: 'Poppins', textDecoration: 'none' }}>Salvar edição</Link>
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
                
                {/* fundo do modal */}
                {isModalVisible && ( <div onClick={this.closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }} /> )}
            </>
        )
    }
}

export default MenuSistema;

