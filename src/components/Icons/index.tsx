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
  cardHeart: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M10.83 1.25C9.4725 1.25 8.2575 1.86798 7.5 2.81601C6.7425 1.86798 5.5275 1.25 4.17 1.25C1.8675 1.25 0 3.00562 0 5.17556C0 6.01124 0.1425 6.78371 0.39 7.5C1.575 11.0112 5.2275 13.111 7.035 13.6868C7.29 13.7711 7.71 13.7711 7.965 13.6868C9.7725 13.111 13.425 11.0112 14.61 7.5C14.8575 6.78371 15 6.01124 15 5.17556C15 3.00562 13.1325 1.25 10.83 1.25Z"
        fill="#243678"
        fill-opacity="0.4"
      />
    </svg>
  ),
  cardParticipants: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <ellipse
        cx="7.4999"
        cy="3.44223"
        rx="3.40908"
        ry="3.40908"
        fill="#243678"
        fill-opacity="0.4"
      />
      <path
        d="M0.112253 13.8524C0.0120393 14.4112 0.472409 14.8859 1.04011 14.8859H13.9599C14.5276 14.8859 14.9879 14.4112 14.8877 13.8524C14.2584 10.3433 11.1902 7.6803 7.49998 7.6803C3.80979 7.6803 0.74158 10.3433 0.112253 13.8524Z"
        fill="#243678"
        fill-opacity="0.4"
      />
    </svg>
  ),
  cardViews: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
    >
      <ellipse
        cx="7.5"
        cy="5.5"
        rx="7.5"
        ry="5"
        fill="#243678"
        fill-opacity="0.4"
      />
      <ellipse cx="7.5" cy="5.5" rx="3.125" ry="3.125" fill="white" />
    </svg>
  ),

  cardWordCount: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.58457 12.7838C11.3349 12.7838 14.3751 10.2503 14.3751 7.12501C14.3751 3.99976 11.3349 1.46625 7.58457 1.46625C3.83427 1.46625 0.79405 3.99976 0.79405 7.12501C0.79405 8.15008 1.12112 9.11149 1.69304 9.94072L0.426179 11.7143C0.159011 12.0884 0.495634 12.5944 0.943857 12.4925L3.82451 11.8378C4.90105 12.4355 6.194 12.7838 7.58457 12.7838Z"
        fill="#243678"
        fill-opacity="0.4"
      />
    </svg>
  ),

  cardVoteCheck: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.3595 2.61248C15.7576 2.99527 15.77 3.62832 15.3872 4.02642L7.05387 12.6931C6.85637 12.8985 6.58062 13.0099 6.29587 12.9993C6.01111 12.9887 5.7444 12.8571 5.56271 12.6376L0.562706 6.59722C0.210543 6.17178 0.269947 5.54141 0.695388 5.18925C1.12083 4.83709 1.7512 4.89649 2.10336 5.32193L6.38886 10.4992L13.9455 2.64021C14.3283 2.2421 14.9614 2.22969 15.3595 2.61248Z"
        fill="#07BBF3"
      />
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
