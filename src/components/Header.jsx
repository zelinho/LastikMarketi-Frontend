import React from 'react'

function Header() {
  return (
    <>
    <div>
      <header className="bg-gray-100 py-4">
        <div className=" justify-items-center grid mt-10 mb-16">


          <nav className="flex space-x-10  gap-0">


            <div className='flex flex-col items-center'>
            <div className='rounded-full bg-gray-300 w-16 h-16 flex items-center justify-center'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M28.1107 9.26449C27.6214 8.47249 26.7734 8.00049 25.8427 8.00049H8.77602L7.95335 4.98315C7.79469 4.40315 7.26802 4.00049 6.66669 4.00049H4.00002C3.26269 4.00049 2.66669 4.59782 2.66669 5.33382C2.66669 6.06982 3.26269 6.66716 4.00002 6.66716H5.64802L9.38002 20.3512C9.53869 20.9312 10.0654 21.3338 10.6667 21.3338H22.6667C23.172 21.3338 23.6334 21.0485 23.86 20.5965L28.228 11.8592C28.644 11.0258 28.6 10.0565 28.1107 9.26449ZM10 24.0002C8.89602 24.0002 8.00002 24.8949 8.00002 26.0002C8.00002 27.1056 8.89602 28.0002 10 28.0002C11.104 28.0002 12 27.1056 12 26.0002C12 24.8949 11.104 24.0002 10 24.0002ZM21.3334 26.0002C21.3334 24.8949 22.2294 24.0002 23.3334 24.0002C24.4374 24.0002 25.3334 24.8949 25.3334 26.0002C25.3334 27.1056 24.4374 28.0002 23.3334 28.0002C22.2294 28.0002 21.3334 27.1056 21.3334 26.0002Z" fill="Green" />
                </svg>
              </div>
              <div>
            <svg width="300" height="15" viewBox="0 0 205 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.354 4.85354C204.549 4.65827 204.549 4.34169 204.354 4.14643L201.172 0.964449C200.976 0.769186 200.66 0.769186 200.464 0.964449C200.269 1.15971 200.269 1.47629 200.464 1.67156L203.293 4.49998L200.464 7.32841C200.269 7.52367 200.269 7.84025 200.464 8.03552C200.66 8.23078 200.976 8.23078 201.172 8.03552L204.354 4.85354ZM4.37114e-08 5L1.96154 5L1.96154 4L-4.37114e-08 4L4.37114e-08 5ZM5.88462 5L9.80769 5L9.80769 4L5.88462 4L5.88462 5ZM13.7308 5L17.6538 5L17.6538 4L13.7308 4L13.7308 5ZM21.5769 5L25.5 5L25.5 4L21.5769 4L21.5769 5ZM29.4231 5L33.3462 5L33.3462 4L29.4231 4L29.4231 5ZM37.2692 5L41.1923 5L41.1923 4L37.2692 4L37.2692 5ZM45.1154 5L49.0385 5L49.0385 4L45.1154 4L45.1154 5ZM52.9615 5L56.8846 5L56.8846 4L52.9615 4L52.9615 5ZM60.8077 4.99999L64.7308 4.99999L64.7308 3.99999L60.8077 3.99999L60.8077 4.99999ZM68.6538 4.99999L72.5769 4.99999L72.5769 3.99999L68.6538 3.99999L68.6538 4.99999ZM76.5 4.99999L80.4231 4.99999L80.4231 3.99999L76.5 3.99999L76.5 4.99999ZM84.3462 4.99999L88.2692 4.99999L88.2692 3.99999L84.3462 3.99999L84.3462 4.99999ZM92.1923 4.99999L96.1154 4.99999L96.1154 3.99999L92.1923 3.99999L92.1923 4.99999ZM100.038 4.99999L103.962 4.99999L103.962 3.99999L100.038 3.99999L100.038 4.99999ZM107.885 4.99999L111.808 4.99999L111.808 3.99999L107.885 3.99999L107.885 4.99999ZM115.731 4.99999L119.654 4.99999L119.654 3.99999L115.731 3.99999L115.731 4.99999ZM123.577 4.99999L127.5 4.99999L127.5 3.99999L123.577 3.99999L123.577 4.99999ZM131.423 4.99999L135.346 4.99999L135.346 3.99999L131.423 3.99999L131.423 4.99999ZM139.269 4.99999L143.192 4.99999L143.192 3.99999L139.269 3.99999L139.269 4.99999ZM147.115 4.99999L151.039 4.99999L151.039 3.99999L147.115 3.99999L147.115 4.99999ZM154.962 4.99999L158.885 4.99999L158.885 3.99999L154.962 3.99999L154.962 4.99999ZM162.808 4.99999L166.731 4.99999L166.731 3.99999L162.808 3.99999L162.808 4.99999ZM170.654 4.99999L174.577 4.99998L174.577 3.99998L170.654 3.99999L170.654 4.99999ZM178.5 4.99998L182.423 4.99998L182.423 3.99998L178.5 3.99998L178.5 4.99998ZM186.346 4.99998L190.269 4.99998L190.269 3.99998L186.346 3.99998L186.346 4.99998ZM194.192 4.99998L198.115 4.99998L198.115 3.99998L194.192 3.99998L194.192 4.99998ZM202.039 4.99998L204 4.99998L204 3.99998L202.039 3.99998L202.039 4.99998Z" fill="#2E8856" />
            </svg>
            </div>
              <p className="text-customGreen text-sm ">Brisa güvencesi ile aracınıza en uygun lastiği alın</p>
            </div>


            <div className='flex flex-col items-center'>
            <div className='rounded-full bg-gray-300 w-16 h-16 flex items-center justify-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3059 24C25.3059 24.736 24.7085 25.3333 23.9725 25.3333C23.2365 25.3333 22.6392 24.736 22.6392 24C22.6392 23.264 23.2365 22.6667 23.9725 22.6667C24.7085 22.6667 25.3059 23.264 25.3059 24ZM9.30586 24C9.30586 24.736 8.70852 25.3333 7.97252 25.3333C7.23652 25.3333 6.63919 24.736 6.63919 24C6.63919 23.264 7.23652 22.6667 7.97252 22.6667C8.70852 22.6667 9.30586 23.264 9.30586 24ZM26.6392 16.64V20H22.6392V13.4414L26.6392 16.64ZM28.8059 14.9587L22.6392 10.0253V6.66667C22.6392 5.196 21.5552 4 20.2219 4H5.05519C3.72319 4 2.63919 5.196 2.63919 6.66667V20C2.63919 21.164 3.32319 22.1453 4.26719 22.5093C4.08052 22.9707 3.97252 23.472 3.97252 24C3.97252 26.2053 5.76719 28 7.97252 28C10.1779 28 11.9725 26.2053 11.9725 24C11.9725 23.5293 11.8765 23.0853 11.7259 22.6667H15.9725H20.2192C20.0685 23.0853 19.9725 23.5293 19.9725 24C19.9725 26.2053 21.7672 28 23.9725 28C26.1779 28 27.9725 26.2053 27.9725 24C27.9725 23.5293 27.8765 23.0853 27.7259 22.6667H27.9725C28.7099 22.6667 29.3059 22.0707 29.3059 21.3333V16C29.3059 15.5947 29.1219 15.212 28.8059 14.9587Z" fill="Green" />
              </svg>
              </div>
              <div>
            <svg width="300" height="15" viewBox="0 0 205 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.354 4.85354C204.549 4.65827 204.549 4.34169 204.354 4.14643L201.172 0.964449C200.976 0.769186 200.66 0.769186 200.464 0.964449C200.269 1.15971 200.269 1.47629 200.464 1.67156L203.293 4.49998L200.464 7.32841C200.269 7.52367 200.269 7.84025 200.464 8.03552C200.66 8.23078 200.976 8.23078 201.172 8.03552L204.354 4.85354ZM4.37114e-08 5L1.96154 5L1.96154 4L-4.37114e-08 4L4.37114e-08 5ZM5.88462 5L9.80769 5L9.80769 4L5.88462 4L5.88462 5ZM13.7308 5L17.6538 5L17.6538 4L13.7308 4L13.7308 5ZM21.5769 5L25.5 5L25.5 4L21.5769 4L21.5769 5ZM29.4231 5L33.3462 5L33.3462 4L29.4231 4L29.4231 5ZM37.2692 5L41.1923 5L41.1923 4L37.2692 4L37.2692 5ZM45.1154 5L49.0385 5L49.0385 4L45.1154 4L45.1154 5ZM52.9615 5L56.8846 5L56.8846 4L52.9615 4L52.9615 5ZM60.8077 4.99999L64.7308 4.99999L64.7308 3.99999L60.8077 3.99999L60.8077 4.99999ZM68.6538 4.99999L72.5769 4.99999L72.5769 3.99999L68.6538 3.99999L68.6538 4.99999ZM76.5 4.99999L80.4231 4.99999L80.4231 3.99999L76.5 3.99999L76.5 4.99999ZM84.3462 4.99999L88.2692 4.99999L88.2692 3.99999L84.3462 3.99999L84.3462 4.99999ZM92.1923 4.99999L96.1154 4.99999L96.1154 3.99999L92.1923 3.99999L92.1923 4.99999ZM100.038 4.99999L103.962 4.99999L103.962 3.99999L100.038 3.99999L100.038 4.99999ZM107.885 4.99999L111.808 4.99999L111.808 3.99999L107.885 3.99999L107.885 4.99999ZM115.731 4.99999L119.654 4.99999L119.654 3.99999L115.731 3.99999L115.731 4.99999ZM123.577 4.99999L127.5 4.99999L127.5 3.99999L123.577 3.99999L123.577 4.99999ZM131.423 4.99999L135.346 4.99999L135.346 3.99999L131.423 3.99999L131.423 4.99999ZM139.269 4.99999L143.192 4.99999L143.192 3.99999L139.269 3.99999L139.269 4.99999ZM147.115 4.99999L151.039 4.99999L151.039 3.99999L147.115 3.99999L147.115 4.99999ZM154.962 4.99999L158.885 4.99999L158.885 3.99999L154.962 3.99999L154.962 4.99999ZM162.808 4.99999L166.731 4.99999L166.731 3.99999L162.808 3.99999L162.808 4.99999ZM170.654 4.99999L174.577 4.99998L174.577 3.99998L170.654 3.99999L170.654 4.99999ZM178.5 4.99998L182.423 4.99998L182.423 3.99998L178.5 3.99998L178.5 4.99998ZM186.346 4.99998L190.269 4.99998L190.269 3.99998L186.346 3.99998L186.346 4.99998ZM194.192 4.99998L198.115 4.99998L198.115 3.99998L194.192 3.99998L194.192 4.99998ZM202.039 4.99998L204 4.99998L204 3.99998L202.039 3.99998L202.039 4.99998Z" fill="#2E8856" />
            </svg>
            </div>
              <p className="text-customGreen text-sm ">Lastiklerinizi kapınıza kadar getirelim</p>
            </div>


            <div className='flex flex-col items-center'>
            <div className='rounded-full bg-gray-300 w-16 h-16 flex items-center justify-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.10668 4.36116C7.93874 4.06433 8.83797 4.00977 9.69982 4.20383C10.5617 4.39789 11.3507 4.8326 11.9753 5.45742C12.5998 6.08223 13.0342 6.87149 13.2278 7.73342C13.4215 8.59536 13.3666 9.49456 13.0693 10.3265L27.5293 24.7865L24.7 27.6145L10.24 13.1558C9.40795 13.4527 8.50872 13.5072 7.64687 13.3132C6.78502 13.1191 5.99596 12.6844 5.37142 12.0596C4.74689 11.4348 4.31253 10.6455 4.11885 9.78357C3.92518 8.92163 3.98014 8.02243 4.27735 7.1905L7.25868 10.1732C7.44317 10.3642 7.66386 10.5165 7.90787 10.6214C8.15188 10.7262 8.41432 10.7814 8.67988 10.7837C8.94543 10.786 9.20879 10.7354 9.45459 10.6348C9.70038 10.5342 9.92368 10.3857 10.1115 10.198C10.2993 10.0102 10.4478 9.78686 10.5483 9.54107C10.6489 9.29528 10.6995 9.03192 10.6972 8.76636C10.6949 8.5008 10.6397 8.23836 10.5349 7.99435C10.4301 7.75035 10.2777 7.52966 10.0867 7.34516L7.10534 4.35983L7.10668 4.36116ZM20.9293 6.87316L25.172 4.51583L27.0573 6.40116L24.7 10.6438L22.3427 11.1158L19.516 13.9438L17.6293 12.0585L20.4573 9.2305L20.9293 6.87316ZM11.5013 17.2438L14.3293 20.0732L7.72934 26.6732C7.36539 27.0337 6.87697 27.2408 6.36479 27.2519C5.8526 27.2629 5.35573 27.0769 4.97662 26.7323C4.59751 26.3878 4.36507 25.9109 4.32725 25.4C4.28943 24.8891 4.44911 24.3831 4.77334 23.9865L4.90268 23.8438L11.5027 17.2438H11.5013Z" fill="#2E8856" />
              </svg>
              </div>
              <div>
            <svg width="300" height="15" viewBox="0 0 205 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.354 4.85354C204.549 4.65827 204.549 4.34169 204.354 4.14643L201.172 0.964449C200.976 0.769186 200.66 0.769186 200.464 0.964449C200.269 1.15971 200.269 1.47629 200.464 1.67156L203.293 4.49998L200.464 7.32841C200.269 7.52367 200.269 7.84025 200.464 8.03552C200.66 8.23078 200.976 8.23078 201.172 8.03552L204.354 4.85354ZM4.37114e-08 5L1.96154 5L1.96154 4L-4.37114e-08 4L4.37114e-08 5ZM5.88462 5L9.80769 5L9.80769 4L5.88462 4L5.88462 5ZM13.7308 5L17.6538 5L17.6538 4L13.7308 4L13.7308 5ZM21.5769 5L25.5 5L25.5 4L21.5769 4L21.5769 5ZM29.4231 5L33.3462 5L33.3462 4L29.4231 4L29.4231 5ZM37.2692 5L41.1923 5L41.1923 4L37.2692 4L37.2692 5ZM45.1154 5L49.0385 5L49.0385 4L45.1154 4L45.1154 5ZM52.9615 5L56.8846 5L56.8846 4L52.9615 4L52.9615 5ZM60.8077 4.99999L64.7308 4.99999L64.7308 3.99999L60.8077 3.99999L60.8077 4.99999ZM68.6538 4.99999L72.5769 4.99999L72.5769 3.99999L68.6538 3.99999L68.6538 4.99999ZM76.5 4.99999L80.4231 4.99999L80.4231 3.99999L76.5 3.99999L76.5 4.99999ZM84.3462 4.99999L88.2692 4.99999L88.2692 3.99999L84.3462 3.99999L84.3462 4.99999ZM92.1923 4.99999L96.1154 4.99999L96.1154 3.99999L92.1923 3.99999L92.1923 4.99999ZM100.038 4.99999L103.962 4.99999L103.962 3.99999L100.038 3.99999L100.038 4.99999ZM107.885 4.99999L111.808 4.99999L111.808 3.99999L107.885 3.99999L107.885 4.99999ZM115.731 4.99999L119.654 4.99999L119.654 3.99999L115.731 3.99999L115.731 4.99999ZM123.577 4.99999L127.5 4.99999L127.5 3.99999L123.577 3.99999L123.577 4.99999ZM131.423 4.99999L135.346 4.99999L135.346 3.99999L131.423 3.99999L131.423 4.99999ZM139.269 4.99999L143.192 4.99999L143.192 3.99999L139.269 3.99999L139.269 4.99999ZM147.115 4.99999L151.039 4.99999L151.039 3.99999L147.115 3.99999L147.115 4.99999ZM154.962 4.99999L158.885 4.99999L158.885 3.99999L154.962 3.99999L154.962 4.99999ZM162.808 4.99999L166.731 4.99999L166.731 3.99999L162.808 3.99999L162.808 4.99999ZM170.654 4.99999L174.577 4.99998L174.577 3.99998L170.654 3.99999L170.654 4.99999ZM178.5 4.99998L182.423 4.99998L182.423 3.99998L178.5 3.99998L178.5 4.99998ZM186.346 4.99998L190.269 4.99998L190.269 3.99998L186.346 3.99998L186.346 4.99998ZM194.192 4.99998L198.115 4.99998L198.115 3.99998L194.192 3.99998L194.192 4.99998ZM202.039 4.99998L204 4.99998L204 3.99998L202.039 3.99998L202.039 4.99998Z" fill="#2E8856" />
            </svg>
            </div>
              <p className="text-customGreen text-sm align-center">Kapınızın önünde lastiklerinizi değiştirelim</p>
            </div>


            <div className='flex flex-col items-center '>
              <div className='rounded-full bg-gray-300 w-16 h-16 flex items-center justify-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 29.1349C15.548 29.1349 15.096 29.0229 14.6947 28.7962L14.2907 28.5682C7.94267 24.9975 4 18.2562 4 10.9735V10.7802C4 9.82155 4.52 8.93088 5.35733 8.45755L14.6933 3.20688C15.5 2.75355 16.5013 2.75221 17.3053 3.20555L26.64 8.45621C27.48 8.93088 28 9.82155 28 10.7802V10.9735C28 18.2562 24.0573 24.9975 17.7093 28.5682L17.3067 28.7949C16.904 29.0215 16.452 29.1349 16 29.1349Z" fill="Green" />
              </svg>
              </div>
              <div>
            <svg width="300" height="15" viewBox="0 0 205 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.354 4.85354C204.549 4.65827 204.549 4.34169 204.354 4.14643L201.172 0.964449C200.976 0.769186 200.66 0.769186 200.464 0.964449C200.269 1.15971 200.269 1.47629 200.464 1.67156L203.293 4.49998L200.464 7.32841C200.269 7.52367 200.269 7.84025 200.464 8.03552C200.66 8.23078 200.976 8.23078 201.172 8.03552L204.354 4.85354ZM4.37114e-08 5L1.96154 5L1.96154 4L-4.37114e-08 4L4.37114e-08 5ZM5.88462 5L9.80769 5L9.80769 4L5.88462 4L5.88462 5ZM13.7308 5L17.6538 5L17.6538 4L13.7308 4L13.7308 5ZM21.5769 5L25.5 5L25.5 4L21.5769 4L21.5769 5ZM29.4231 5L33.3462 5L33.3462 4L29.4231 4L29.4231 5ZM37.2692 5L41.1923 5L41.1923 4L37.2692 4L37.2692 5ZM45.1154 5L49.0385 5L49.0385 4L45.1154 4L45.1154 5ZM52.9615 5L56.8846 5L56.8846 4L52.9615 4L52.9615 5ZM60.8077 4.99999L64.7308 4.99999L64.7308 3.99999L60.8077 3.99999L60.8077 4.99999ZM68.6538 4.99999L72.5769 4.99999L72.5769 3.99999L68.6538 3.99999L68.6538 4.99999ZM76.5 4.99999L80.4231 4.99999L80.4231 3.99999L76.5 3.99999L76.5 4.99999ZM84.3462 4.99999L88.2692 4.99999L88.2692 3.99999L84.3462 3.99999L84.3462 4.99999ZM92.1923 4.99999L96.1154 4.99999L96.1154 3.99999L92.1923 3.99999L92.1923 4.99999ZM100.038 4.99999L103.962 4.99999L103.962 3.99999L100.038 3.99999L100.038 4.99999ZM107.885 4.99999L111.808 4.99999L111.808 3.99999L107.885 3.99999L107.885 4.99999ZM115.731 4.99999L119.654 4.99999L119.654 3.99999L115.731 3.99999L115.731 4.99999ZM123.577 4.99999L127.5 4.99999L127.5 3.99999L123.577 3.99999L123.577 4.99999ZM131.423 4.99999L135.346 4.99999L135.346 3.99999L131.423 3.99999L131.423 4.99999ZM139.269 4.99999L143.192 4.99999L143.192 3.99999L139.269 3.99999L139.269 4.99999ZM147.115 4.99999L151.039 4.99999L151.039 3.99999L147.115 3.99999L147.115 4.99999ZM154.962 4.99999L158.885 4.99999L158.885 3.99999L154.962 3.99999L154.962 4.99999ZM162.808 4.99999L166.731 4.99999L166.731 3.99999L162.808 3.99999L162.808 4.99999ZM170.654 4.99999L174.577 4.99998L174.577 3.99998L170.654 3.99999L170.654 4.99999ZM178.5 4.99998L182.423 4.99998L182.423 3.99998L178.5 3.99998L178.5 4.99998ZM186.346 4.99998L190.269 4.99998L190.269 3.99998L186.346 3.99998L186.346 4.99998ZM194.192 4.99998L198.115 4.99998L198.115 3.99998L194.192 3.99998L194.192 4.99998ZM202.039 4.99998L204 4.99998L204 3.99998L202.039 3.99998L202.039 4.99998Z" fill="#2E8856" />
            </svg>
            </div>
              <p className="text-customGreen text-sm ">Çıkan lastiklerinizi yaz gelene kadar saklayalım</p>
            </div>


          </nav>

        </div>
        <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <a href="">
            <div className="bg-white shadow-md rounded-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">4 Al 3 Öde Kampanyası</h3>
              <p className="text-gray-600">Lassa ve Bridgestone Lastiklerde <br /> 4 al 3 öde & Ücretsiz Montaj!</p>
              <img src="image/header1.png" alt="4 Al 3 Öde" className="mt-4 h-80 w-full object-cover rounded-sm" />
              <a href="#" className="mt-4 block bg-green-600 text-white py-2 rounded">Detaylı Bilgi</a>
            </div>
          </a>

          <div className="bg-white shadow-md rounded-sm p-6 text-center ">
            <a href="">
              <h3 className="text-lg font-semibold mb-2">Ücretsiz Kapıda Montaj</h3>
              <p className="text-gray-600">Mobil araç ile evinizin önünde <br /> değişim fırsatı</p>
              <img src="image/header2.jpg" alt="Kapıda Montaj" className="mt-4 h-80 w-full object-cover rounded-sm" />
              <a href="#" className="mt-4 block bg-green-600 text-white py-2 rounded">Detaylı Bilgi</a>
            </a>
          </div>

          <div className="bg-white shadow-md rounded-sm p-6 text-center">
            <a href="">
              <h3 className="text-lg font-semibold mb-2">Ücretsiz Kargo</h3>
              <p className="text-gray-600">Türkiye’nin her yerine kargo ücretsiz <br /><br /></p>
              <img src="image/header3.jpg" alt="Ücretsiz Kargo" className="mt-4 h-80 w-full object-cover rounded-sm" />
              <a href="#" className="mt-4 block bg-green-600 text-white py-2 rounded">Detaylı Bilgi</a>
            </a>
          </div>

          <div className="bg-white shadow-md rounded-sm p-6 text-center">
            <a href="">
              <h3 className="text-lg font-semibold mb-2">Ücretsiz Bayide Montaj</h3>
              <p className="text-gray-600">Türkiye geneli ücretsiz montaj fırsatı <br /><br /></p>
              <img src="image/header4.jpg" alt="Bayide Montaj" className="mt-4 h-80 w-full object-cover rounded-sm" />
              <a href="#" className="mt-4 block bg-green-600 text-white py-2 rounded">Detaylı Bilgi</a>
            </a>
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

export default Header
