import classNames from 'classnames';
import Image from 'next/image';
import { features } from 'process';
import React, { FC } from 'react';
import FeatureListItem, { FeatureListItemProps } from '../../components/FeatureListItem';

interface PricingCardProps {
  plan: string;
  subtitle: string;
  price: number;
  discount?: number;
  priceSuffix?: string;
  featureTitle?: string;
  highlighted?: boolean;
  illustration: { src: string; width: number; height: number; alt: string };
  features: FeatureListItemProps[];
}

const PricingCard: FC<PricingCardProps> = props => {
  return (
    <>
      <div className={classNames('card', props.highlighted && 'card--highlighted')}>
        <div className="card__details">
          <div className="card__illustration">
            <Image
              src={props.illustration.src}
              alt={props.illustration.alt}
              width={props.illustration.width}
              height={props.illustration.height}
            />
          </div>

          <h4 className="card__plan">{props.plan}</h4>
          <span className="card_price-tier">{props.subtitle}</span>

          <div className="price">
            {props.discount && <div className="price__discount">${props.price}</div>}
            <h2 className="price__price">${(props.discount || 0) - props.price}</h2>
            <span className="price__suffix">{props.priceSuffix}</span>
          </div>
        </div>

        <div className="card__features">
          {props.featureTitle && <h4 className="card__feature-title">{props.featureTitle}</h4>}
          {props.features.map((feature, i) => (
            <FeatureListItem key={i} icon={feature.icon}>
              {feature.children}
            </FeatureListItem>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card {
          border: 1px solid #e7dfd7;
          padding: 24px;
          border-radius: 10px;
          border: 1px solid #eae4dd;
          position: relative;
          padding-top: 7rem;

          &__details {
            display: flex;
            flex-direction: column;
            gap: var(--space-2xs);
            margin-bottom: var(--space-sm);
          }

          &__illustration {
            position: absolute;
            top: 0;
            transform: translateY(-50%);
          }

          &__plan {
            font-size: 20px;
            color: #938779;
            margin-bottom: var(--space-2xs);
          }

          &__price-tier {
            font-size: 13.5px;
            color: #36312b;
          }

          &__features {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
          }

          &__feature-title {
            font-size: 20px;
            color: #36312b;
            font-weight: 600;
          }

          &--highlighted {
            background-color: rgba(255, 248, 242, 0.85);
          }
        }

        .price {
          display: flex;
          align-items: center;

          &__discount {
            font-size: 50px;
            font-family: var(--font-p22);
            font-weight: 600;
            opacity: 0.6;
            margin-right: 5px;
            text-decoration: line-through;
          }

          &__price {
            font-size: 50px;
            font-family: var(--font-p22);
            font-weight: 600;
            color: #0a1629;
          }

          &__discount,
          &__price {
            line-height: 1em;
          }

          &__suffix {
            margin-left: var(--space-2xs);
            align-self: flex-end;
          }
        }

        @media only screen and (max-width: 479px) {
          .card {
            //padding-left: 16px;
          }
        }
      `}</style>
    </>
  );
};

PricingCard.defaultProps = {};

export default PricingCard;
