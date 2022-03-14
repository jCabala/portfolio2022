import ArticleList from '../../components/Articles/ArticleList';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { sortByDate } from '../../helperFunctions';
export default function Home({ articles }) {
  console.log(articles);
  return <ArticleList articles={articles} />;
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('articles'));

  const articles = files.map(filename => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  console.log(articles);
  return {
    props: {
      articles: articles.sort(sortByDate),
    },
  };
};
