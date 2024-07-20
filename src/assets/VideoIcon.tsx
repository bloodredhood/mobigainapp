interface Props {
  size: string
}

export const VideoIcon = ({size}: Props) => {
  return <>
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="22" fill="#16EC6D" />
      <path d="M25.75 29.5H13C12.6022 29.5 12.2206 29.342 11.9393 29.0607C11.658 28.7794 11.5 28.3978 11.5 28V16C11.5 15.6022 11.658 15.2206 11.9393 14.9393C12.2206 14.658 12.6022 14.5 13 14.5H25.75C26.1478 14.5 26.5294 14.658 26.8107 14.9393C27.092 15.2206 27.25 15.6022 27.25 16V19.045L31.315 16.1425C31.4269 16.0628 31.5586 16.0154 31.6957 16.0054C31.8327 15.9955 31.9699 16.0234 32.0922 16.086C32.2144 16.1487 32.3171 16.2438 32.3891 16.3609C32.461 16.478 32.4994 16.6126 32.5 16.75V27.25C32.4994 27.3874 32.461 27.522 32.3891 27.6391C32.3171 27.7562 32.2144 27.8513 32.0922 27.9139C31.9699 27.9766 31.8327 28.0045 31.6957 27.9946C31.5586 27.9846 31.4269 27.9372 31.315 27.8575L27.25 24.955V28C27.25 28.3978 27.092 28.7794 26.8107 29.0607C26.5294 29.342 26.1478 29.5 25.75 29.5Z" fill="#2F2D2D" />
    </svg>
  </>
}