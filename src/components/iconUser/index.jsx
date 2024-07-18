import './index.css'

export default function IconUser({ user }) {


    return (
        <div className="card-icon">
            {user.charAt(0).toUpperCase()}
        </div>
    );
}
