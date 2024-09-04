import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  fill?: string;
};

function KakaoLogo({ width, height, fill = '#000000' }: Props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}>
      <G clipPath='url(#clip0_113_206)'>
        <Path
          d='M8.99997 0.6C4.02913 0.6 -4.57764e-05 3.71296 -4.57764e-05 7.55228C-4.57764e-05 9.94003 1.55836 12.045 3.93148 13.297L2.93298 16.9445C2.84476 17.2668 3.21337 17.5237 3.49642 17.3369L7.8733 14.4482C8.24266 14.4838 8.61803 14.5047 8.99997 14.5047C13.9704 14.5047 17.9999 11.3918 17.9999 7.55228C17.9999 3.71296 13.9704 0.6 8.99997 0.6Z'
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_113_206'>
          <Rect
            width={width}
            height={height}
            fill='#FFFFFF'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default KakaoLogo;
