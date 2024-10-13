import { Path, Svg } from 'react-native-svg';

type Props = {
  size: number;
  fill: string;
};

function ResetIcon({ size, fill }: Props) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19.3872 9.75012H15C14.5858 9.75012 14.25 9.41434 14.25 9.00012C14.25 8.58591 14.5858 8.25012 15 8.25012H18.2325C16.6133 5.53785 13.3607 4.17002 10.1983 4.98109C8.92385 5.309 7.76269 5.97761 6.83931 6.91522C5.91581 7.85295 5.26499 9.02439 4.95665 10.3039C4.64831 11.5834 4.69409 12.9227 5.08907 14.1782C5.48405 15.4336 6.21333 16.5579 7.19871 17.4304C8.18409 18.3029 9.38838 18.8907 10.6824 19.1308C11.9765 19.3708 13.3115 19.2541 14.5442 18.7931C15.777 18.3322 16.861 17.5443 17.68 16.514C18.4991 15.4838 19.0222 14.25 19.1933 12.9451C19.2472 12.5344 19.6238 12.2451 20.0345 12.299C20.4452 12.3528 20.7345 12.7294 20.6806 13.1401C20.4741 14.7151 19.8427 16.2041 18.8542 17.4475C17.8657 18.6909 16.5574 19.6418 15.0696 20.1981C13.5818 20.7545 11.9706 20.8953 10.4088 20.6056C8.84703 20.3159 7.39358 19.6064 6.20433 18.5534C5.01508 17.5004 4.13491 16.1436 3.65821 14.6283C3.18151 13.1131 3.12626 11.4967 3.49839 9.95248C3.87053 8.40825 4.656 6.99445 5.77057 5.8627C6.88515 4.73095 8.28677 3.92395 9.82513 3.52825L9.82564 3.52812C13.4617 2.59556 17.215 4.05743 19.25 7.05602V4.00012C19.25 3.58591 19.5858 3.25012 20 3.25012C20.4142 3.25012 20.75 3.58591 20.75 4.00012V9.00012C20.75 9.41434 20.4142 9.75012 20 9.75012H19.4872C19.4537 9.75238 19.4203 9.75235 19.3872 9.75012Z'
        fill={fill}
      />
    </Svg>
  );
}

export default ResetIcon;
