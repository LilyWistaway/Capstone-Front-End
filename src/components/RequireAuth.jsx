import AccessGate from "./AccessGate";

export default function RequireAuth({ children, title, message }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <AccessGate title={title} message={message} />;
  }

  return children;
}
