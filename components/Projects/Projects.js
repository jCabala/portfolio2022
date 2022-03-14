import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Com,
  SampleCrudentials,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({
          id,
          image,
          title,
          description,
          tags,
          source,
          visit,
          commercial,
          isThisSite,
          sampleCrudentials,
        }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Com personal={!commercial}>
                {commercial ? '(commercial)' : '(personal)'}
              </Com>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            {sampleCrudentials ? (
              <SampleCrudentials>
                Sample Crudentials <br />
                Email: {sampleCrudentials.email} <br />
                Password: {sampleCrudentials.password}
              </SampleCrudentials>
            ) : (
              <></>
            )}
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target='_blank'>
                {isThisSite ? 'Blog' : 'Live Site'}
              </ExternalLinks>
              <ExternalLinks href={source} target='_blank'>
                Source
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
