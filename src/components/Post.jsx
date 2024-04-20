const Post = ({id, title}) => {
  return (
    <div style={{padding:"1rem", margin:"1rem", border:"2px solid #000"}}>
      <h2>{title}</h2>
      <p>{id}</p>
    </div>
  );
};

export default Post;
