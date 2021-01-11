import './App.scss';

function App() {
  return (
    <div className="container">
    {/*Header*/}
    <header className="header">
      <div className="header-logo">
        <svg id="logo" width={41} height={22} viewBox="0 0 41 22" fill="none">
          <path d="M33.7857 18.6786C33.739 18.6552 33.6903 18.6252 33.6399 18.5889C31.7025 17.4062 27.6816 15.275 25.9746 15.5536C24.9235 17.4362 23.9189 19.5535 23.2857 21C18.4456 18.9651 7.21239 12.1163 1 1L39.268 6.25659C39.5365 6.25356 39.7837 6.28434 40 6.35714L39.268 6.25659C37.6925 6.27436 35.3842 7.45629 34.2857 8.14286C35.2571 10.2857 34.3571 16.0595 33.7857 18.6786Z" fill="white" />
          <path d="M1 1L40 6.35714C38.5143 5.85714 35.5714 7.33929 34.2857 8.14286M1 1L29.3571 11.3571M1 1L34.2857 8.14286M1 1C7.21239 12.1163 18.4456 18.9651 23.2857 21C23.9189 19.5535 24.9235 17.4362 25.9746 15.5536M29.3571 11.3571C30.3571 13.5595 32.6429 18.1071 33.7857 18.6786M29.3571 11.3571C28.5217 11.4345 27.2158 13.3304 25.9746 15.5536M33.7857 18.6786C34.3571 16.0595 35.2571 10.2857 34.2857 8.14286M33.7857 18.6786C31.9116 17.5179 27.7257 15.2679 25.9746 15.5536" stroke="#FF8989" />
        </svg>
        <span className="header-letter">
          Letter
        </span>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">Plugins</li>
          <li className="menu-item">Pricing</li>
          <li className="menu-item">Log in</li>
          <li className="menu-item">Free Trial</li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <section className="hero">
        <div className="hero_container">
          <svg id="waves" width={1440} height={488} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="wave1" d="M506.329 191.177c-57.905-82.817-183.788-78.873-229.105 0C243.116 250.54 84.696 291.744 0 259.173V476.5h1440V78.14c-57.7-78.365-229.98-132.117-338.67 12.051-92.63 122.865-244.276 240.635-295.048 105.165-42.957-114.62-162.964-90.264-198.894-34.179-29.53 46.095-43.153 112.818-101.059 30z" fill="#FFD6C0" />
            <path id="wave3" d="M190.15 279.006C111.12 196.129 4.048 175.08-74.981 240.856c-41.608 34.63-85.335 74.729-136.019 82.862V488h1651V369.102c-58.99 27.431-112.8 15.294-146.09-15.887-108.04-101.179-248.32-155.257-384.847-74.209-50.222 29.813-94.325 82.877-152.96 0-58.635-82.877-186.102-78.931-231.99 0-45.888 78.93-254.934 82.877-333.963 0z" fill="#FFDBC8" />
            <path id="wave5" d="M407.012 322.649C326.015 201.536 101.922 394.979 0 431.839V476.5h1440V336.782c-7.54 6.912-13.88 15.072-18.5 24.043-23.75 46.161-74.92 82.936-121.49 0-46.57-82.935-147.82-78.986-184.27 0-36.45 78.987-202.494 82.936-265.267 0-62.773-82.935-147.82-103.998-210.593-38.176-62.773 65.822-131.621 151.391-232.868 0z" fill="#FED6C1" />
            <path id="wave2" className="hide" d="M1102 101c119.5-73 182.83-77.581 233.5 27 23.5 48.5 19.8 90.744 104.5 58.173V403.5H0V87C57.7 8.634 387.615-45.786 535 58.5c138.5 98 68 105 195.919 15.5C857.924-14.86 903.5 51.655 966 87c72.5 41 49.76 66.68 136 14z" fill="#FFD6C0" />
            <path id="wave4" className="hide" d="M73 206.006C-92 142.5-101.471 113.724-180.5 179.5c-41.608 34.63-55.816 60.366-106.5 68.5l-9 167h1736V296.102c-58.99 27.431-231.2-41.42-264.5-72.602-108.04-101.178-219.469-98.542-356-17.494-50.223 29.813-193.257 53.561-279.5 0-109.5-68.006-144.14-42.396-225 0-133.5 69.994-135.125 41.134-242 0z" fill="#FFDBC8" />
            <path id="wave6" className="hide" d="M821.988 322.649c80.997-121.113 305.092 72.33 407.012 109.19V476.5H-211V336.782c7.538 6.912 13.88 15.072 18.495 24.043 23.751 46.161 74.923 82.936 121.496 0 46.574-82.935 147.82-78.986 184.269 0 36.449 78.987 202.494 82.936 265.267 0 62.773-82.935 147.82-103.998 210.593-38.176 62.773 65.822 131.621 151.391 232.868 0z" fill="#FED6C1" />
          </svg>
          <img className="lamp" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group.png" alt="" />
          <div className="hero_cta">
            <h2 className="cta_title">Email for Designers</h2>
            <p className="cta_description">
              Dynamic email tool for creators that doesn’t cost a leg. Works with Sketch, Figma and XD. Easily import your content and send with your favorite API.
            </p>
            <button className="btn cta_btn">
              Start Free Trial</button>
          </div>
          <div className="container_sun">
            <img className="sun" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/sun.png" alt="" />
          </div>
          <svg id="planes" viewBox="0 0 1856 964" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="fly">
              <g className="fly_right">
                <path d="M1288.96 292.841c.13-.077.27-.175.42-.29 5.6-3.829 17.28-10.813 22.43-10.255 3.43 5.437 6.77 11.581 8.89 15.787 14.15-6.827 46.63-29.002 63.44-63.083l-113.53 21.731c-.81.034-1.54.165-2.17.416l2.17-.416c4.71-.198 11.79 2.954 15.19 4.824-2.57 6.533 1.04 23.579 3.16 31.286z" fill="#fff" />
                <path d="M1384.14 235l-115.7 22.147c4.36-1.725 13.39 2.22 17.36 4.408M1384.14 235l-83.11 35.34m83.11-35.34l-98.34 26.555M1384.14 235c-16.81 34.081-49.29 56.256-63.44 63.083-2.12-4.206-5.46-10.35-8.89-15.787m-10.78-11.956c-2.64 6.716-8.75 20.618-12.07 22.501m12.07-22.501c2.51.098 6.71 5.535 10.78 11.956m-22.85 10.545c-2.12-7.707-5.73-24.753-3.16-31.286m3.16 31.286c5.41-3.754 17.57-11.117 22.85-10.545" stroke="#FF9E99" />
              </g>
              <g className="fly_right">
                <path d="M1146.01 423.145c-27.71 39.122-92.06 122.57-127.84 143.387-5.96-11.363-15.94-31.971-22.837-50.269-4.539 3.714-14.271 6.934-18.57 8.08-4.36-6.571-7.1-16.573-8.761-27.016-4.693-2.454-20.49 9.225-27.801 15.37-1.197-6.965 16.578-37.618 25.614-52.073 11.323-11.724 124.845-29.871 180.195-37.479z" fill="#fff" />
                <path d="M987.911 489.832c27.779-16.59 98.289-53.152 158.099-66.687m-158.099 66.687c.696 6.761 3.58 16.237 7.422 26.431m-7.422-26.431c-6.876 5.418-10.297 25.265-11.148 34.511m169.247-101.198c-27.71 39.122-92.06 122.57-127.84 143.387-5.96-11.363-15.94-31.971-22.837-50.269m150.677-93.118c-55.35 7.608-168.872 25.755-180.195 37.479m0 0c-9.036 14.455-26.811 45.108-25.614 52.073 7.311-6.145 23.108-17.824 27.801-15.37m-2.187-36.703c-.316 8.465.002 22.966 2.187 36.703m8.761 27.016c4.299-1.146 14.031-4.366 18.57-8.08m-18.57 8.08c-4.36-6.571-7.1-16.573-8.761-27.016" stroke="#FF8989" />
              </g>
            </g>
          </svg>
        </div>
      </section>
      {/*SECTION TWO*/}
      <section className="two">
        <div className="news_container">
          <figure className="large_plane"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group%203.png" alt="" /></figure>
          <figure className="luggage">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/Group%205-1.png" alt="" />
          </figure>
          <article className="news news_1">
            <h3>
              Newsletter in minutes
            </h3>
            <p>
              Emails are traditionally painfully slow to work with. We’ve made a drag and drop tool that automatically fetches data and easily copy or send HTML using your favorite API
            </p>
          </article>
          <svg className="stairs" viewBox="0 0 200 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.064 133.773c3.02.176 13.05 7.626 17.687 11.329l114.202-56.55c-.336-3.619-11.904-9.533-17.645-12.037-8.082.57-79.53 38.41-114.244 57.258zM43.276 110.899c1.304-.042 18.497 9.601 19.483 10.96 35.794-18.43 108.749-55.59 114.216-56.786-.387-2.39-12.442-8.261-18.422-10.898-5.345.73-79.079 38.12-115.277 56.724z" fill="#FFF3EE" />
            <path d="M79.056 157.016c1.116-2.223 2.817-7.719.695-11.914-4.638-3.703-14.667-11.153-17.687-11.329-.715 2.799-2.01 8.902-1.465 10.923 5.602 4.074 17.136 12.243 18.457 12.32zM42.63 121.988c.472 1.637 13.153 8.539 19.434 11.785 1.503-3.037 1.09-9.208.695-11.914-.986-1.359-18.179-11.002-19.483-10.96-1.305.043-1.238 9.042-.647 11.089zM43.276 110.899c-.305-2.898-.608-9.078.618-10.616.645-2.52-12.17-9.666-18.658-12.924-1.687 1.322-1.161 8.415-.688 11.796.068 2.087 12.513 8.699 18.728 11.744zM6.808 76.579c.45 2.015 12.473 8.026 18.428 10.78.856-3.185 2.185-9.863.646-11.089-1.538-1.226-12.917-7.854-18.414-11.015-2.79 1.14-1.224 8.806-.66 11.324z" fill="#FFF3EE" />
            <path d="M79.75 145.102c2.123 4.195.422 9.691-.694 11.914 2.388 1.273 77.134-37.249 114.209-56.669 1.687-1.322 1.161-8.415.688-11.796L79.75 145.102zM62.064 133.773c34.714-18.848 106.162-56.688 114.244-57.258 1.969-2.915 1.265-8.843.667-11.442-5.467 1.196-78.422 38.356-114.216 56.786.394 2.706.808 8.877-.695 11.914zM43.276 110.899c36.198-18.604 109.932-55.994 115.277-56.724 1.437-1.905 1.066-8.815.702-12.032-6.634.087-113.828 56.217-115.36 58.14-1.227 1.538-.924 7.718-.62 10.616zM25.236 87.359c36.393-19.224 110.423-57.505 115.403-56.836 2.491-2.127 1.455-8.043.625-10.735-4.247-.247-78.69 37.552-115.382 56.482 1.539 1.226.21 7.904-.646 11.089z" fill="#FFF3EE" />
            <path d="M79.056 157.016c1.116-2.223 2.817-7.719.695-11.914m-.695 11.914c-1.321-.077-12.855-8.246-18.457-12.32-.545-2.021.75-8.124 1.465-10.923m16.992 23.243c2.388 1.273 77.134-37.249 114.209-56.669 1.687-1.322 1.161-8.415.688-11.796M79.75 145.102c-4.637-3.703-14.666-11.153-17.686-11.329m17.687 11.329l114.202-56.55M62.064 133.772c34.714-18.848 106.162-56.688 114.244-57.258M62.064 133.773c-6.281-3.246-18.962-10.148-19.435-11.785-.59-2.047-.658-11.046.647-11.089m18.788 22.874c1.503-3.037 1.09-9.208.695-11.914m131.194-33.308c-.336-3.618-11.904-9.532-17.645-12.036m0 0c1.969-2.915 1.265-8.843.667-11.442m-133.7 45.826c1.305-.042 18.498 9.601 19.484 10.96m-19.483-10.96c36.198-18.604 109.932-55.994 115.277-56.724M43.276 110.899c-.305-2.898-.608-9.078.618-10.616m-.618 10.616c-6.215-3.045-18.66-9.657-18.728-11.744-.473-3.38-.999-10.474.688-11.796m37.523 34.5c35.794-18.43 108.749-55.59 114.216-56.786m0 0c-.387-2.39-12.442-8.261-18.422-10.898m0 0c1.437-1.905 1.066-8.815.702-12.032m-115.36 58.14c1.532-1.923 108.726-58.053 115.36-58.14m-115.36 58.14c.643-2.52-12.171-9.666-18.66-12.924m134.02-45.216c-.142-1.523-12.47-8.381-18.616-11.62M25.236 87.36c36.393-19.224 110.423-57.505 115.403-56.836M25.236 87.36c-5.955-2.754-17.978-8.765-18.428-10.78-.564-2.518-2.13-10.185.66-11.324m17.768 22.104c.856-3.185 2.185-9.863.646-11.089M140.64 30.523c2.491-2.127 1.455-8.043.625-10.735M7.468 65.255c5.497 3.16 16.876 9.79 18.414 11.015M7.468 65.255C44.152 45.77 118.458 6.955 122.21 7.552c6.079 2.761 18.4 9.074 19.053 12.236M25.882 76.27C62.573 57.34 137.017 19.541 141.264 19.79" stroke="#FF9E99" strokeWidth="1.1" />
            <path d="M62.064 133.773c3.02.176 13.05 7.626 17.687 11.329l114.202-56.55c-.336-3.619-11.904-9.533-17.645-12.037-8.082.57-79.53 38.41-114.244 57.258zM43.276 110.899c1.304-.042 18.497 9.601 19.483 10.96 35.794-18.43 108.749-55.59 114.216-56.786-.387-2.39-12.442-8.261-18.422-10.898-5.345.73-79.079 38.12-115.277 56.724z" fill="#fff" />
            <path d="M79.056 157.016c1.116-2.223 2.817-7.719.695-11.914-4.638-3.703-14.667-11.153-17.687-11.329-.715 2.799-2.01 8.902-1.465 10.923 5.602 4.074 17.136 12.243 18.457 12.32zM42.63 121.988c.472 1.637 13.153 8.539 19.434 11.785 1.503-3.037 1.09-9.208.695-11.914-.986-1.359-18.179-11.002-19.483-10.96-1.305.043-1.238 9.042-.647 11.089zM43.276 110.899c-.305-2.898-.608-9.078.618-10.616.645-2.52-12.17-9.666-18.658-12.924-1.687 1.322-1.161 8.415-.688 11.796.068 2.087 12.513 8.699 18.728 11.744zM6.808 76.579c.45 2.015 12.473 8.026 18.428 10.78.856-3.185 2.185-9.863.646-11.089-1.538-1.226-12.917-7.854-18.414-11.015-2.79 1.14-1.224 8.806-.66 11.324z" fill="#fff" />
            <path d="M79.056 157.016c1.116-2.223 2.817-7.719.695-11.914m-.695 11.914c-1.321-.077-12.855-8.246-18.457-12.32-.545-2.021.75-8.124 1.465-10.923m16.992 23.243c2.388 1.273 77.134-37.249 114.209-56.669 1.687-1.322 1.161-8.415.688-11.796M79.75 145.102c-4.637-3.703-14.666-11.153-17.686-11.329m17.687 11.329l114.202-56.55M62.064 133.772c34.714-18.848 106.162-56.688 114.244-57.258M62.064 133.773c-6.281-3.246-18.962-10.148-19.435-11.785-.59-2.047-.658-11.046.647-11.089m18.788 22.874c1.503-3.037 1.09-9.208.695-11.914m131.194-33.308c-.336-3.618-11.904-9.532-17.645-12.036m0 0c1.969-2.915 1.265-8.843.667-11.442m-133.7 45.826c1.305-.042 18.498 9.601 19.484 10.96m-19.483-10.96c36.198-18.604 109.932-55.994 115.277-56.724M43.276 110.899c-.305-2.898-.608-9.078.618-10.616m-.618 10.616c-6.215-3.045-18.66-9.657-18.728-11.744-.473-3.38-.999-10.474.688-11.796m37.523 34.5c35.794-18.43 108.749-55.59 114.216-56.786m0 0c-.387-2.39-12.442-8.261-18.422-10.898m0 0c1.437-1.905 1.066-8.815.702-12.032m-115.36 58.14c1.532-1.923 108.726-58.053 115.36-58.14m-115.36 58.14c.643-2.52-12.171-9.666-18.66-12.924m134.02-45.216c-.142-1.523-12.47-8.381-18.616-11.62M25.236 87.36c36.393-19.224 110.423-57.505 115.403-56.836M25.236 87.36c-5.955-2.754-17.978-8.765-18.428-10.78-.564-2.518-2.13-10.185.66-11.324m17.768 22.104c.856-3.185 2.185-9.863.646-11.089M140.64 30.523c2.491-2.127 1.455-8.043.625-10.735M7.468 65.255c5.497 3.16 16.876 9.79 18.414 11.015M7.468 65.255C44.152 45.77 118.458 6.955 122.21 7.552c6.079 2.761 18.4 9.074 19.053 12.236M25.882 76.27C62.573 57.34 137.017 19.541 141.264 19.79" stroke="#FF9E99" strokeWidth="1.1" />
          </svg>
          <article className=" news news_2">
            <h3>
              Works with Sketch, Figma and XD
            </h3>
            <p>
              Ever wanted to export your designs directly from your favorite design tool to your Email service? Now you can. From layers to HTML, to people’s inbox.
            </p>
          </article>
          {/* girl and paper planes*/}
          <div className="fly_container">
            <svg className="fly" id="fly" width={1233} height={1015} viewBox="0 0 1233 1015" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path id="ray2" className="ray" mask="url(#mask0)" d="M1144 314.998L280.65 645.361c-10.388 2.407-10.388-3.088-15.063-4.792-3.74-1.363-5.252 2.627-5.54 4.792-.693 6.113 6.287 8.025 20.603 10.136L1144 798.008v-483.01z" fill="url(#paint0_linear)" />
              <mask id="mask0" maskUnits="userSpaceOnUse" x={260} y={314} width={884} height={485}>
                <path d="M1144 314.998L280.65 645.361c-10.388 2.407-10.388-3.088-15.063-4.792-3.74-1.363-5.252 2.627-5.54 4.792-.693 6.113 6.287 8.025 20.603 10.136L1144 798.008v-483.01z" fill="url(#paint1_linear)" />
              </mask>
              <g>
                <path transform="rotate(-90 278.226 925.595)" fill="url(#pattern0)" fillOpacity=".8" d="M278.226 925.595h595.789v852.103H278.226z" />
              </g>
              <path d="M298.546 947.262L481 853.435l-161.227-81.173L118 860.598l180.546 86.664z" fill="url(#pattern1)" />
              <path d="M387.124 841.334l-146.349 69.975-17.966-7.161-11.604-4.626c-19.236-24.513-27.406-48.76-30.007-68.303l-29.131 12.209c-8.555 7.443-16.096 12.276-18.341 13.623-4.491 2.694-7.112 1.123-7.86 0-1.797 1.497-3.993-.624-4.866-1.871l51.466-62.491c46.1-24.573 140.323-73.493 148.408-72.595 8.085.899 16.095 7.859 19.089 11.226l47.161 110.014z" fill="#fff" />
              <path d="M240.775 911.309l146.349-69.975-47.161-110.014m-99.188 179.989l-47.162-108.142m47.162 108.142l-17.967-7.161M339.963 731.32c-2.994-3.367-11.004-10.327-19.089-11.226-8.085-.898-102.308 48.022-148.408 72.595m167.497-61.369l-146.35 71.847m-21.147-10.478L121 855.18c.873 1.247 3.069 3.368 4.866 1.871m46.6-64.362a42.66 42.66 0 0 1 5.053.911m16.094 9.567c-1.916-3.672-6.222-6.229-10.667-7.912m-57.08 61.796c1.796-1.497 35.184-42.925 51.653-63.451m-51.653 63.451c.748 1.123 3.369 2.694 7.86 0 2.245-1.347 9.786-6.18 18.341-13.623m25.452-49.828c1.726.413 3.588.959 5.427 1.655m0 0c2.371 26.613 13.662 85.651 39.862 108.893m-39.862-108.893c-2.92 19.955-18.041 37.002-30.879 48.173m30.879-48.173c-2.295 7.282-3.864 20.066-1.748 35.964m41.61 72.929l-11.603-4.626c-19.236-24.513-27.406-48.76-30.007-68.303m-29.131 12.209l29.131-12.209" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M299.5 820.261l1.5-11 1.1-5.985c2.4-8.515 9.3-4.95 9.3 0s-1.05 24.3-2.85 24.3c-1.44 0-9.05-5.98-9.05-7.315z" fill="#FFE6D9" />
              <path d="M309.597 825.261l3.003-18.291c3.15-7.19 7.761-6.052 9.3 0 1.6 6.291-1.947 30.854-3.4 29.791-2.55-1.865-8.903-8.114-8.903-11.5z" fill="#FFE6D9" />
              <path d="M320.634 837.38c-.453-1.534-.872-3.932-1.025-4.94-5.269-1.633-9.128-10.261-10.392-10.848-1.265-.587-3.08.553-3.704 1.668-.72.233-1.716 1.519-2.081 2.086-.456.709.387 2.576 1.512 4.019 1.124 1.442 5.687 6.416 7.033 9.023 1.345 2.607 8.082 10.525 9.791 10.492 1.368-.026 2.11-1.211 2.31-1.8 1.071-.047.277-2.315-.153-3.303-.613-1.408-2.725-4.48-3.291-6.397z" fill="#fff" />
              <path d="M305.513 823.26c-.624 1.115.773 2.857 1.841 4.226 1.067 1.37 4.25 4.314 5.26 6.75 1.011 2.435 4.523 7.874 8.901 11.42 1.309 1.06 2.106 1.444 2.563 1.424m-18.565-23.82c.624-1.115 2.439-2.255 3.704-1.668 1.264.587 5.123 9.215 10.392 10.848.153 1.008.572 3.406 1.025 4.94.566 1.917 2.678 4.989 3.291 6.397.43.988 1.224 3.256.153 3.303m-18.565-23.82c-.72.233-1.716 1.519-2.081 2.086-.456.709.387 2.576 1.512 4.019 1.124 1.442 5.687 6.416 7.033 9.023 1.345 2.607 8.082 10.525 9.791 10.492 1.368-.026 2.11-1.211 2.31-1.8" stroke="#FF8989" strokeWidth="1.1" />
              <path fillRule="evenodd" clipRule="evenodd" d="M292.568 820.036c.471-1.212 1.518-2.339 2.847-3.104-1.318 1.438 2.594 8.095 5.444 12.515 2.849 4.42 11.598 10.806 13.108 10.216-.166.899-.97 2.783-2.868 3.126-2.372.43-11.694-7.49-18.531-22.753z" fill="#fff" />
              <path d="M310.148 824.688c.18 1.426.59 4.718.79 6.482.251 2.205 4.538 7.902 3.029 8.493-1.51.59-10.259-5.796-13.108-10.216-2.85-4.42-6.762-11.077-5.444-12.515 1.055-1.15 3.139-1.281 4.05-1.202 1.337 2.305 5.346 7.324 10.683 8.958z" fill="#fff" />
              <path d="M313.967 839.663c1.509-.591-2.778-6.288-3.029-8.493-.2-1.764-.61-5.056-.79-6.482-5.337-1.634-9.346-6.653-10.683-8.958-.911-.079-2.995.052-4.05 1.202m18.552 22.731c-1.51.59-10.259-5.796-13.108-10.216-2.85-4.42-6.762-11.077-5.444-12.515m18.552 22.731c-.166.899-.97 2.783-2.868 3.126-2.372.43-11.694-7.49-18.531-22.753.471-1.212 1.518-2.339 2.847-3.104" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M244.247 662.02c-.957-.438-6.553-4.971-8.909-10.38-2.278-8.305 5.628-13.5 9.866-15.059 13.695-6.653 14.726 9.649 15.168 11.331.442 1.681-1.105 4.751-1.473 5.336-.368.585-1.251 3.728-1.472 5.629-.221 1.901-1.767 3.947-4.565 4.532-2.798.585-7.658-.95-8.615-1.389z" fill="#FFE6D9" />
              <path d="M226.415 646.795a3.96 3.96 0 0 1-.074-.993c.221-4.131 3.023-11.359 10.47-14.088.934-.91 3.628-3.201 6.931-5.089 4.129-2.36 7.447-3.098 9.659-1.549 1.769 1.239 2.458 3.312 2.58 4.194 3.82.39 9.105 2.307 10.47 4.288 1.475 2.139 1.844 3.172 1.696 4.057-.147.885-1.622 2.508-2.728 2.508s-13.345-8.335-21.677-2.73c-1.995 1.343-3.589 2.524-4.844 3.611-3.988 3.452-4.568 5.946-3.783 9.592.826 3.836-1.475 3.024-2.728 2.139v9.143c0 4.13-10.396 10.99-18.359 11.727-6.371.59-9.34-10.326-10.028-15.858 6.96 1.652 14.206-3.54 16.958-6.343a36.131 36.131 0 0 1 5.457-4.609z" fill="#fff" />
              <path d="M232.387 652.735c-2.089-.934-6.223-3.629-6.046-6.933.221-4.131 3.023-11.359 10.47-14.088m-4.424 21.021c1.253.885 3.554 1.697 2.728-2.139-.785-3.646-.205-6.14 3.783-9.592m-6.511 11.731v9.143c0 4.13-10.396 10.99-18.359 11.727-6.371.59-9.34-10.326-10.028-15.858 6.96 1.652 14.206-3.54 16.958-6.343 6.312-6.55 14.59-9.662 17.94-10.4m-2.087-9.29c7.447-2.729 14.452-2.655 18.286-2.508.283.011.579.033.884.064m-19.17 2.444c.934-.91 3.628-3.201 6.931-5.089 4.129-2.36 7.447-3.098 9.659-1.549 1.769 1.239 2.458 3.312 2.58 4.194m0 0c3.82.39 9.105 2.307 10.47 4.288 1.475 2.139 1.844 3.172 1.696 4.057-.147.885-1.622 2.508-2.728 2.508s-13.345-8.335-21.677-2.73c-1.995 1.343-3.589 2.524-4.844 3.611" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M292.352 797.572c0-4.791 2.32-24.992 6.569-34.124-17.037.755-52.471 1.359-57.913-2.264-6.803-4.528-13.767-15.202-13.605-23.126.129-6.34 3.077-15.148 4.535-18.76 8.476-.809 26.821-1.941 32.393 0 1.512 2.587 5.475 8.15 9.232 9.703 4.697 1.941 21.542 3.187 29.154 10.731 1.437.172 2.493.318 3.078.428 5.125.968 12.976 1.7 14.432 10.997 3.179 1.402 9.571 5.369 9.701 10.027.162 5.822 0 45.121 0 48.84 0 3.72-16.035.809-18.302-.97v-4.485c-6.942-.284-19.274-2.793-19.274-6.997z" fill="#fff" />
              <path d="M246.839 734.5c15.501 1.325 45.537 3.989 55.878 5.232m7.613 14.336c-1.026.216-4.243 1.65-8.908 5.66-.896.77-1.73 2.063-2.501 3.72m0 0c-4.249 9.132-6.569 29.333-6.569 34.124 0 4.204 12.332 6.713 19.274 6.997m-12.705-41.121c-17.037.755-52.471 1.359-57.913-2.264-6.803-4.528-13.767-15.202-13.605-23.126.129-6.34 3.077-15.148 4.535-18.76 8.476-.809 26.821-1.941 32.393 0 1.512 2.587 5.475 8.15 9.232 9.703 4.697 1.941 21.542 3.187 29.154 10.731m0 0c1.437.172 2.493.318 3.078.428 5.125.968 12.976 1.7 14.432 10.997m0 0c.246 1.573.309 3.392.145 5.499-1.134 14.555-2.753 45.606-4.211 47.385-.375.457-2.132.626-4.535.528m8.601-53.412c3.179 1.402 9.571 5.369 9.701 10.027.162 5.822 0 45.121 0 48.84 0 3.72-16.035.809-18.302-.97v-4.485" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M268.197 670.78c-.831-3.477-6.224-5.465-8.816-6.025-1.17-.284-3.707-.719-4.5-.191-.992.659.211 2.484 2.425 10.141 1.771 6.125.606 8.675-.198 9.184-4.811-6.965-12.591-18.643-15.255-20.329-3.33-2.109-3.204-1.981-8.504-.713-1.631.39-6.002.538-6.549 5.263-.437 3.78 1.953 17.912 3.844 23.481 1.398 5.845-1.562 20.707-.489 23.989 1.072 3.282 12.408 12.032 22.176 12.019 9.767-.012 16.501-5.9 16.023-7.898-.478-1.999-4.416-10.457-1.097-16.005 3.319-5.547 1.98-28.57.94-32.916z" fill="#fff" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M256.682 666.559a5.965 5.965 0 0 1-.403-.519c.518.553 1.111 1.1 1.718 1.552a1.1 1.1 0 0 0 .686.234.953.953 0 0 0 .23-.031.23.23 0 0 1-.019.014c-.139.108-.205.117-.205.118h.002c-.461 0-.746-.123-1.009-.327-.231-.179-.433-.406-.706-.713l-.294-.328zm5.139-12.378l-.045.175c.15-1.171.61-2.582 1.204-3.669a4.33 4.33 0 0 0 .139-.281l-.007.021c-.167.486-.342.973-.51 1.442-.317.882-.61 1.698-.781 2.312zm2.29-7.48a13.935 13.935 0 0 1-.422 1.909 26.399 26.399 0 0 0 .371-1.949l.051.04zm5.692-9.08c1.091-.128 2.27-.246 3.375-.345-.844.955-1.349 2.327-1.349 3.788 0 2.696 1.736 5.119 4.137 5.119.544 0 1.053-.124 1.516-.348a1.526 1.526 0 0 1-.404.246c-.89.358-3.173.843-5.649.97-1.229.064-2.483.038-3.615-.13-1.139-.168-2.114-.472-2.817-.938a2.791 2.791 0 0 1-.86-.858c-.942-1.538-.773-3.071-.213-4.335.574-1.293 1.526-2.225 1.992-2.489.043-.025.17-.074.417-.137.232-.06.531-.121.885-.183a48.767 48.767 0 0 1 2.585-.36zm3.126 3.443c0-2.169 1.273-3.781 2.697-3.993a2.25 2.25 0 0 1 .34-.025c1.561 0 3.037 1.668 3.037 4.018 0 .154-.006.305-.019.454-.182 2.121-1.56 3.565-3.018 3.565-1.56 0-3.037-1.668-3.037-4.019zM256.088 638.38c0-2.618 1.835-4.607 3.946-4.607 2.11 0 3.945 1.989 3.945 4.607a5.083 5.083 0 0 1-.862 2.871c-.736 1.076-1.856 1.735-3.083 1.735-2.111 0-3.946-1.989-3.946-4.606zm-1.1 0c0 2.947 2.008 5.482 4.685 5.692-.964.336-2.156.553-3.612.535-1.921-.023-3.12-.392-3.846-.837a2.687 2.687 0 0 1-.685-.582c-.388-.473-.442-.953-.388-1.248l.014-.08-.009-.081c-.479-4.174 2.814-7.018 3.788-7.842.069-.058.28-.151.7-.221a9.723 9.723 0 0 1 1.405-.104l.216-.001c-1.381 1.033-2.268 2.81-2.268 4.769z" fill="#fff" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M244.473 637.091c-.357 4.479-3.295 9.627-4.682 11.862-1.011.825 2.997 4.617 5.127 6.41.248.049 1.056.044 2.304-.369 1.561-.515 2.675-2.357 3.195-5.157.521-2.8 4.236-3.094 4.905-3.094.669 0 3.047.589 3.493-.295.446-.884-.298-1.547-1.189-1.989-.892-.442-3.642-.074-4.533 0-.892.073-.52-1.548 0-2.726.52-1.179.599-4.322 1.114-5.6.595-1.473 3.047-2.063 3.047-3.021 0-.679-4.681.074-5.87.811-1.189.736-4.236.884-5.202 1.105-.773.177-1.657 1.4-1.709 2.063z" fill="#fff" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M212.851 688.731c-4.915-2.346-5.79-7.641-4.376-12.937.581-2.177 2.073-3.629 3.703-4.775 2.335-1.642 4.954-2.656 5.589-4.274.302-.77 2.124-2.618 4.646-4.92 4.684-4.275 11.78-10.115 16.026-13.514 4.915-3.083 10.504 5.631 8.147 7.508-2.356 1.877-8.147 11.864-10.167 14.814-2.02 2.949-7.407 9.384-10.235 14.814-2.828 5.429-8.417 5.631-13.333 3.284z" fill="#fff" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M271.324 655.018c1.639 1.059 3.22 3.58 3.805 4.708 1.024.809 9.146-1.545 9.146-2.942 0-1.398-3.878-4.488-4.317-5.003-.439-.515-.731-3.237-.512-4.782.22-1.544-.658-2.648-1.097-1.618-.439 1.03-3.439.221-3.878.735-.439.515-2.415.883-3.586.516-1.17-.368-2.999.22-4.463 0-1.463-.221-2.853-1.766-3.512-2.281-.658-.515-2.122-1.03-3.146-.368s.219 1.692 1.024 2.133c.805.442 1.317 2.207 2.122 2.87.805.662 3.732 1.25 4.171 2.354.439 1.103 2.195 2.354 4.243 3.678zM269.129 636.7c.878 0 1.537.491 1.756.736.196.122.571.456.513.809-.074.441-.952.662-2.049 1.545-1.098.883-2.195.736-2.415.147-.219-.589 1.025-1.324 1.171-1.839.146-.515-1.975.441-3 .515-.585.042-.366-1.251-.585-1.913-.236-.711-.073-.809.878-.368.951.442 2.634.368 3.731.368z" fill="#fff" />
              <path d="M271.324 655.018c1.639 1.059 3.22 3.58 3.805 4.708 1.024.809 9.146-1.545 9.146-2.942 0-1.398-3.878-4.488-4.317-5.003-.439-.515-.731-3.237-.512-4.782.22-1.544-.658-2.648-1.097-1.618-.439 1.03-3.439.221-3.878.735-.439.515-2.415.883-3.586.516-1.17-.368-2.999.22-4.463 0-1.463-.221-2.853-1.766-3.512-2.281-.658-.515-2.122-1.03-3.146-.368s.219 1.692 1.024 2.133c.805.442 1.317 2.207 2.122 2.87.805.662 3.732 1.25 4.171 2.354.439 1.103 2.195 2.354 4.243 3.678zM269.129 636.7c.878 0 1.537.491 1.756.736.196.122.571.456.513.809-.074.441-.952.662-2.049 1.545-1.098.883-2.195.736-2.415.147-.219-.589 1.025-1.324 1.171-1.839.146-.515-1.975.441-3 .515-.585.042-.366-1.251-.585-1.913-.236-.711-.073-.809.878-.368.951.442 2.634.368 3.731.368z" stroke="#FF8989" strokeWidth="1.1" />
              <path d="M268.984 686.166c1.362-5.603-.829-14.857-2.095-18.784 2.226-.72 13.42 4.909 13.486 3.665.065-1.243-4.714-8.705-6.547-10.733-1.466-1.624-.611-1.942 0-1.898 6.076-.262 8.205-2.989 8.511-4.32 1.309.916 5.106 7.068 9.82 15.053 4.713 7.985 6.481 9.425 3.6 13.744-2.304 3.456-18.81 3.622-26.775 3.273z" fill="#fff" stroke="#FF8989" strokeWidth="1.1" />
              <path id="ray" className="ray" d="M1178.82 277.309L270.793 641.47c-6.029 2.144-6.054-2.679-8.78-4.161-2.181-1.185-3.042 2.322-3.2 4.223-.375 5.368 3.692 7.025 12.026 8.836l911.031 305.933-3.05-678.992z" fill="url(#paint2_linear)" fillOpacity=".5" />
              <path className="path" id="motionPath" fillRule="evenodd" clipRule="evenodd" d="M470.957 807.07C532.213 841.07 749.324 820.243 749.324 820.243C807.613 822.741 1066.49 716.412 1030.8 633.651C1019.57 607.632 889.593 558.856 809.124 555.215C713.585 550.893 587.61 607.65 572.011 623.47C486.281 710.41 657.975 785.63 749.324 820.243C836.525 853.285 1077.55 846.472 1135.97 802.708C1381.73 618.588 842.693 336.779 472.721 560.722C376.55 618.934 403.154 769.438 470.957 807.07V807.07Z" stroke="black" strokeWidth="1.22" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <g id="plane1" className="plane">
                <path fillRule="evenodd" clipRule="evenodd" d="M615.51 730.567l49.805-31.086-34.913 3.074-14.892 28.012zm11.458-27.709l-18.451 1.624-7.692 4.682 5.29-10.995-8.873-17.963 68.073 19.275-36.335-.805-2.012 4.182z" fill="#fff" />
                <path d="M615.51 730.567l-6.312-21.305-8.373-.098 7.692-4.682 18.451-1.624 3.434-.303-14.892 28.012z" fill="#fff" />
                <path d="M628.98 698.676l36.335.805-34.913 3.074-3.434.303 2.012-4.182z" fill="#fff" />
                <path d="M665.315 699.481l-49.805 31.086m49.805-31.086l-68.073-19.275 8.873 17.963m59.2 1.312l-36.335-.805m36.335.805l-34.913 3.074m-14.892 28.012l-6.312-21.305-8.373-.098m14.685 21.403l14.892-28.012m-29.577 6.609l7.692-4.682 18.451-1.624m-26.143 6.306l5.29-10.995m0 0l22.865.507m0 0l-2.012 4.182m0 0l3.434-.303" stroke="#FF8989" strokeWidth="1.1" />
              </g>
              <g id="plane2" className="plane">
                <path fillRule="evenodd" clipRule="evenodd" d="M486.31 683.352l43.692-47.293-36.043 13.353-7.649 33.94zm4.104-32.627l-19.048 7.057-6.783 7.177 2.416-13.161-14.583-16.435 77.586.696-38.669 9.66-.919 5.006z" fill="#fff" />
                <path d="M486.31 683.352l-12.841-20.711-8.886 2.318 6.783-7.177 19.048-7.057 3.545-1.313-7.649 33.94z" fill="#fff" />
                <path d="M491.333 645.719l38.669-9.66-36.043 13.353-3.545 1.313.919-5.006z" fill="#fff" />
                <path d="M530.002 636.059l-43.692 47.293m43.692-47.293l-77.586-.696 14.583 16.435m63.003-15.739l-38.669 9.66m38.669-9.66l-36.043 13.353m-7.649 33.94l-12.841-20.711-8.886 2.318m21.727 18.393l7.649-33.94m-29.376 15.547l6.783-7.177 19.048-7.057m-25.831 14.234l2.416-13.161m0 0l24.334-6.079m0 0l-.919 5.006m0 0l3.545-1.313" stroke="#FF8989" strokeWidth="1.1" />
              </g>
              <g id="plane3" className="plane">
                <path fillRule="evenodd" clipRule="evenodd" d="M606.048 581.105l21.835-56.844-26.994 24.347 5.159 32.497zm-7.814-30.103l-14.265 12.867-3.447 8.68-2.484-12.409-18.565-9.335 68.41-26.544-30.593 22.022.944 4.719z" fill="#fff" />
                <path d="M606.048 581.105l-18.531-13.703-6.995 5.147 3.447-8.68 14.265-12.867 2.655-2.394 5.159 32.497zM597.29 546.283l30.593-22.022-26.994 24.347-2.655 2.394-.944-4.719z" fill="#fff" />
                <path d="M627.883 524.261l-21.835 56.844m21.835-56.844l-68.41 26.544 18.565 9.335m49.845-35.879l-30.593 22.022m30.593-22.022l-26.994 24.347m5.159 32.497l-18.531-13.703-6.995 5.147m25.526 8.556l-5.159-32.497m-20.367 23.941l3.447-8.68 14.265-12.867m-17.712 21.547l-2.484-12.409m0 0l19.252-13.857m0 0l.944 4.719m0 0l2.655-2.394" stroke="#FF8989" strokeWidth="1.1" />
              </g>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0" transform="matrix(.0006 0 0 .00042 0 0)" />
                </pattern>
                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image1" transform="matrix(.0006 0 0 .00124 0 -.985)" />
                </pattern>
                <linearGradient id="paint0_linear" x1="378.474" y1="653.903" x2="629.093" y2="640.233" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD4BE" />
                  <stop offset={1} stopColor="#fff" stopOpacity=".28" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="378.474" y1="653.903" x2="629.093" y2="640.233" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD4BE" />
                  <stop offset={1} stopColor="#fff" stopOpacity=".28" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="309.298" y1="647.27" x2="945.293" y2="610.351" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFA89" />
                  <stop offset={1} stopColor="#FF898C" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <article className=" news news_3">
            <h3>
              So affordable. Small teams OK
            </h3>
            <p>
              Some email services cost hundreds or thousands to send to a not-so-large audience. We’ll make sure you can stop worrying bout costs and more about sending your beautiful content!
            </p>
          </article>
          <figure className="furniture">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/furniture%20scene.png" alt="" />
          </figure>
        </div>
      </section>
    </div>
  </div>

  );
}

export default App;
