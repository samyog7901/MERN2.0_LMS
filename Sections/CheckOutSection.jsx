import React from 'react'

const CheckOutSection = () => {
  return (
    <div class="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
  <div class="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
  
    <div
      class="flex flex-col overflow-hidden rounded-lg bg-white shadow-xs dark:bg-gray-800 dark:text-gray-100"
    >
      <div class="mx-auto w-full max-w-lg grow p-5">
       
        <div class="mt-5 text-center">
          <h6
            class="mb-1 text-sm font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400"
          >
            Checkout
          </h6>
          <h1 class="mb-1 text-2xl font-bold">Building a web app (Course)</h1>
          <p
            class="mb-5 text-sm font-medium text-gray-600 dark:text-gray-400"
          >
            Enter your info to complete your purchase
          </p>
          <a
            href="javascript:void(0)"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-700 px-6 py-3 leading-6 font-semibold text-white hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-3 focus:ring-gray-400/50 active:border-gray-700 active:bg-gray-700 dark:focus:ring-gray-400/90"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 435.97 173.13"
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-12"
            >
              <path
                d="M206.2 84.58v50.75h-16.1V10h42.7a38.61 38.61 0 0 1 27.65 10.85A34.88 34.88 0 0 1 272 47.3a34.72 34.72 0 0 1-11.55 26.6q-11.2 10.68-27.65 10.67h-26.6Zm0-59.15v43.75h27a21.28 21.28 0 0 0 15.93-6.48 21.36 21.36 0 0 0 0-30.63 21 21 0 0 0-15.93-6.65h-27ZM309.1 46.78q17.85 0 28.18 9.54t10.32 26.16v52.85h-15.4v-11.9h-.7q-10 14.7-26.6 14.7-14.17 0-23.71-8.4a26.82 26.82 0 0 1-9.54-21q0-13.31 10.06-21.17t26.86-7.88q14.34 0 23.62 5.25v-3.68A18.33 18.33 0 0 0 325.54 67 22.8 22.8 0 0 0 310 61.13q-13.49 0-21.35 11.38l-14.18-8.93q11.7-16.8 34.63-16.8Zm-20.83 62.3a12.86 12.86 0 0 0 5.34 10.5 19.64 19.64 0 0 0 12.51 4.2 25.67 25.67 0 0 0 18.11-7.52q8-7.53 8-17.67-7.53-6-21-6-9.81 0-16.36 4.73c-4.41 3.2-6.6 7.09-6.6 11.76ZM436 49.58l-53.76 123.55h-16.62l19.95-43.23-35.35-80.32h17.5l25.55 61.6h.35l24.85-61.6Z"
                fill="currentColor"
              ></path>
              <path
                d="M141.14 73.64A85.79 85.79 0 0 0 139.9 59H72v27.73h38.89a33.33 33.33 0 0 1-14.38 21.88v18h23.21c13.59-12.53 21.42-31.06 21.42-52.97Z"
                fill="#4285f4"
              ></path>
              <path
                d="M72 144c19.43 0 35.79-6.38 47.72-17.38l-23.21-18C90.05 113 81.73 115.5 72 115.5c-18.78 0-34.72-12.66-40.42-29.72H7.67v18.55A72 72 0 0 0 72 144Z"
                fill="#34a853"
              ></path>
              <path
                d="M31.58 85.78a43.14 43.14 0 0 1 0-27.56V39.67H7.67a72 72 0 0 0 0 64.66Z"
                fill="#fbbc04"
              ></path>
              <path
                d="M72 28.5a39.09 39.09 0 0 1 27.62 10.8l20.55-20.55A69.18 69.18 0 0 0 72 0 72 72 0 0 0 7.67 39.67l23.91 18.55C37.28 41.16 53.22 28.5 72 28.5Z"
                fill="#ea4335"
              ></path>
            </svg>
          </a>
          <h3 class="my-5 flex items-center">
            <span
              aria-hidden="true"
              class="h-0.5 grow rounded-sm bg-gray-200 dark:bg-gray-700/75"
            ></span>
            <span class="mx-3 text-sm font-medium text-gray-400">OR</span>
            <span
              aria-hidden="true"
              class="h-0.5 grow rounded-sm bg-gray-200 dark:bg-gray-700/75"
            ></span>
          </h3>
        </div>
       
        <div class="space-y-6">
          <form onsubmit="return false;" class="space-y-6">
            <div
              class="space-y-6 rounded-sm border border-gray-200 bg-gray-50 p-4 dark:border-gray-700/75 dark:bg-gray-900/50"
            >
              <div class="space-y-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                />
              </div>
              <div class="space-y-1">
                <input
                  type="text"
                  id="vat_id"
                  name="vat_id"
                  placeholder="Business VAT ID"
                  class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div
              class="space-y-6 rounded-sm border border-gray-200 bg-gray-50 p-4 dark:border-gray-700/75 dark:bg-gray-900/50"
            >
              <div class="space-y-1">
                <label for="card_name" class="inline-block font-medium"
                  >Name on card</label
                >
                <input
                  type="text"
                  id="card_name"
                  name="card_name"
                  class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                />
              </div>
              <div class="space-y-1">
                <label for="card_number" class="inline-block font-medium"
                  >Card number</label
                >
                <input
                  type="text"
                  id="card_number"
                  name="card_number"
                  class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                />
              </div>
              <div class="space-y-6 sm:flex sm:gap-3 sm:space-y-0">
                <div class="grow space-y-1">
                  <label for="card_exp" class="inline-block font-medium"
                    >Expiration date (MM/YY)</label
                  >
                  <input
                    type="text"
                    id="card_exp"
                    name="card_exp"
                    class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                  />
                </div>
                <div class="space-y-1 sm:w-40">
                  <label for="card_cvc" class="inline-block font-medium"
                    >CVC</label
                  >
                  <input
                    type="text"
                    id="card_cvc"
                    name="card_cvc"
                    class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div
              class="rounded-sm border border-gray-200 p-4 text-center text-sm font-medium text-gray-600 dark:border-gray-700/75 dark:text-gray-400"
            >
              You’ll be charged US$90.85 including VAT (15%).
            </div>
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 leading-6 font-semibold text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
            >
              <span>Pay</span>
            </button>
          </form>
        </div>
       
        <div class="my-5 text-center">
          <p
            class="text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            Thanks for buying from our store.
          </p>
        </div>
        
      </div>
    </div>
 
  </div>
</div>
  )
}

export default CheckOutSection