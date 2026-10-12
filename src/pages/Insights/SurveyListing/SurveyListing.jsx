import { insightsPages } from '../../../data/insights';
import { getPostPath } from '../../../posts';
import { formatCardDate } from '../../../utils/formatDate';
import WideListing from '../WideListing/WideListing';

function meta(post) {
  return [
    post.author && { icon: 'person', text: post.author },
    { icon: 'calendar', text: formatCardDate(post.publishDate) },
  ].filter(Boolean);
}

const action = (post) => ({ label: 'Read More', to: getPostPath(post) });

/** /insights/benchmark-surveys — benchmark survey posts (src/posts/benchmark-survey/). */
function SurveyListing() {
  return (
    <WideListing
      type="benchmark-survey"
      page={insightsPages.surveys}
      noun="benchmark survey"
      meta={meta}
      action={action}
    />
  );
}

export default SurveyListing;
