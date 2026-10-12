import { Navigate, useParams } from 'react-router-dom';
import { getPost } from '../../posts';
import PostDetailTemplate from '../../components/posts/PostDetailTemplate/PostDetailTemplate';

/**
 * Route element for /<type path>/:slug (see App.jsx). Unknown slugs follow the app's existing
 * not-found behaviour: a redirect to Home.
 */
function PostDetail({ type }) {
  const { slug } = useParams();
  const post = getPost(type, slug);

  if (!post) return <Navigate to="/" replace />;
  return <PostDetailTemplate key={post.id} post={post} />;
}

/** Keeps the earlier /press-releases/:slug detail URLs working. */
export function LegacyPressReleaseRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/press-release/${slug}`} replace />;
}

export default PostDetail;
