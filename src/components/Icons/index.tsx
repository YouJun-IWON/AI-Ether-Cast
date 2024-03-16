type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  aiSpokesman: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle
        cx="11.0001"
        cy="5.40001"
        r="4.8"
        fill="#1E2E67"
        fill-opacity="0.6"
      />
      <path
        d="M20.2 21.8C21.0837 21.8 21.8125 21.0795 21.6831 20.2053C20.9123 14.9968 16.4229 11 11 11C5.57716 11 1.08778 14.9968 0.316944 20.2053C0.187578 21.0795 0.91638 21.8 1.80004 21.8H20.2Z"
        fill="#1E2E67"
        fill-opacity="0.6"
      />
      <path d="M14.457 14.1438V19.8H13.2852V14.1438H14.457Z" fill="white" />
      <path
        d="M8.48828 19.8H7.22266L9.18359 14.1438H10.6914L12.6445 19.8H11.3867L10.9609 18.4953H8.91406L8.48828 19.8ZM9.21094 17.5813H10.6641L9.95703 15.4172H9.91797L9.21094 17.5813Z"
        fill="white"
      />
    </svg>
  ),
};
