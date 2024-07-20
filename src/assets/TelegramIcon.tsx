interface Props {
  size: string
}

export const TelegramIcon = ({size}: Props) => {
  return <>
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="22" fill="#16EC6D" />
      <g clip-path="url(#clip0_52_183)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.777 14.43C30.0241 14.326 30.2946 14.2901 30.5603 14.3261C30.826 14.3621 31.0772 14.4687 31.2877 14.6347C31.4982 14.8007 31.6604 15.0201 31.7574 15.2701C31.8543 15.5201 31.8825 15.7914 31.839 16.056L29.571 29.813C29.351 31.14 27.895 31.901 26.678 31.24C25.66 30.687 24.148 29.835 22.788 28.946C22.108 28.501 20.025 27.076 20.281 26.062C20.501 25.195 24.001 21.937 26.001 20C26.786 19.239 26.428 18.8 25.501 19.5C23.199 21.238 19.503 23.881 18.281 24.625C17.203 25.281 16.641 25.393 15.969 25.281C14.743 25.077 13.606 24.761 12.678 24.376C11.424 23.856 11.485 22.132 12.677 21.63L29.777 14.43Z" fill="#2F2D2D" />
      </g>
      <defs>
        <clipPath id="clip0_52_183">
          <rect width="24" height="24" fill="white" transform="translate(10 10)" />
        </clipPath>
      </defs>
    </svg>

  </>
}