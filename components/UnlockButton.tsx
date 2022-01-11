import { MailIcon, SparklesIcon } from '@heroicons/react/outline'
import {
  CheckIcon,
  LockClosedIcon,
  LockOpenIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import cx from 'classnames'
import type { UnlockProps } from 'hooks/useUnlocked'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'

import styles from './UnlockButton.module.css'

export default function UnlockButton({
  unlock,
  error,
  setError,
  loading,
  unlocked,
}: Pick<
  UnlockProps,
  'unlock' | 'error' | 'setError' | 'loading' | 'unlocked'
>) {
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const focusRef = useRef()
  const t = useTranslations('UnlockButton')

  return (
    <div className="ml-10 w-40">
      <div className="group w-0">
        <button
          id="unlock-button"
          type="button"
          className={cx(
            'whitespace-nowrap text-sm group py-1 px-4 rounded-lg flex items-center justify-center relative border border-cyan-200/50 shadow shadow-cyan-100/50 bg-cyan-100 text-cyan-700 focus:outline-none ',
            {
              'transition transform-gpu group-hover:scale-110 hover:animate-bounce group-hover:animate-none':
                !unlocked,
              'hover:border-cyan-300/50 active:border-cyan-400/50 hover:shadow-cyan-100/75 active:shadow-cyan-100/0 hover:bg-cyan-200 hover:text-cyan-800 active:bg-cyan-300 active:text-cyan-900 focus:scale-110 focus:border-cyan-400/50 focus:shadow-cyan-100/0 focus:text-cyan-900':
                !unlocked,
              'opacity-60 cursor-default': unlocked,
            }
          )}
          onClick={unlocked ? undefined : () => setOpen(true)}
        >
          {unlocked ? (
            <LockOpenIcon className="h-4 mr-1.5 -ml-0.5" />
          ) : (
            <>
              {!open && (
                <div className="animate-ping pointer-events-none transition-colors absolute top-0.5 right-3.5 bottom-0.5 left-3.5 bg-cyan-100 rounded-lg group-hover:bg-opacity-0 group-active:bg-opacity-0 group-focus:bg-opacity-0 z-[-1] group-hover:animate-none group-active:animate-none group-focus:animate-none" />
              )}
              <LockClosedIcon className="h-4 mr-1.5 -ml-0.5 group-hover:hidden group-active:hidden group-focus:hidden" />
              <LockOpenIcon className="h-4 mr-1.5 -ml-0.5 hidden group-hover:block group-active:block group-focus:block" />
            </>
          )}
          {unlocked ? t('unlocked') : t('unlock')}
        </button>
      </div>
      <BottomSheet
        className={styles.custom}
        open={open}
        initialFocusRef={focusRef}
        onDismiss={loading || unlocked ? undefined : () => setOpen(false)}
        onSpringStart={(event) => {
          if (event.type === 'CLOSE') {
            window.scrollTo(0, 0)
          }
        }}
        onSpringEnd={(event) => {
          if (event.type === 'CLOSE') {
            setPassword('')
            setError(null)
          }
        }}
      >
        {unlocked ? (
          <div className="px-4 pb-4 pt-4">
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <SparklesIcon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    {t('welcome', { user: unlocked.user })}
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-slate-800 mt-4">{t('unlockedHelp')}</p>
            <button
              onClick={() => setOpen(false)}
              type="button"
              className={cx(
                'mt-4 transition w-full inline-flex justify-center items-center px-5 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-cyan-600 focus:outline-none',
                {
                  'opacity-50 cursor-progress': loading,
                  'hover:shadow-sm hover:shadow-cyan-100 hover:bg-cyan-700 active:bg-cyan-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500':
                    !loading,
                }
              )}
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {t('ok')}
            </button>
          </div>
        ) : (
          <form
            className="px-4 pb-4 pt-4"
            onSubmit={(event) => {
              event.preventDefault()
              if (!loading) {
                unlock(password)
              }
            }}
          >
            <p className="text-slate-800">{t('help')}</p>
            <p className="text-slate-800 mt-4">
              {t.rich('noPassword', {
                link: (children) => (
                  <a
                    className="hover:underline"
                    href="mailto:stipsan@gmail.com?subject=Requesting%20CV%20Password"
                  >
                    {children}
                    <MailIcon className="inline h-5 -mt-1 ml-0.5 text-inherit" />
                  </a>
                ),
              })}
            </p>

            <input
              required
              ref={focusRef}
              type="password"
              readOnly={loading}
              className={cx(
                'block mt-4 w-full shadow-sm shadow-slate-400/25 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md',
                {
                  'animate-pulse': loading,
                  'animate-[shake_1s_ease-in-out]':
                    !loading &&
                    password &&
                    (error === 'Password is incorrect' ||
                      error === 'Password is required'),
                }
              )}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && (
              <div className="rounded-md bg-red-100 mt-4 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-900">
                      {error === 'Password is required'
                        ? t('passwordRequired')
                        : error === 'Password is incorrect'
                        ? t('passwordIncorrect')
                        : error}
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <button
              type="submit"
              className={cx(
                'mt-4 transition w-full inline-flex justify-center items-center px-5 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-cyan-600 focus:outline-none',
                {
                  'opacity-50 cursor-progress': loading,
                  'hover:shadow-sm hover:shadow-cyan-100 hover:bg-cyan-700 active:bg-cyan-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500':
                    !loading,
                }
              )}
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <LockOpenIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
              )}

              {loading ? t('unlocking') : t('submit')}
            </button>
          </form>
        )}
      </BottomSheet>
    </div>
  )
}

export function RedactedLabel() {
  const t = useTranslations('UnlockButton')

  return (
    <label
      className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
      htmlFor="unlock-button"
    >
      {t('redacted')}
    </label>
  )
}
