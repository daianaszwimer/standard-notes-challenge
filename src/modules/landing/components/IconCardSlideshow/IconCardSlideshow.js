import IconCard from "../IconCard";

const IconCardSlideshow = ({ cards }) => (
  <>
    {cards.map(card => <IconCard
      key={card.id}
      {...card}
    />)}
  </>
);

export default IconCardSlideshow;