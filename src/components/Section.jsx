const Section = ({ title, children }) => {
    return( 
    <div>
      <h1 title={title}>{title}</h1>
      {children}
    </div>
    )
  };
  export default Section