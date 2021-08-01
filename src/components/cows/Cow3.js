import React from 'react';

function Icon({ width = 425, height = 300 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      overflow="visible"
      version="1.1"
      viewBox="0 0 425.197 300"
      xmlSpace="preserve"
    >
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M416.308 211.841c-3.762-5.182-9.189-8.145-12.323-14.114-7.283-13.887-8.267-32.626-11.163-47.827h-4.962c3.558 21.168 2.766 48.272 21.46 62.684-13.62-2.696-23.694-14.35-20.696-28.269 1.248-5.791 1.766-36.708-6.388-34.415 2.022 7.875 3.919 15.841 4.549 23.974.469 6.038-2.285 10.755-2.151 16.716.217 9.711 7.6 18.039 16.334 21.581 3.613 1.466 7.59 2.239 11.336 3.253 1.943.527 3.643 1.643 5.308.42 2.802-2.057.031-2.164-1.304-4.003zM375.495 89.36c-3.938-6.818-5.205-10.068-13.231-10.068 8.516 9.766 13.404 21.291 17.275 33.52 2.016 6.367 3.546 12.896 4.928 19.425.783 3.694 1.494 7.402 2.201 11.11 1.088 5.711.139 6.553 6.153 6.553-2.771-15.018-6.374-29.889-10.421-44.609-1.728-5.584-3.981-10.866-6.905-15.931zm9.883 60.539c-6.805-21.768-18.422-41.281-29.801-60.894-.14-4.36 1.725-9.964.793-14.068a14.974 14.974 0 00-.481-1.639c1.062.865 2.098 1.761 3.149 2.65 3.811 3.226 4.307 3.343 9.717 3.343-21.977-26.133-57.616-24.129-88.692-23.773-40.706.466-81.562 4.637-121.077 14.446l-1.24-12.133c5.936 1.077 16.394-4.275 21.791-7.138 5.271-2.796 9.738-6.708 14.249-10.583 7.615-6.542 15.049-13.575 17.344-23.667.912-4.019 2.056-6.363-2.482-6.954-4.09-.533-8.273-.906-12.404-.846-7.709.112-15.879 1.375-23.114 4.085-12.695 4.754-22.423 14.161-28.574 26.122-4.014-3.385-3.972-4.314-5.479-8.995-.741-2.307-1.635-4.689-3.33-6.479-4.639-4.904-10.386-.96-14.551-3.976-5.481-3.969-12.193-7.046-18.859-8.321-9.603-1.838-15.375 2.825-23.817 6.438-3.682 1.576-10.073 2.624-10.685 7.467-.247 1.944-.756 12.218-2.195 11.248a51.48 51.48 0 00-9.78-5.18c-4.863-1.933-49.282-10.02-47.8-.806.801 4.994-2.46 9.55 1.281 14.588 2.636 3.551 7.258 5.963 10.983 8.094 10.11 5.785 21.033 11.295 32.972 10.23-.073 3.383-1.442 14.51 1.96 16.045-.505.033-1.015.09-1.465.09 1.148 13.396 3.408 26.604 7.713 39.367 1.979 5.869 4.371 11.518 7.049 17.098 2.007 4.185 1.509 12.568 6.166 14.086a29.83 29.83 0 01-1.576.057c3.389 7.904 6.161 15.118 14.929 17.413 4.218 1.104 4.895 1.508 8.558 4.087 2.507 1.763 5.241 3.043 8.167 3.94 2.739.838 12.661-.018 13.89 1.255 10.868 11.224 22.651 21.617 35.39 30.676 6.586 4.684 13.541 8.767 20.683 12.537.531.28 1.118.5 1.731.688-.141.003-.292.01-.427.01l5.375 2.56c-2.868 5.648-1.619 14.113-3.805 20.509-1.388 4.06-3.464 7.775-5.994 11.246a447.907 447.907 0 00-5.42 7.575c-2.809 1.694-6.94 7.538-8.399 12.208-1.995 2.806-4.014 5.942-4.086 8.051-.192 5.642 5.105 4.625 9.931 5.105 5.069.504 10.119.94 15.21 1.125 10.066.365 19.946.446 29.994 1.231 7.483.584 32.574 4.897 31.203-7.646-.388-3.558-1.587-6.448-2.951-9.273a21.328 21.328 0 00-2.72-5.665 37.068 37.068 0 01-.82-2.045c-1.368-3.758-.295-3.1.702-7.057.4-1.584.668-3.124.91-4.744.711-4.76 8.272-37.306 16.747-27.359 3.09 3.626 8.553 28.651 17.656 14.753 5.108-7.798 6.249.271 8.332 4.436 2.378 4.753 11.009 5.621 9.861-1.65 2.774 3.105 5.961 7.105 10.627 5.035.005 4.545-7.786 8.835-10.006 12.936-1.442 2.666-4.708 9.077-3.391 12.236 2.093 5.022 11.759 3.164 16.135 3.38l9.289.457c1.687.084.481 1.541 1.289 2.642 1.643 2.24 2.063 4.686 4.279 6.726 3.831 3.527 10.416 3.466 15.237 3.548 7.033.12 14.452-.671 21.297-2.313 7.074-1.699 7.988-2.023 7.605-9.86-.107-2.221-.819-5.789-1.385-8.212-.612-2.629-1.523-5.266-3.058-7.51-2.6-3.801-2.792-6.667-3.041-11.39-.227-4.27-.268-8.562-.165-12.834.07-2.882 1.957-10.978.413-13.205-.749-1.082 1.788-3.884 2.481-4.994-.805 0-1.519-.046-2.166-.084 1.871-.229 2.611-1.055 4.234-3.959 1.346-2.412 2.42-5.083 3.39-7.675 1.465-3.919 2.534-8.005 3.474-12.093 3.53-15.352 5.971-31.035 6.45-46.795a10.786 10.786 0 00-1.506-.17c3.306-1.732 1.365-9.393.987-13.449-.6-6.507-1.805-12.926-2.954-19.352 3.517 5.67 6.563 11.59 9.251 17.692 1.669 3.772 4.097 16.67 8.822 15.275z"
        clipRule="evenodd"
      ></path>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#8B5C29"
          d="M344.896 64.023c-10.586-2.683-21.34-4.852-32.218-5.944-3.754-.376-8.085-1.405-11.822-.577a6.396 6.396 0 00-2.045.867c-1.758 1.169-1.783-.296-3.205.207-13.035 4.608-5.815 31.45-1.985 41.102 7.386 18.604 19.141 29.937 36.638 39.081 7.814 4.083 26.408 14.05 34.899 5.86 4.78-4.613 2.025-15.822.454-21.222-2.982-10.246-5.159-21.467-9.427-31.251-1.937-4.438 1.361-12.023.185-17.208-1.324-5.842-5.733-9.561-11.474-10.915M252.396 135.868c5.285-14.197 4.46-29.328-5.913-41.184-9.701-11.087-30.975-18.371-44.574-11.865-27.973 13.386-30.544 59.187.206 71.455 20.089 8.014 41.117.914 50.281-18.406"
        ></path>
        <path
          fill="#FFCFCE"
          d="M261.079 202.803c-4.63 2.914-8.579 10.507-9.138 15.723-.493 4.613 3.3 6.144 2.666 10.439-1.112 7.562 9.921 13.669 15.446 8.295.914-.89 1.505-4.106 2.356-4.581 1.56-.872 12.371.877 13.812 1.941 3.241 2.397 1.829 6.979 5.562 9.222 3.966 2.384 5.573.869 8.248-1.464 2.364-2.063 11.479-9.555 11.826-12.465.194-1.631-3.925-7.062-4.466-9.034-.797-2.906-1.243-5.965-.042-8.832 1.721-4.101-7.705-13.75-10.337-16.302-3.638-3.526-7.746-4.422-12.798-3.197-3.31.801-6 2.785-9.034 4.023-4.874 1.989-9.777 3.041-14.101 6.232"
        ></path>
        <path
          fill="#8B5C29"
          d="M340.101 185.347c-7.081.137-14.23 2.595-19.621 7.242-5.235 4.514-12.03 7.58-13.645 15.063-.881 4.076-.372 11.217 1.301 15.392.963 2.403 2.852 4.76 3.639 7.034.407 1.176.069 3.245 1.117 5.407 1.52 3.14 7.578 8.193 8.021 11.226.269 1.832-2.565 3.249-1.405 6.024 2.402 5.749 14.526 1.8 19.724 3.467 7.402 2.373 14.341 7.032 12.241-4.209-1.354-7.25-4.838-20.134-2.275-27.32 1.679-4.706 6.977-8.806 8.975-13.782 5.376-13.406-4.653-24.622-18.072-25.544"
        ></path>
        <path
          fill="#FF9"
          d="M135.334 31.834c.991-3.922-3.088-11.286-8.021-8.665-6.319 3.357 5.678 13.714 8.021 8.665"
        ></path>
        <path
          fill="#8B5C29"
          d="M114.495 65.757c1.3-15.955-5.429-32.01-18.462-41.452-5.472-3.964-11.301-9.512-15.85-2.893-2.772 4.034-4.691 9.19-7.865 12.899-1.586 1.854-3.511 2.246-5.003 4.952-1.881 3.412-2.953 7.46-4.632 11.017-2.543 5.388-6.19 10.403-7.112 16.425-1.189 7.767.763 17.597 2.06 25.344 1.03 6.146-.091 12.935 5.01 17.45 10.297 9.112 25.246 2.709 33.576-5.488 4.451-4.379 7.485-10.846 10.958-15.063 5.297-6.431 6.237-14.748 7.32-23.191M74.591 44.876c.083.4.964.908.869 1.815-.413-.056-.828-.109-1.24-.165.063-.491.435-1.183.371-1.65"
        ></path>
        <path
          fill="#333"
          d="M74.798 44.876c0 .014-.57 1.197-.578 1.65.413.056.827.109 1.24.165.087-.832-.615-1.19-.662-1.815"
        ></path>
        <path
          fill="#FFCFCE"
          d="M19.141 34.517C7.066 36.25 31.886 52.612 34.979 54.078c5.216 2.473 19.166 7.157 24.397 2.187 6.351-6.034-9.626-15.332-14.142-17.042-5.449-2.065-10.451-.904-15.92-1.775-3.281-.524-6.243-3.313-10.173-2.931"
        ></path>
        <path
          fill="#FF9"
          d="M76.04 20.693c-4.19.121-11.178 9.245-5.087 10.936 3.368.935 11.966-9.565 5.087-10.936"
        ></path>
        <path
          fill="#333"
          d="M61.235 50.323c-.365 1.358-.733 2.498-.578 4.002 1.381-2.682 2.603-5.426 3.927-8.13a15.445 15.445 0 00-3.349 4.128M58.755 56.513c-.185.725-.351 1.438-.413 2.187 1.267-1.784.405-2.219.413-2.187M65.453 112.429h2.44c-2.233-.87-4.391-2.036-6.12-3.713.411 2.074 1.668 3.415 3.68 3.713"
        ></path>
        <path
          fill="#FFCFCE"
          d="M154.108 46.897c-3.438 4.144 1.139 7.122 5.043 5.653 3.494-1.316 6.265-3.985 10.008-5.487 9.965-3.999 22.841-10.602 28.325-20.346 1.496-2.66 3.266-6.725-.022-8.85-4.482-2.902-8.257-.033-12.447 1.567-13.219 5.05-26.785 12.953-30.907 27.463"
        ></path>
        <path
          fill="#FCC"
          d="M103.785 120.063c-9.007 2.48-14.407 2.813-20.406 11.43-6.177 8.873-9.562 21.179.392 28.146 2.469 1.728 5.642 2.469 8.021 4.166 1.955 1.394 2.51 3.029 4.384 4.746 3.279 3.007 6.524 3.702 10.917 4.252 4.996.625 9.802.414 14.804.081 3.376-.226 6.035 1.596 9.676.454-5.385-.361-25.495-8.54-16.127-14.608 9.571-6.198 23.176.688 20.344 12.216 7.996-7.277 17.447-11.397 14.534-25.358-4.026-19.298-29.155-27.999-46.539-25.525"
        ></path>
        <path
          fill="#F66"
          d="M113.172 162.773c2.449 6.476 20.625 16.57 22.949 6.396 3.835-16.79-25.205-12.145-22.949-6.396"
        ></path>
        <path
          fill="#8B5C29"
          d="M152.619 201.565c5.581 4.02 12.945 5.887 18.11 10.192 2.156 1.797 3.786 6.126 7.196 6.064 9.972-.18 2.479-20.496-1.116-24.594-7.592-8.652-17.569-6.634-27.348-3.762-9.116 2.678-3.997 10.485 3.158 12.1"
        ></path>
        <path
          fill="#666"
          d="M205.877 255.789c-2.495.338-4.574 1.683-6.203 3.549-1.151 1.318-1.784 3.146-2.497 4.704-.646 1.411-4.804-.604-6.341-1.032-6.326-1.771-18.548-4.271-24.613-.617-3.557 2.143-9.258 10.956-8.931 15.596.366 5.186 4.871 5.29 8.765 7.059 2.826 1.282 7.06.262 10.05.115 3.337-.161 7.018 1.454 10.501 1.495 7.962.092 14.561-.876 22.495.04 9.882 1.14 30.226 6.639 29.027-8.252-1.322-16.442-17.234-23.299-32.253-22.657M356.64 283.975c4.544-11.822-3.981-22.135-15.011-25.008-3.736-.974-7.658-1.345-11.494-.765-3.38.512-9.407 4.902-12.157 4.684-3.265-.26-8.928-5.543-13.046-6.396-5.325-1.101-8.394-.726-11.887 3.713-1.642 2.082-2.836 4.741-3.559 7.265-1.279 4.476-1.15 4.8 2.937 6.23 4.135 1.444 9.449 1.364 13.788 1.796 1.469.146 5.529-.399 6.515.473.362.32.293 3.862.931 4.829 3.763 5.729 5.965 6.676 13.119 7.313 10.103.9 20.3-.988 29.864-4.134"
        ></path>
        <path d="M385.378 149.899c-6.84-21.881-18.543-41.484-29.979-61.199-4.803 2.376 3.914 20.113 5.627 24.431 2.682 6.766 4.237 14.06 4.916 21.292.647 6.881 1.078 9.139-5.872 10.773-5.393 1.268-10.712.652-16.001-.828-28.375-7.934-52.56-35.226-54.086-65.077-.523-4.461-.364-9.466.619-13.865 1.562-6.981 5.483-5.462 12.021-5.414 11.096.082 22.026 1.676 32.887 3.844 6.317 1.491 11.606 3.366 17.032 6.948 2.323 1.534 4.379 3.352 6.496 5.143 3.811 3.227 4.307 3.343 9.717 3.343-21.977-26.133-57.616-24.129-88.692-23.772-40.706.466-81.562 4.637-121.077 14.446l-1.24-12.133c5.936 1.077 16.394-4.275 21.791-7.138 5.271-2.796 9.738-6.708 14.249-10.583 7.615-6.542 15.049-13.575 17.344-23.667.912-4.019 2.056-6.363-2.482-6.954-4.09-.533-8.274-.906-12.404-.846-7.709.112-15.879 1.375-23.114 4.085-12.695 4.754-22.423 14.161-28.574 26.122-4.014-3.385-3.972-4.314-5.479-8.995-.741-2.307-1.635-4.689-3.33-6.479-4.639-4.904-10.386-.96-14.551-3.976-5.481-3.969-12.193-7.046-18.859-8.321-9.603-1.838-15.375 2.825-23.817 6.438-3.682 1.576-10.073 2.624-10.685 7.467-.247 1.944-.756 12.218-2.195 11.248a51.48 51.48 0 00-9.78-5.18c-4.863-1.933-49.282-10.02-47.8-.806.801 4.994-2.46 9.55 1.281 14.588 2.636 3.551 7.258 5.963 10.983 8.094 10.11 5.785 21.033 11.295 32.972 10.23-.073 3.383-1.442 14.51 1.96 16.044-.505.033-1.015.09-1.465.09 1.148 13.396 3.408 26.604 7.713 39.368 1.979 5.869 4.371 11.518 7.049 17.098 2.007 4.185 1.509 12.568 6.166 14.086a29.83 29.83 0 01-1.576.057c3.389 7.904 6.161 15.118 14.929 17.413 4.218 1.104 4.895 1.508 8.558 4.087 2.507 1.763 5.241 3.043 8.167 3.94 2.739.838 12.661-.018 13.89 1.255 10.868 11.224 22.651 21.617 35.39 30.676 6.586 4.684 13.541 8.767 20.683 12.537.531.28 1.118.5 1.731.688-.141.003-.292.01-.427.01l5.375 2.56c-2.868 5.648-1.619 14.113-3.805 20.509-1.388 4.06-3.464 7.775-5.994 11.246-3.737 5.123-7.211 10.029-10.648 15.33-1.98 3.053-7.142 9.11-7.257 12.504-.192 5.642 5.105 4.625 9.931 5.105 5.069.504 10.119.94 15.21 1.125 10.066.365 19.946.446 29.994 1.231 7.483.584 32.574 4.897 31.203-7.646-.729-6.685-4.317-11.014-6.491-16.983-1.368-3.758-.295-3.1.702-7.057.4-1.584.668-3.124.91-4.744.711-4.76 8.272-37.306 16.747-27.359 3.09 3.626 8.553 28.651 17.656 14.753 5.108-7.798 6.249.271 8.332 4.436 2.378 4.753 11.009 5.621 9.861-1.65 2.774 3.105 5.961 7.105 10.627 5.035.005 4.545-7.786 8.835-10.006 12.936-1.442 2.666-4.708 9.077-3.391 12.236 2.093 5.022 11.759 3.164 16.135 3.38l9.289.457c1.687.084.481 1.541 1.289 2.642 1.643 2.24 2.063 4.686 4.279 6.726 3.831 3.527 10.416 3.466 15.237 3.548 7.033.12 14.452-.671 21.297-2.313 7.074-1.699 7.988-2.023 7.605-9.86-.107-2.221-.819-5.789-1.385-8.212-.612-2.629-1.523-5.266-3.058-7.51-2.6-3.801-2.792-6.667-3.041-11.39-.227-4.27-.268-8.562-.165-12.834.07-2.882 1.957-10.978.413-13.205-.749-1.082 1.788-3.884 2.481-4.994-.805 0-1.519-.046-2.166-.084 1.871-.229 2.611-1.055 4.234-3.959 1.346-2.412 2.42-5.083 3.39-7.675 1.465-3.919 2.534-8.005 3.474-12.093 3.53-15.352 5.971-31.035 6.45-46.795a10.786 10.786 0 00-1.506-.17c3.306-1.732 1.365-9.393.987-13.449-.6-6.507-1.805-12.926-2.954-19.352 3.517 5.67 6.563 11.59 9.251 17.693 1.669 3.771 4.097 16.669 8.822 15.274zM170.177 18.659c11.971-5.613 25.137-7.891 38.264-5.517-4.326 22.652-30.64 34.815-50.324 40.895-6.115-20.49 19.417-30.871 34.279-37.634-5.85-3.024-19.289 5.7-24.438 8.831-6.947 4.225-13.391 10.058-17.863 16.877-8.245-5.708 15.039-21.088 20.082-23.452zM79.098 21.56l-9.386 10.852c1.238-5.859 2.164-11.418 9.386-10.852zM39.155 34.559c-8.454-1.963-18.064-2.225-25.968 1.733.792 2.469 17.827 1.908 21.501 2.641 6.18 1.233 20.112 3.398 19.518 10.77-1.342 16.603-23.334 5.87-31.049.291-4.261-3.08-11.007-6.655-11.955-12.338-.215-1.286-.954-5.258.083-6.479 2.081-2.454 12.578-2.114 15.589-2.146 8.301-.084 16.856 1.661 24.85 3.796 3.064.819 5.993 1.74 8.643 3.55 5.505 3.76 1.886 5.458-1.695 10.151-1.372-6.683-13.752-10.63-19.517-11.969zm35.416 100.463c-5.441-3.969-8.028-12.979-9.241-19.168 4.512-1.818 10.671-1.024 16.043-2.56 5.136-1.468 9.813-4.674 13.935-7.984 8.436-6.774 13.288-16.027 16.913-26.018-2.81-.626-10.102 15.754-13.046 18.859-3.959 4.176-7.972 7.865-13.211 10.4-5.968 2.885-18.896 6.95-23.115 1.278-5.273-7.09-5.583-22.072-6.038-30.537-.608-11.676 1.255-23.028 7.733-32.972 3.91-6 8.596-11.565 12.911-17.272 1.566-2.071 3.101-4.169 4.732-6.188 3.74-4.627 5.031-1.959 10.122.736 19.788 10.478 24.427 36.009 17.637 55.697 7.062.894 4.575-26.335 3.577-30.496-3.399-14.168-13.174-25.895-26.525-31.94 10.29-5.49 20.398-2.02 29.333 4.273 6.938 4.887 18.579-.475 19.169 11.161-2.242-.405-3.894-2.678-5.624-4.251.742 3.13 2.716 3.838 4.673 5.902 3.585 3.779 6.918 8.218 11.165 11.843 9.867 8.423 9.239 20.957 7.815 33.508.349.108.659.184.954.247-2.422 1.427-1.824 6.19-2.319 9.575-.725 4.95-1.492 9.888-2.356 14.816-1.465 8.357-2.091 18.707-5.417 26.037-16.627-9.774-36.305-15.358-54.229-5.84-4.101 2.178-11.495 13.883-15.591 10.894zm10.709 25.875c-4.086-2.3-7.261-6.127-7.255-10.998-.334-8.682 5.305-16.845 11.741-22.14 7.958-6.546 19.07-4.648 28.61-3.308 9.078 1.279 17.708 3.098 23.762 10.486 2.117 2.586 3.555 5.574 4.61 8.729.814 2.438.733 4.791 1.894 5.886-.145.108-.291.212-.447.347-3.003 2.594.779 8.092-5.292 9.408-5.144 1.117-12.062-3.142-17.409-3.342-13.853-.521-26.791 12.489-40.214 4.932zm11.102 6.624c4.733-.698 9.296-2.316 13.357-4.869 1.769 3.257 4.21 6.07 7.07 8.418.668.418 1.242 1.04 1.902 1.485-7.949 1.687-15.836-.194-22.329-5.034zm16.004-5.986c6.139-2.356 21.307-3.906 23.982 4.086-.905 14.794-20.051 1.188-23.982-4.086zm68.557 53.648c-12.72-5.964-24.673-12.902-36.181-20.964 6.505-4.069 9.379-6.868 16.953-5.652 4.594.737 9.298 1.324 13.066 4.27 7.231 5.649 6.98 14.061 6.162 22.346zm4.177 68.831c-6.575 2.668-13.972.641-20.695-.227-8.524-1.097-4.718-7.908-2.44-13.969 1.856-4.938 6.06-5.803 9.613-8.707 7.637-6.241 11.775-19.168 13.107-28.516.376-2.64.521-5.341.621-8.005l12.82 2.888c5.143 6.012 7.142 13.791 6.491 21.583-.563 6.751-5.735 12.089-9.206 17.961-3.824 6.471-3.556 14.253-10.311 16.992zm125.378-9.138c-7.225-.502-14.448-1.006-21.673-1.51 1.73-5.836 2.637-14.611 9.181-16.298 4.167-1.076 10.303.854 14.141 2.229 1.233.015 2.624.621 3.887.744-.77 2.456-3.289 14.992-5.536 14.835zm-9.639-21.77c.576-1.274.262-2.459.495-3.713.386-2.076.329-.78 1.365-2.643 1.053-1.895 3.128-3.592 4.259-5.652 1.497-2.31 3.314-4.37 5.168-6.399 5.509 8.608 4.329 11.539 3.929 21.916-4.916-1.93-9.973-2.977-15.216-3.509zm55.409 28.336c0 6.06-25.632 6.154-31.054 5.792-14.737-.98-9.15-17.425-2.551-25.183 5.371-6.31 18.406-3.261 24.714.094 6.756 3.888 8.891 11.959 8.891 19.297zm-5.747-62.917c-.097-.604-.193-1.211-.291-1.815-.432.963-.671 2.73-.868 3.795.438 0 .831.001 1.205.004-.97.252-1.735.912-2.445 2.473-.816 1.803-.119 8.683-.247 11.101-.431 8.131.603 16.261 2.936 24.06-9.021-4.448-19.879-6.039-29.69-3.509.851-7.719-1.831-10.182-5.202-16.907-1.979-3.948-5.152-17.315-8.814-17.221.587 2.237 2.072 5.06 2.149 7.347.123 3.695.007 2.128-2.315 5.074-2.411 3.062-4.663 5.522-5.913 9.349-1.479 4.529-6.769 3.077-9.345.226-1.352-1.497-2.134-3.233-2.255-5.259-.205-3.495-5.326-3.386-8.579-3.737-3.642-.393-9.022-.882-11.62 1.156-1.11.87-1.195 3.212-2.645 4.209-3.612 2.485-7.325.441-9.202-2.971-2.447-4.449.415-8.235-.724-11.968-.521-1.709-3.02-3.062-5.605-3.633 1.589-.43 2.013-1.678 3.374-5.239 1.254-3.286 3.134-6.393 5.5-8.996 4.614-5.079 11.555-9.01 18.399-9.965 9.121-1.274 13.329-1.932 20.779 3.795 3.852 2.962 4.827 4.326 5.63 9.044.536 3.156.67 12.153 4.563 11.568-4.933-20.865 20.539-38.979 39.53-31.732 13.475 5.138 9.038 21.084 1.695 29.751zm15.208-60.897c-.28 4.36-.749 8.688-1.185 13.033-.837 8.365-2.401 16.638-4.018 24.879-14.528-22.053-40.922-9.149-52.846 7.922-6.834-11.294-18.682-12.146-30.643-9.762-7.959 1.588-15.838 4.511-22.675 8.935-4.563 2.95-6.45 12.897-8.956 17.87l.478.001c-.43.218-.773.506-.991.878-2.574 4.389-5.524 8.521-7.888 13.034-1.746 3.332-7.19 25.283-8.533 25.429-6.349.684.818 6.01 2.751 9.272 2.349 3.96 3.881 8.373 4.896 12.851 1.604 7.058-17.114 4.743-21.387 4.588-5.013-.183-10.127-.778-15.061-1.683-5.586-1.021-4.411-6.072-2.976-11.094 2.218-7.761 8.383-15.458 16.417-17.661-1.869-1.14-4.137-1.211-6.161-.373 2.479-7.886 2.046-15.883-1.654-23.315-1.575-3.164-5.049-9.736-8.187-11.471-.918-.507-2.032-.841-3.271-1.048-4.234-1.216-9.701-2.386-10.539-5.434-.628-2.283.927-6.813.68-9.511-.534-5.869-4.207-11.304-8.579-15.063-9.424-8.099-24.861-6.664-33.204 2.291-2.343-2.411-8.906-7.38-8.601-10.029.124-1.075 2.897-3.199 3.515-4.248 1.078-1.829 1.205-4.194 2.234-5.942 1.634-2.776 1.66-2.377 4.795-4.148 3.094-1.746 5.107-5.745 6.492-8.852.744-1.668 1.995-3.924 1.861-5.859-.058-.845-.194-2.127-.612-3.074.223-.042.445-.083.694-.145-.754-10.305-2.5-19.406-1.152-29.698 1.79-13.681 3.936-27.307 6.238-40.91-.215-.048-.4-.065-.597-.094.728-.657.934-1.94 1.213-3.623.517-3.113 3.079-2.286 5.935-2.768 5.996-1.013 11.819-2.537 17.701-4.059 10.752-2.781 22.284-3.38 33.309-4.458 24.461-2.39 49.033-3.583 73.602-4.146-1.598 3.818-6.045 16.984-1.651 19.068-.574.038-1.141.079-1.655.079.342 36.108 43.337 80.173 80.756 67.717-.273.891.144 1.984-.082 2.891.383.09.723.129 1.051.156-1.993 1.006-1.292 4.127-1.514 7.574zm9.766-68.267c-3.938-6.818-5.205-10.069-13.231-10.069 8.516 9.766 13.404 21.291 17.275 33.52 2.016 6.368 3.546 12.896 4.928 19.425.783 3.694 1.494 7.402 2.201 11.11 1.088 5.711.139 6.553 6.153 6.553-2.771-15.018-6.374-29.889-10.421-44.609-1.728-5.584-3.981-10.866-6.905-15.93zm40.813 122.48c-3.762-5.182-9.189-8.145-12.323-14.114-7.283-13.887-8.267-32.626-11.163-47.827h-4.962c3.558 21.168 2.766 48.272 21.46 62.684-13.62-2.696-23.694-14.35-20.696-28.269 1.248-5.791 1.766-36.708-6.388-34.415 2.022 7.875 3.919 15.841 4.549 23.974.469 6.038-2.285 10.755-2.151 16.716.217 9.711 7.6 18.039 16.334 21.581 3.613 1.466 7.59 2.239 11.336 3.253 1.943.527 3.643 1.643 5.308.42 2.802-2.057.031-2.164-1.304-4.003zM191.406 91.095c-24.027 22.811-12.302 61.462 19.724 68.068 23.492 4.846 42.254-12.996 45.732-35.179 3.711-34.084-40.4-56.677-65.456-32.889zm46.062 59.979c-28.095 15.379-62.182-6.728-55.759-39.43 5.321-27.089 35.879-38.29 57.581-21.045 18.419 14.134 20.258 48.39-1.822 60.475zm-93.573-76.941c6.898-.489 5.475-17.049-3.144-14.855-3.948 3.503-4.497 15.398 3.144 14.855zM73.144 60.432c-9.984 3.134-4.533 19.017 2.813 14.608 5.758-3.457 2.879-12.985-2.813-14.608zm21.875 75.725c-.289 3.143 2.949 3.516 5.086 2.021-1.41 4.4-4.73 7.208-9.303 7.883 5.048 5.382 11.499-2.296 12.404-7.304 1.036-5.737-4.713-8.839-8.187-2.6zm47.056 11.266c-2.689-.699-5.263-2.033-7.236-4.003-2.973-2.964-1.429-3.948-1.902-7.8-5.16-5.627-5.246 3.311-3.101 6.686 2.611 4.107 7.416 6.835 12.239 5.117zm33.162 113.193c-1.703 3.086 18.737 4.675 20.22 4.747-.008-3.55-18.293-8.239-20.22-4.747z"></path>
      </g>
    </svg>
  );
}

export default Icon;
