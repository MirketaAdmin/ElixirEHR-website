import { postTypes } from '../../../posts';
import Container from '../../layout/Container/Container';
import PostSeo from '../PostSeo/PostSeo';
import PostHero from '../PostHero/PostHero';
import PostContent from '../PostContent/PostContent';
import PostSidebar from '../PostSidebar/PostSidebar';
import PostShare from '../PostShare/PostShare';
import styles from './PostDetailTemplate.module.css';

/**
 * The one inner-page template for every post type (blog, press release, case study, release note,
 * e-book, webinar), built from the Figma "Press Release" detail frame. Everything shown comes from
 * the post object; sections without data (media contact, tags, about, latest posts) are omitted.
 */
function PostDetailTemplate({ post }) {
  const type = postTypes[post.type];
  const blocks = post.content?.length ? post.content : [{ type: 'lead', text: post.excerpt }];

  return (
    <>
      <PostSeo post={post} type={type} />
      <article>
        <PostHero post={post} type={type} />
        <Container className={styles.layout}>
          <div className={styles.main}>
            {post.heroImage && (
              <img
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                width={post.heroImage.width}
                height={post.heroImage.height}
                fetchPriority="high"
                className={styles.heroImage}
              />
            )}
            <PostContent blocks={blocks} />
            {post.about && (
              <section className={styles.about}>
                <h2 className={styles.aboutTitle}>{post.about.title}</h2>
                <p className={styles.aboutText}>{post.about.text}</p>
              </section>
            )}
            <PostShare label={type.shareLabel} title={post.title} />
          </div>
          <PostSidebar post={post} type={type} />
        </Container>
      </article>
    </>
  );
}

export default PostDetailTemplate;
