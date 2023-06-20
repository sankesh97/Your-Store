const Card = ({ children, imgLink }) => {
  return (
    <div
      className={`card p-5 ${imgLink ? 'text-light' : ''}`}
      style={{
        backgroundImage: imgLink
          ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) ,url(' +
            imgLink +
            ')'
          : 'none',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
};
export default Card;
