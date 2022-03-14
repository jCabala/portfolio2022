import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Card } from './Article.styled';

const Article = ({ article }) => {
  return (
    <Link href='/blog/[id]' passHref={true} as={`/blog/${article.slug}`}>
      <Card>
        <h3>{article.frontmatter.title} &rarr;</h3>
        <img
          style={{ width: '100%' }}
          src={article.frontmatter.cover_image}
          alt=''
        />
        <div>Posted on {article.frontmatter.date}</div>
        <p>{article.frontmatter.excerpt}</p>
      </Card>
    </Link>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
