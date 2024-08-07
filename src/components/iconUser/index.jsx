import './index.css'

export default function IconUser({ user, type }) {


    return (
        <div className={`external-border ${type==="one"? "external-one" : "external-two"}  `}>

            <div className={`card-icon ${type==="one"? "one" : "two"}`}>
                {user.charAt(0).toUpperCase()}
            </div>
        </div>
    );
}
