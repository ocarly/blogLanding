import './BlogPosts.css'
import penguinDude from '../../assets/penguinDude.jpg';

const BlogPosts = () => {
    const handleCardClick = () => {
        console.log('Card clicked!');
        // Add your logic here
      };
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" onClick={handleCardClick}>
        <img src={penguinDude} className="card-img-top" alt="Post" />
          <div className="card-header">Posted by User Name on Date</div>
          <div className="card-body">
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">Post Content</p>
            <p className="card-text">
              <small className="text-muted">Comments: X | Likes: Y</small>
            </p>
          </div>
        </div>
      </div>
      {/* More columns as needed */}
    </div>
  );
};

export default BlogPosts;
