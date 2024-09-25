import Svg, { Circle, Rect } from 'react-native-svg';

type Props = {
  activeColor: string;
  inActiveColor: string;
  isChecked: boolean;
};

function RadioIcon({ activeColor, inActiveColor, isChecked }: Props) {
  if (isChecked) {
    return (
      <Svg
        width='16'
        height='17'
        viewBox='0 0 16 17'
        fill='none'>
        <Circle
          cx='7.95894'
          cy='8.49752'
          r='7.29'
          stroke={activeColor}
          stroke-width='1.215'
        />
        <Circle
          cx='7.95894'
          cy='8.49775'
          r='4.05'
          fill={activeColor}
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'>
        <Rect
          x='0.668945'
          y='0.807617'
          width='14.58'
          height='14.58'
          rx='7.29'
          stroke={inActiveColor}
          stroke-width='1.215'
        />
      </Svg>
    );
  }
}

export default RadioIcon;
