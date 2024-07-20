interface Props {
  size: string
}

export const TikTokIcon = ({size}: Props) => {
  return <>
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="22" fill="#16EC6D" />
      <path d="M22.45 11.515C23.575 11.5 24.7 11.515 25.825 11.5C25.9 12.835 26.365 14.2 27.34 15.145C28.3 16.12 29.665 16.555 31 16.705V20.23C29.755 20.185 28.51 19.93 27.37 19.39C26.875 19.165 26.425 18.88 25.975 18.58C25.975 21.13 25.975 23.695 25.96 26.23C25.9 27.46 25.495 28.675 24.79 29.68C23.665 31.36 21.7 32.455 19.69 32.485C18.46 32.56 17.215 32.215 16.165 31.585C14.425 30.55 13.195 28.63 13.015 26.59C12.985 26.155 12.985 25.72 13.015 25.285C13.165 23.62 13.99 22.03 15.25 20.95C16.675 19.69 18.685 19.09 20.56 19.45C20.575 20.74 20.53 22.045 20.53 23.335C19.675 23.05 18.67 23.14 17.92 23.665C17.365 24.025 16.96 24.565 16.735 25.195C16.555 25.645 16.6 26.125 16.615 26.605C16.825 28.045 18.19 29.245 19.63 29.11C20.59 29.11 21.52 28.525 22.015 27.7C22.18 27.415 22.36 27.115 22.375 26.77C22.465 25.21 22.42 23.65 22.435 22.075C22.435 18.55 22.435 15.025 22.45 11.515Z" fill="#2F2D2D" />
    </svg>
  </>
}