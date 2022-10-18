import { ReactElement } from 'react';
import FeatureListItem from '../../components/FeatureListItem';
import ReviewCard from '../../components/ReviewCard';

export interface Feature {
  subtitle: string;
  title: string;
  body: ReactElement | ReactElement[];
  videoUrl: string;
}

export const FEATURES: Feature[] = [
  {
    subtitle: 'Just start writing',
    title: 'Focus on content, not formatting',
    videoUrl: '/videos/writing_feature.mp4',
    body: (
      <>
        <p>
          Save hours spent formatting boxes to fit on a slide with flexible cards and fluid layouts that expand as you
          add new blocks.
        </p>

        <ReviewCard company="Travell" name="Aljendro" profileSrc="/image/avatars/john_avatar.jpg">
          Gamma allows me to package up information in <b>ways I can&apos;t with slides</b>, while still creating good
          flow for my presentations.
        </ReviewCard>
      </>
    ),
  },
  {
    subtitle: 'Beautiful and on-brand',
    title: 'Polished and ready in one click',
    videoUrl: '/videos/polished_feature.mp4',
    body: (
      <>
        <FeatureListItem icon="🎉">
          <b>No more</b> slide masters or template lock-in
        </FeatureListItem>
        <FeatureListItem icon="🎨">
          Restyle your entire deck in just <b>one-click</b>
        </FeatureListItem>
        <FeatureListItem icon="⏰">
          Use a <b> flexible template</b> to work faster
        </FeatureListItem>

        <ReviewCard
          company="Stotles"
          name="John"
          position="Co-founder & CEO"
          profileSrc="/image/avatars/yin_avatar.jpg"
        >
          Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand. With
          Gamma, I can get things done <b>so much faster.</b>
        </ReviewCard>
      </>
    ),
  },
  {
    subtitle: 'Context with brevity',
    title: 'Present like a deck. Share like a doc.',
    videoUrl: '/videos/present_feature.mp4',
    body: (
      <>
        <FeatureListItem icon="💡">
          Get your point across <b>with present mode</b>
        </FeatureListItem>
        <FeatureListItem icon="🔎">
          Drill into the details using <b>nested cards</b>
        </FeatureListItem>
        <FeatureListItem icon="💬">
          Keep things concise with <b>footnotes</b>
        </FeatureListItem>

        <ReviewCard
          name="Matthias"
          company="ODALINE"
          position="Senior Strategy Consultant"
          profileSrc="/image/avatars/yin_avatar.jpg"
        >
          Notion x Canva is the best way to think about Gamma. It&apos;s just<b> so nice to use!</b>
        </ReviewCard>
      </>
    ),
  },
  {
    subtitle: 'Concise, visual, and interactive',
    title: 'Bring your ideas to life',
    videoUrl: '/videos/present_feature.mp4',
    body: (
      <div className="wrapper">
        <p>Move beyond walls of text and boring clipart. Embed anything:</p>

        <div className="column">
          <FeatureListItem icon="🌌">GIFs</FeatureListItem>
          <FeatureListItem icon="📽️">Videos</FeatureListItem>
          <FeatureListItem icon="📈">Charts</FeatureListItem>
          <FeatureListItem icon="💻">Websites</FeatureListItem>
        </div>
        <p>Your audience can follow along live and keep exploring after the meeting.</p>

        <ReviewCard
          name="Emilie"
          company="Six Eastern"
          position="Founder & Principal"
          profileSrc="/image/avatars/yin_avatar.jpg"
        >
          We&apos;ve avoided PowerPoint decks at all costs at our agency, but Gamma offered us a{' '}
          <b>fresh alternative</b> that we love to share with potential clients. Polished and adaptable. We love it!
        </ReviewCard>

        <style jsx>
          {`
            .wrapper {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }
          `}
        </style>
      </div>
    ),
  },
];
