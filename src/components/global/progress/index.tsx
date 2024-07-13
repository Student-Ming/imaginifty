import { Router } from "next/router"
import { useEffect } from "react"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

export const LoadingProgress = () => {
  useEffect(() => {
    NProgress.configure({showSpinner: false, minimum: 0.3})

    const handleRouteChangeStart = () => {
      NProgress.start()
    }

    const handleRouteChangeComplete = () => {
      NProgress.done()
    }

    const handleRouteChangeError = () => {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  return null
}

export default LoadingProgress