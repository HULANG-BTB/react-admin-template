import React from 'react'

type AuthComponentProps<E extends React.ElementType> = {
  as?: E
  fallback?: React.ReactNode
  auth?: string | (() => boolean) | boolean
}

type AuthProps<E extends React.ElementType> = AuthComponentProps<E> &
  Omit<React.ComponentProps<E>, keyof AuthComponentProps<E>>

const Auth = <E extends React.ElementType>(props: AuthProps<E>) => {
  const { as, fallback, auth, ...rest } = props
  const Component = as ?? 'span'
  let hasAuth = false

  if (auth === undefined) {
    return <Component {...rest} />
  } else if (typeof auth === 'function') {
    hasAuth = auth()
  } else if (typeof auth === 'boolean') {
    hasAuth = auth
  } else {
    // todo 自定义权限逻辑校验
    hasAuth = [''].includes(auth)
  }
  if (hasAuth) {
    return <Component {...rest} />
  }
  return <>{fallback ? fallback : null}</>
}

export default Auth
