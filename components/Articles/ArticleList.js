import PropTypes from 'prop-types';
import Article from './Article';
import { Grid } from './Article.styled';

const ArticleList = ({ articles }) => {
  return (
    <Grid>
      {articles.map((e, idx) => (
        <Article key={`article_${idx}`} article={e} />
      ))}
    </Grid>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
