import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

import {
  LinkWrapper,
  Article,
  ArticleWrapper,
  Date,
} from '../../styles/pages/article/Article.styled';

const Post = ({ frontmatter: { title, date, cover_image }, slug, content }) => {
  return (
    <ArticleWrapper>
      <h2>{title}</h2>
      <Date>Posted on {date}</Date>
      <img src={cover_image} alt='' />

      <Article
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
      ></Article>
      <Link href='/blog' passHref={true}>
        <LinkWrapper>Go back</LinkWrapper>
      </Link>
    </ArticleWrapper>
  );
};

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('articles'));

  const paths = files.map(e => ({
    params: {
      slug: e.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('articles', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
