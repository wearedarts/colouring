import Image from '../public/buildings.svg';

export const ColouringImage = (props) => {
  return (
    <div
      onClick={(evt) => {
        evt.target.style.fill = props.currentColour.value;
      }}
    >
      <Image />
    </div>
  );
};
