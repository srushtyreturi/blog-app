export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/01/GettyImages-1256204431.jpg?w=1390&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>The two faces of AI</h2>
        <p className="info">
          <span className="author">Srushty R</span>
          <time>2024-01-21 16:47</time>
        </p>
        <p className="summary">
          We all make mistakes. But sometimes we forget that technology does,
          too — especially when it comes to AI, which is still in its early days
          in many respects. — Anna
        </p>
      </div>
    </div>
  );
}
