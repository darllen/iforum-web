import './index.css'

export default function IconUser({ user, type }) {
  if (!user) {
    return null; // Evita renderização com dados inválidos
  }
  return (
    <div className={`external-border ${type === "one" ? "external-one" : "external-two"}  `}>

      <div className={`card-icon ${type === "one" ? "one" : "two"}`}>
        {user.charAt(0).toUpperCase()}
      </div>
    </div>
  );
}
