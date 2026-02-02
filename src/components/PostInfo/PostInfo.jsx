import commentsFromServer from '../../api/comments.json';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user && (
          <a className="UserInfo" href={`mailto:${post.user.email}`}>
            {post.user.name}
          </a>
        )}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList
      comments={commentsFromServer.filter(
        comment => comment.postId === post.id,
      )}
    />
  </div>
);
