function Button({ className, id, title, func }) {
  return (
    <button className={className} onClick={func} id={id}>
      {title}
    </button>
  );
}
export default Button;
